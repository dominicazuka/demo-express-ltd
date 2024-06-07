// Importing required modules
const { body } = require('express-validator');

// Validation rules for sign-up input
const validateSignUpInput = [
    // Validation for name field
    body("name").trim().not().isEmpty().withMessage("Name is required"),
    // Validation for email field
    body("email").trim().not().isEmpty().withMessage("Email is required").bail().isEmail().withMessage("Please enter a valid email"),
    // Validation for phone field
    body("phone").trim().not().isEmpty().withMessage("Phone Number is required"),
    // Validation for password field
    body("password").trim().not().isEmpty().withMessage("Password is required").bail().isLength({min:8}).withMessage("Password length is too short"),
    // Validation for country field
    body("country").trim().not().isEmpty().withMessage("Country is required"),
    // Validation for state field
    body("state").trim().not().isEmpty().withMessage("State is required"),
    // Validation for city field
    body("city").trim().not().isEmpty().withMessage("City is required"),
    // Validation for role field
    body("role").trim().not().isEmpty().withMessage("Role is required"),
    // Validation for address field
    body("address").trim().not().isEmpty().withMessage("Address is required"),
]; 

// Export the validation rules
module.exports = { validateSignUpInput };
