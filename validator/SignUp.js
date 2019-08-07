const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateSignupInput(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirmPassword = !isEmpty(data.confirmPassword)
    ? data.confirmPassword
    : "";
  data.cardNumber = !isEmpty(data.cardNumber) ? data.cardNumber : "";
  data.expirationDate = !isEmpty(data.expirationDate)
    ? data.expirationDate
    : "";
  data.ccv = !isEmpty(data.ccv) ? data.ccv : "";

  if (!Validator.isLength(data.username, { min: 6, max: 30 })) {
    errors.username = "Username must be betweeen 6 and 30 characters";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters";
  }

  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = "Confirm password can't be empty";
  }

  if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = "Password must match";
  }

  if (Validator.isEmpty(data.cardNumber)) {
    errors.cardNumber = "Card number is required";
  }

  if (!Validator.isLength(data.cardNumber, { min: 16, max: 16 })) {
    errors.cardNumber = "Invalid Card Number";
  }

  if (Validator.isEmpty(data.expirationDate)) {
    errors.expirationDate = "Card expiration date must be set";
  }

  if (Validator.isEmpty(data.ccv)) {
    errors.ccv = "CCV must be set";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
