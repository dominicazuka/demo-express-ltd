// middleware/role.middleware.js
const verifyRole = (roles) => (req, res, next) => {
    // Check if the user object exists and has a role
    if (!req.user || !req.user.role) {
      return res.status(401).json({ message: 'Unauthorized! Please login to continue' });
    }
  
    // Check if the user role is in the allowed roles
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden! You do not have permission to access this resource' });
    }
  
    // Move to the next middleware or route handler
    next();
  };
  
  module.exports = { verifyRole };
  