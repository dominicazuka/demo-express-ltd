// Importing required modules
const { validationResult } = require('express-validator');

// Middleware function to validate request input
const validate = (validation) => {
    return async (req, res, next) => {
        // Execute all validation checks
        await Promise.all(validation.map(v => v.run(req)));
        // Get validation results
        const result = validationResult(req);
        // If input is valid, proceed to the next middleware or route handler
        if (result.isEmpty()) {
            return next();
        }
        // If input is invalid, construct error message
        const { errors } = result;
        let message = "";
        errors.forEach(element => {
            message += element.msg + ",";
        });
        // Send error response with error message
        return res.status(400).json({ message });
    }
};

// Export the validate middleware function
module.exports = validate;
