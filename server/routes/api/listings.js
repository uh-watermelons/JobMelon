const express = require('express');
const router = express.Router();

// Middleware so people can only edit/delete their own listings
const isUserAuthenticated = require('../../middleware/authenticator').isUserAuthenticated;
const validateUserAuthenticity = require('../../utils/utils').validateUserAuthenticity;

// Validation methods
const validateListingInput = require("../../validation/listing");

// Get models
const Listing = require('../../models/Listing');
const EndUser = require('../../models/EndUser');

const jwt = require('jsonwebtoken');
const jwtSecret = require('../../config/keys').secretOrKey;

// @route get api/listings/
// @desc Get all listings
// @access Public
router.get("/", (req, res) => {

	Listing
		.find() // Get all listings
		.sort({ date: -1}) // Newest come first
		.then(listings => res.json(listings));
});

// @route get api/listings/:id
// @desc Get specific listing
// @access Public

router.get("/:id",(req, res) => {
	Listing
		.findById(req.params.id) // Get all listings
		.then(listing => res.json(listing))
		.catch(err => res.status(404).json({success: false}));
});

// @route POST api/listings/create/:userId
// @desc Post a listing
// @access Private

router.post("/create/:userId", isUserAuthenticated, (req, res) => {

	if(validateUserAuthenticity(res.locals, req.params.userId)) {
		const { errors, isValid } = validateListingInput(req.body);

		if(!isValid) {
			return res.status(400).json(errors);
		} else {
			const datePosted = new Date();
			const newListing = new Listing({
			jobName: req.body.jobName,
			price: req.body.price,
			cityName: req.body.cityName,
			stateCode: req.body.stateCode,
			description: req.body.description,
			datePosted: datePosted,
			owner: req.body.owner,
			ownerName: req.body.ownerName,
			complete: false,
			});
			// Save to database
			newListing
				.save()
				.then(listing => res.json({success:true}))
				.catch(err => res.json({success:false}));
		}
	} else {
		res.status(401).json({
			status: 401,
			message: 'UNAUTHORIZED'
		});
	}
});

// @route DELETE api/listings/delete/:userId/:listingId
// @desc Delete a listing, remove from database
// @access Private

router.delete("/delete/:userId/:listingId", isUserAuthenticated, (req, res) => {
	const { userId, listingId } = req.params;
	// authenticator should have set res.locals.auth

	if(validateUserAuthenticity(res.locals, userId)) {
		Listing
			.findById(listingId)
			.then(listing => listing.remove().then(() => res.json({success: true})))
			.catch(err => console.log(err));
	} else {
		res.status(401).json({
			status: 401,
			message: 'UNAUTHORIZED'
		});
	}
});

// @route POST api/listings/complete/:userId/:listingId
// @desc Complete a listing (setting complete to true)
// @access Private

router.post("/complete/:userId/:listingId", isUserAuthenticated, (req, res) => {
	const { userId, listingId } = req.params;
	// authenticator should have set res.locals.auth
	if(validateUserAuthenticity(res.locals, userId)) {
		Listing.update({_id:listingId}, { $set: {complete:true} }, null, (err, docs) => {
			//console.log('successfully updated');
		})
	} else {
		res.status(401).json({
			status: 401,
			message: 'UNAUTHORIZED'
		});
	}
});

// @route api/listings/user/:userId/
// @desc Give user his/her listings
// @access private
router.get('/user/:userId', isUserAuthenticated, (req, res) => {
	const { userId } = req.params;
	if(validateUserAuthenticity(res.locals, userId)) {
		// Find all of the user's listings as an array
		Listing.find({owner:userId}, null, {lean:true}, (err, docs) => {
			res.json(docs);
		})
	} else {
		res.status(401).json({
			status: 401,
			message: 'UNAUTHORIZED'
		});
	}

});

module.exports = router;