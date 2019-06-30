const validateUserAuthenticity = (locals, userId) => {
	// Checks:
	// 1. authorization exists
	// 2. authorization has a userId
	// 3. if the authorization's userId matches the given userId
	if(locals.auth && locals.auth.userId && userId === locals.auth.userId){
		return true;
	} else {
		return false;
	}
}

// will get data from the request body
// remember to pull is-empty as an import
const validateNewUserData = (data) => {
	let errors = {};
	// Validate user info and update errors

	return {
		errors,
		isValid: isEmpty(errors)
		};

}

module.exports = {validateUserAuthenticity, validateNewUserData};
