// Import the necessary dependencies
const jwt = require("jsonwebtoken"); // Importing JWT for token verification
const { jwtKeys } = require("../config"); // Importing JWT keys from configuration


// Middleware to verify authentication token
const verifyAuthToken = (req, res, next) => {
  // Extract the token from the request headers
  let token = req.headers["x-access-token"];  
  console.log('Received Access Token:', token); // Log the received token

  // Check if token exists
  if (!token) { 
    // If token doesn't exist, return a 403 Forbidden response
    return res
      .status(403)
      .send({ message: "Unauthenticated! Please login to continue" });
  }

  // Verify the authenticity of the token using the public key
  jwt.verify(token, jwtKeys.public, (err, decoded) => {
    // If there's an error in token verification
    if (err) {
      // Return a 401 Unauthorized response
      return res
        .status(401)
        .send({ message: "Unauthorized! Please login to continue" });
    }

    // If token is successfully verified, attach the decoded user information to the request object
    req.user = decoded;
    // Move to the next middleware in the chain
    next();
  });
};

// Middleware to verify refresh token
const verifyRefreshToken = (req, res, next) => {
  // Extract the refresh token from the request body
  let token = req.body.refreshToken;
  console.log('Received Refresh Token:', token); // Log the received refresh token

  // Check if refresh token exists
  if (!token) {
    // If refresh token doesn't exist, return a 403 Forbidden response
    return res
      .status(403)
      .send({ message: "Unauthenticated! Please login to continue" });
  }

  // Verify the authenticity of the refresh token using the secret key
  jwt.verify(token, jwtKeys.secret, (err, decoded) => {
    // If there's an error in token verification
    if (err) {
      // Return a 403 Forbidden response
      return res
        .status(403)
        .send({ message: "Unauthenticated! Please login to continue" });
    }

    // If refresh token is successfully verified, attach the decoded user information to the request object
    req.user = decoded;
    // Move to the next middleware in the chain
    next();
  });
};

// Export the middleware functions
module.exports = { verifyAuthToken, verifyRefreshToken };
