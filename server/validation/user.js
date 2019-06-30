const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateNewUserData(newUserData) {
	let errors = {}; // This will be for sending errors to client

	// We have to convert empty fields to an empty string because validator only
	// works with strings
	newUserData.firstName = !isEmpty(newUserData.firstName) ? newUserData.firstName : "";
	newUserData.lastName = !isEmpty(newUserData.lastName) ? newUserData.lastName : "";
	newUserData.email = !isEmpty(newUserData.email) ? newUserData.email : "";
	newUserData.ccNumber = !isEmpty(newUserData.ccNumber) ? newUserData.ccNumber : "";
	newUserData.ccSecurityCode = !isEmpty(newUserData.ccSecurityCode) ? newUserData.ccSecurityCode : "";
	newUserData.ccExpiryDate = !isEmpty(newUserData.ccExpiryDate) ? newUserData.ccExpiryDate : "";

	// Name checks
	if(Validator.isEmpty(newUserData.firstName)) {
		errors.firstName = "First name required";
	}

	// Email checks
	if (Validator.isEmpty(newUserData.email)) {
		errors.email = "Email field is required";
	} else if (!Validator.isEmail(newUserData.email)) {
		errors.email = "Email is invalid";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};

};