const nodeMailer = require('nodemailer'); // Import nodemailer for sending emails
const { mailConfig, jwtKeys} = require('../config'); // Import mail configuration from config file
const bcrypt = require('bcryptjs'); // Import bcryptjs for hashing passwords
const jwt = require("jsonwebtoken");

// Function to generate a hash from a given string
const generateHash = str => {
  const salt = bcrypt.genSaltSync(10); // Generate a salt with 10 rounds
  const hash = bcrypt.hashSync(str, salt); // Generate the hash using the salt
  return hash; // Return the generated hash
}

const { host, port, info, noreply } = mailConfig; // Destructure mail configuration for easy access

// Function to send emails from the "noreply" email account
const mailNoReplyDispatcher = async options => {
  try {
    let transporter = nodeMailer.createTransport({
      host,
      port,
      pool: true,
      maxConnections: 20,
      maxMessages: Infinity,
      priority: 'high',
      secure: port === 465, // Use secure connection if port is 465
      auth: {
        user: noreply.user,
        pass: noreply.password
      }
    });
    let result = await transporter.sendMail({
      from: noreply.user,
      subject: options.subject,
      ...options
    });
    return {
      error: false,
      result
    };
  } catch (error) {
    return {
      error: true,
      result: error.message
    };
  }
}

// Function to send emails from the "info" email account
const mailInfoDispatcher = async options => {
  try {
    let transporter = nodeMailer.createTransport({
      host,
      port,
      pool: true,
      maxConnections: 20,
      maxMessages: Infinity,
      priority: 'high',
      secure: port === 465, // Use secure connection if port is 465
      auth: {
        user: info.user,
        pass: info.password
      }
    });
    let result = await transporter.sendMail({
      from: info.user,
      subject: options.subject,
      ...options
    });
    return {
      error: false,
      result
    };
  } catch (error) {
    return {
      error: true,
      result: error.message
    };
  }
}

// Function to generate a 6-digit alphanumeric verification code
const generateVerificationCode = () => {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Characters to choose from
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length)); // Append a random character from chars
  }
  return code; // Return the generated code
}

const getAuthTokens = async (user) => {
  // Destructure token and the rest of the user properties
  const { token, ...rest } = user;

  const accessTokenExpiry = Math.floor(Date.now() / 1000) + 180; // Access token expires in 3 minutes (180 seconds)
  const refreshTokenExpiry = Math.floor(Date.now() / 1000) + 86400; // Refresh token expires in 1 day (86400 seconds)

  // Generate an access token with a specified expiration time
  const accessToken = await jwt.sign(rest, jwtKeys.public, {
    expiresIn: accessTokenExpiry,
  });

  // Generate a refresh token with a specified expiration time
  const refreshToken = await jwt.sign(
    { userId: rest._id, token },
    jwtKeys.secret,
    { expiresIn: refreshTokenExpiry }
  );

  // Return the generated access, accessTokenExpiry and refresh tokens
  return { accessToken, accessTokenExpiry, refreshToken };

};

// convert to lowercase
const lowerCase = (str) => {
  str = !str ? "" : str;
  return str.toString().toLowerCase();
};

// Export the functions for use in other parts of the application
module.exports = { generateHash, mailNoReplyDispatcher, mailInfoDispatcher, generateVerificationCode, getAuthTokens, lowerCase };
