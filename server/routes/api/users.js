// Create route for getting user information
const express = require('express');
const router = express.Router();

const EndUser = require('../../models/EndUser');
const Listing = require('../../models/Listing');
// Middleware for making sure user is who they say they are
const isUserAuthenticated = require('../../middleware/authenticator').isUserAuthenticated;

// Import helper functions
const validateUserAuthenticity = require('../../utils/utils').validateUserAuthenticity;


// Will be used to encrypt passwords
// We will not hash this with brcypt because
// bcrypt can't decrypt passwords (which is good)
// But we need the password to be decrypted to get/update it
const Cryptr = require('cryptr'); // include cryptr module
const cryptr = new Cryptr('key'); // instatiate encrypter/decrypter with the secret key


// @route api/user/:userId
// @desc Get sensitive user information
// @access Private
router.get('/:userId', isUserAuthenticated, (req, res) =>{
	
	const { userId } = req.params;
	// authenticator should have set res.locals.auth
	if(validateUserAuthenticity(res.locals, userId)) 
	{	
		console.log('success');
		// This means user is who they say they are so...
		// Find the user information and return its data
		console.log(userId);
		EndUser
			.findOne({_id:userId})
			.then(user => {console.log(user);res.json(user);})
			.catch(err => 
				res
					.status(404)
					.json({
						status: 404,
						message: 'User does not exist'
					})
				);
	} else {
		console.log('failed');
		res.status(401).json({
			status: 401,
			message: 'UNAUTHORIZED'
		});
	}
});

// @route api/user/edit/:userId
// @desc Edits user information
// @access private
router.post('/edit/:userId', isUserAuthenticated, (req, res) => {

	const { userId } = req.params.userId;
	const { newData } = req.body;

	// authenticator should have set res.locals.auth
	if(validateUserAuthenticity(res.locals, userId)) 
	{
		// If the data is valid then eskeetit
		if(validateNewUserData(newData)) {
			// Find user in collection and update its information
			// Make sure to hash credit card information
			const encryptedCCNumber = cryptr.encrypt(newData.ccNumber);
			newData.ccNumber = encryptedCCNumber;
			// Finally, update the user information
			EndUser
				.updateUser(userId, newData)
				.then(user => res.json({message: 'Updated user information'}))
				.catch(err => res.status(404).json({message: 'Could not update user information'}));
		} else {
			res.status(400).json({errors})
		}
	} else {
		res.status(401).json({
			status: 401,
			message: 'UNAUTHORIZED'
		})
	}
});

// @route api/user/:userId/listings
// @desc Give user his/her listings
// @access private
router.get('/:userId/listings', isUserAuthenticated, (req, res) => {
	const { userId } = req.params.userId;

	if(validateUserAuthenticity(res.locals, userId)) {
		// Get the userid's owner field
		const errors = {};
		const ownerName = EndUser.findById(userId, 'email', { lean: true}, err => {errors.message = 'User does not exist'});
		// Find all of the user's listings as an array
		const listings = Listing.find({owner: owerName}, { lean: true}, err => {errors.message = 'User has no listings'});
		if(isEmpty(errors)) {
			res.json(listings);
		} else {
			res.json(errors);
		}
	} else {
		res.status(401).json({
			status: 401,
			message: 'UNAUTHORIZED'
		});
	}

});



module.exports = router;