// Importing required modules
const { body } = require('express-validator')

// Validation rules for sign-up input
const validateSignUpInput = [
  // Validation for name field
  body('name').trim().not().isEmpty().withMessage('Name is required'),
  // Validation for email field
  body('email')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Email is required')
    .bail()
    .isEmail()
    .withMessage('Please enter a valid email'),
  // Validation for phone field
  body('phone').trim().not().isEmpty().withMessage('Phone Number is required'),
  // Validation for password field
  body('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Password is required')
    .bail()
    .isLength({ min: 8 })
    .withMessage('Password length is too short'),
  // Validation for country field
  body('country').trim().not().isEmpty().withMessage('Country is required'),
  // Validation for state field
  body('state').trim().not().isEmpty().withMessage('State is required'),
  // Validation for city field
  body('city').trim().not().isEmpty().withMessage('City is required'),
  // Validation for role field
  body('role').trim().not().isEmpty().withMessage('Role is required'),
  // Validation for address field
  body('address').trim().not().isEmpty().withMessage('Address is required')
]

// Validation rules for verify email input
const validateVerifyEmailInput = [
  // Validation for verificationString field
  body('verificationString')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Verification String is required')
    .isLength({ min: 6, max: 6 })
    .withMessage('Verification String must be exactly 6 characters long')
    .matches(/^[0-9a-zA-Z]{6}$/)
    .withMessage('Verification String must be 6 alphanumeric characters')
]

// Validation rules for sign-up input
const validateSigninInput = [
  // Validation for email field
  body('email')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Email is required')
    .bail()
    .isEmail()
    .withMessage('Please enter a valid email'),
  // Validation for password field
  body('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Password is required')
    .bail()
    .isLength({ min: 8 })
    .withMessage('Password length is too short')
]

// Validation rules for adding a new partner
const validateAddPartnerInput = [
  body('name').trim().not().isEmpty().withMessage('Name is required'),
  body('email')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Email is required')
    .bail()
    .isEmail()
    .withMessage('Please enter a valid email'),
  body('phone').trim().not().isEmpty().withMessage('Phone Number is required'),
  body('country').trim().not().isEmpty().withMessage('Country is required'),
  body('state').trim().not().isEmpty().withMessage('State is required'),
  body('city').trim().not().isEmpty().withMessage('City is required'),
  body('address').trim().not().isEmpty().withMessage('Address is required')
]

// Validation rules for editing an existing partner
const validateEditPartnerInput = [
  // Validate the ID in the URL parameters
  body('id').trim().not().isEmpty().withMessage('Partner ID is required'),

  // Validate the body fields
  body('name').trim().not().isEmpty().withMessage('Name is required'),
  body('email')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Email is required')
    .bail()
    .isEmail()
    .withMessage('Please enter a valid email'),
  body('phone').trim().not().isEmpty().withMessage('Phone Number is required'),
  body('country').trim().not().isEmpty().withMessage('Country is required'),
  body('state').trim().not().isEmpty().withMessage('State is required'),
  body('city').trim().not().isEmpty().withMessage('City is required'),
  body('address').trim().not().isEmpty().withMessage('Address is required'),

  // Validate the user field
//   body('user').trim().not().isEmpty().withMessage('User is required')
]

// Export the validation rules
module.exports = {
  validateSignUpInput,
  validateVerifyEmailInput,
  validateSigninInput,
  validateAddPartnerInput,
  validateEditPartnerInput
}
