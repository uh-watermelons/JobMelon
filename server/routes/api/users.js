// Create route for getting user information
const express = require('express');
const router = express.Router();

const EndUser = require('../../models/EndUser');
const Listing = require('../../models/Listing');
// Middleware for making sure user is who they say they are
const isUserAuthenticated = require('../../middleware/authenticator').isUserAuthenticated;

// Import helper functions
const validateUserAuthenticity = require('../../utils/utils').validateUserAuthenticity;
// Validation methods
const validateNewUserData = require("../../validation/user");

// Will be used to encrypt passwords
// We will not hash this with brcypt because
// bcrypt can't decrypt passwords (which is good)
// But we need the password to be decrypted to get/update it
const keys = require("../../config/keys");
const Cryptr = require('cryptr'); // include cryptr module
const cryptr = new Cryptr(keys.secretOrKey); // instatiate encrypter/decrypter with the secret key


// @route api/user/:userId
// @desc Get sensitive user information
// @access Private
router.get('/:userId', isUserAuthenticated, (req, res) => {
	const { userId } = req.params;
	// authenticator should have set res.locals.auth
	if(validateUserAuthenticity(res.locals, userId)) 
	{	
		// This means user is who they say they are so...
		// Find the user information and return its data
		EndUser
			.findOne({_id:userId})
			.then(user => {
				const encryptedCCNumber = user.ccNumber || '';
				let decryptedCCNumber = '';
				if(encryptedCCNumber.length != 0) {
					decryptedCCNumber = cryptr.decrypt(user.ccNumber);
				}
      			const userData = {
					_id: user._id,
				    firstName: user.firstName,
				    lastName: user.lastName || '',
				    email: user.email,
				    ccNumber: decryptedCCNumber || '',
				    ccSecurityCode: user.ccSecurityCode || '',
				    ccExpiryDate: user.ccExpiryDate || '',
      			};
      			res.json(userData);
			})
			.catch(err => {
					console.log('boo');
					res
						.status(404)
						.json({
							status: 404,
							message: 'User does not exist'
						})
					}

				);
	} else {
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
	const { userId } = req.params;
	const newUserData = req.body;
	// authenticator should have set res.locals.auth
	if(validateUserAuthenticity(res.locals, userId)) 
	{
		const { errors, isValid } = validateNewUserData(newUserData);		
		// If the data is valid then eskeetit
		if(!isValid) {
			return res.status(400).json(errors);
		} else {
			console.log('success');
			// Find user in collection and update its information
			// Make sure to hash credit card information
			let encryptedCCNumber = newUserData.ccNumber;
			if(encryptedCCNumber) {
				encryptedCCNumber = cryptr.encrypt(newUserData.ccNumber);
			}
			newUserData.ccNumber = encryptedCCNumber;
			// Finally, update the user information
			console.log(newUserData);
			try {
				EndUser.update(
					{_id:userId},
					 { $set: {
			      		firstName: newUserData.firstName,
			      		lastName: newUserData.lastName,
			      		email: newUserData.email,
			      		ccNumber: newUserData.ccNumber,
			      		ccSecurityCode: newUserData.ccSecurityCode,
			      		ccExpiryDate: newUserData.ccExpiryDate				
					}
				}, 
				null,
				(err, docs) => {
					console.log('successfully updated');
					res.json({success:true});
					}
				);
			} catch (err) {
				res.json({success: false});
			}

		}
	} else {
		res.status(401).json({
			status: 401,
			message: 'UNAUTHORIZED'
		});
	}
});

module.exports = router; 