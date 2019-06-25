const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
	let errors = {}; // for sending errors back to client

	// We have to convert empty fields to an empty string because validator only
	// works with strings
	data.email = !isEmpty(data.email) ? data.email : "";
	data.password = !isEmpty(data.password) ? data.password : "";

	// Email checks
	if(Validator.isEmpty(data.email)) {
		errors.email = "Email field required";
	} else if (!Validator.isEmail(data.email)) {
		errors.email = "Email is invalid";
	}

	// Password checks
	if(Validator.isEmpty(data.password)) {
		errors.password = "Password field is required";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};