// Import the request-ip module
const RequestIp = require("@supercharge/request-ip");

// Middleware function to retrieve client IP address and attach it to the request object
const ipMiddleware = (req, res, next) => {
  // Retrieve the client IP address using the request-ip module
  const client = RequestIp.getClientIp(req);
  // Attach the client IP address to the request object
  req.ip = client;
  // Move to the next middleware or route handler
  next();
};

// Export the middleware function to be used in other parts of the application
module.exports = {ipMiddleware};