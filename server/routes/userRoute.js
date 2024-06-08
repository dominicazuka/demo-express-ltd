const validate = require('../middleware/validator.middleware')
const {
  validateSignUpInput,
  validateVerifyEmailInput
} = require('../validators')
const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Session = require('../models/session')
const Newsletter = require('../models/newsletter')
const {
  generateHash,
  generateVerificationCode,
  getAuthTokens
} = require('../util')
const eventManager = require('../event')
const { verifyRefreshToken } = require('../middleware/auth.middleware')

// register user
router.post('/register', validate(validateSignUpInput), async (req, res) => {
  try {
    const body = req.body
    console.log("body", body);
    // hash password
    const hashPassword = generateHash(req.body.password)

    // user device
    const device = req.headers["user-agent"];
    console.log("device", device);

    // user ip
    const ip = req.ip;
    console.log("ip", ip);

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email: body.email })
    if (existingUser) {
      return res.status(400).json({
        message: 'A user with that credentials (email) already exists!'
      })
    }

    // Create newsletter subscription if opted in
    if (body.newsletter) {
      const findEmail = await Newsletter.findOne({ email: body.email })
      if (!findEmail) {
        const newsletterSubscription = await Newsletter.create({
          email: body.email
        })
      }
    }

    //generate verification code
    const verificationCode = generateVerificationCode()

    // store user in db
    const user = await User.create({
      name: body.name,
      email: body.email,
      phone: body.phone,
      role: body.role,
      country: body.country,
      countryCode: body.countryCode,
      state: body.state,
      city: body.city,
      password: hashPassword,
      address: body.address,
      company: body.company,
      vatTaxId: body.vatTaxId,
      postalCode: body.postalCode,
      verificationString: verificationCode
    })

    console.log("user", user);

     // Generate authentication tokens
     const currentUser = {
      name: user.name,
      email: user.email,
      isBlocked: user.isBlocked,
      role: user.role,
      phone: user.phone,
      country: user.country,
      countryCode: user.countryCode,
      state: user.state,
      city: user.city,
      company: user.company,
      address: user.address,
      vatTaxId: user.vatTaxId,
      _id: user._id
    }

    console.log("currentUser", currentUser);

    const token = generateHash(user._id.toString())

    console.log("token", token);

    const { accessToken, refreshToken } = await getAuthTokens({
      ...currentUser,
      token
    })

    // Prepare response object
    const obj = {
      ...currentUser,
      accessToken,
      refreshToken
    }

    console.log("obj", obj);

    // Store session information
    const sessionObj = {
      device,
      ip,
      userId: user._id,
      token,
      email: user.email
    }

    console.log("sessionObj", sessionObj);

    await Session.create(sessionObj);

    //event emitter to send verification email
    eventManager.emit('register_user_email_verification_notification', {
      ...user._doc
    }) //send verification code to user email

   
    // Respond with success message and user details
    res
      .status(200)
      .json({ message: 'User registered successfully', user: obj });
  } catch (error) {
    console.log('error', error)
    return res
      .status(400)
      .json({ message: 'An error occurred, try registering again a new user' })
  }
})

// verify email route
router.put(
  '/verify-email',
  validate(validateVerifyEmailInput),
  async (req, res) => {
    try {
      const { verificationString } = req.body
      if (verificationString < 6) {
        return res.status(401).json({
          message: 'Verification code length must be 6 characters.'
        })
      }

      if (verificationString > 6) {
        return res.status(401).json({
          message: 'Verification code above required'
        })
      }

      const result = await User.findOne({
        verificationString
      })

      if (!result) {
        return res.status(401).json({
          message: 'Invalid verification code.'
        })
      }

      const { _id: id, name, email } = result
      const updateUser = await User.findOneAndUpdate(
        {
          _id: id
        },
        { $set: { isVerified: true } }
      );

      // Generate authentication tokens
    const currentUser = {
      name: result.name,
      email: result.email,
      isBlocked: result.isBlocked,
      role: result.role,
      phone: result.phone,
      country: result.country,
      countryCode: result.countryCode,
      state: result.state,
      city: result.city,
      company: result.company,
      address: result.address,
      vatTaxId: result.vatTaxId,
      _id: result._id
    };

    const token = generateHash(result._id.toString());
    const { accessToken, refreshToken } = await getAuthTokens({
      ...currentUser,
      token
    });

    // Prepare response object
    const obj = {
      ...currentUser,
      accessToken,
      refreshToken
    };

    // welcome email dispatch
      eventManager.emit('new_user_verified', { ...result._doc })
      res.status(200).json({ message: 'Email Verified Successfully', user: obj });
    } catch (error) {
      console.log('error', error)
      return res.status(400).json({
        message: 'An error occurred verifying user email, please try again.'
      })
    }
  }
)

// resend verification mail
router.put('/resend-verification-email', async (req, res) => {
  try {
    const { email } = req.body
    // Find the user by email address
    const user = await User.findOne({ email })

    // If user not found, return error
    if (!user) {
      return res.status(400).json({ message: 'User not found.' })
    }

    // If already verified, return error
    if (user.isVerified) {
      return res.status(400).json({ message: 'User already verified.' })
    }

    // send new verification email
    eventManager.emit('resend_user_email_verification_code', { ...user._doc })
    res.status(200).json({ message: 'Verification Code Sent Successfully' })
  } catch (error) {
    console.log('error', error)
    return res.status(400).json({
      message:
        'An error occurred resending user verification code, please try again.'
    })
  }
})


//  route to refresh authentication tokens
router.post("/refresh/token", verifyRefreshToken, async (req, res) => {
  try {
    console.log({
      userId: req.user.userId,
      token: req.user.token
    })
    // Extract user ID and token from the request
    const userId = req.user.userId;
    const token = req.user.token;

    // Find the session associated with the user ID and token
    const session = await Session
      .findOne({ userId, token })
      .sort({ _id: 1 });

    // If session doesn't exist or is not active, return a 403 Forbidden response
    if (!session || !session.isActive) {
      return res.status(403).json({
        message: "Sorry, login to continue. Authentication is required",
      });
    }

    // Find the user by user ID
    const _user = await User.findById({ _id: userId });

    // If user doesn't exist or is blocked, return a 401 Unauthorized response
    if (_user && _user.isBlocked) {
      return res.status(401).json({
        message: "Sorry, your account is suspended. Please contact admin",
      });
    }

    // Generate authentication tokens for the user
    const currentUser = {
      name: _user.name,
      email: _user.email,
      isBlocked: _user.isBlocked,
      role: _user.role,
      phone: _user.phone,
      country: _user.country,
      countryCode: _user.countryCode,
      state: _user.state,
      city: _user.city,
      company: _user.company,
      address: _user.address,
      vatTaxId: _user.vatTaxId,
      _id: _user._id
    };

    const { accessToken, refreshToken } = await getAuthTokens({
      ...currentUser,
      token,
    });

    // Construct response object with updated authentication tokens and user details
    const user = {
      ...currentUser,
      accessToken,
      refreshToken,
    };

    // Log the constructed response object
    console.log("Response Object:", user);

    // Send the response with the updated authentication tokens and user details
    return res.send(user);
  } catch (error) {
    console.error("Error during token refresh:", error);
    // If an error occurs, return a 400 Bad Request response
    return res
      .status(400)
      .json({ message: "Sorry, an error occurred. Please try again later" });
  }
});

module.exports = router