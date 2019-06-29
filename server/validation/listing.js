const isEmpty = require("is-empty");

module.exports = function validateListingInput(data) {
	let errors = {}; // for sending errors back to client

	if(!data.jobName) {
		errors.jobName = 'Please enter a name for the listing';
	}
	if(data.jobName.length > 50) {
		errors.jobName = 'Listing name must be fewer than 50 characters';
	}
	if(data.price < 0) {
		errors.price = 'Price cannot be negative';
	}
	if(!data.cityName) {
		errors.cityName = 'Please provide the city';
	}
	if(data.cityName.length > 50) {
		errors.cityName = 'Name of city must be fewer than 50 characters';
	}
	if(!data.stateCode) {
		errors.stateCode = 'Please provide the state';
	}
	if(data.description.length > 500) {
		errors.descripton = 'Description must be fewer than 500 characters';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};