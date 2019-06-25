const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
	let errors = {}; // This will be for sending errors to client

	// We have to convert empty fields to an empty string because validator only
	// works with strings
	data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
	data.email = !isEmpty(data.email) ? data.email : "";
	data.password = !isEmpty(data.password) ? data.password : "";
	data.password2 = !isEmpty(data.password2) ? data.password2 : "";

	// Name checks
	if(Validator.isEmpty(data.firstName)) {
		errors.name = "First name required";
	}

	// Email checks
	if (Validator.isEmpty(data.email)) {
		errors.email = "Email field is required";
	} else if (!Validator.isEmail(data.email)) {
		errors.email = "Email is invalid";
	}

	// Password checks
	if (Validator.isEmpty(data.password)) {
		errors.password = "Password field is required";
	}
	if(Validator.isEmpty(data.password2)) {
		errors.password2 = "Confirm password field required";
	}
	if(!Validator.isLength(data.password, { min: 15, max: 30})) {
		errors.password = "Password must be at least 15 characters";
	}
	if(!Validator.equals(data.password, data.password2)) {
		errors.password2 = "Passwords must match";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};

};