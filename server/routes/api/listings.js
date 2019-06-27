const express = require('express');
const router = express.Router();

// Get the Listing model
const Listing = require('../../models/Listing');

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

router.get("/:id", (req, res) => {
	Listing
		.findById(req.params.id) // Get all listings
		.then(listing => res.json(listing))
		.catch(err => res.status(404).json({success: false}));
});

// @route POST api/listings/
// @desc Post a listing
// @access Private

router.post("/", (req, res) => {
	// Extract req.body
	// TODO : validation of input
	const newListing = new Listing({
		jobName: req.body.jobName + "",
		price: req.body.price || 0,
		cityName: req.body.cityName + "",
		stateCode: req.body.stateCode + "",
		description: req.body.description + "",
		datePosted: Date.now(),
		owner: req.body.owner + "",
		complete: false,
	});
	newListing
		.save()
		.then(listing => res.json(listing))
		.catch(err => console.log(err));
});

// @route DELETE api/listings/:id
// @desc Post a listing
// @access Private

router.delete("/:id", (req, res) => {
	Listing
		.findById(req.params.id)
		.then(listing => listing.remove().then(() => res.json({success: true})))
		.catch(err => console.log(err));
});

module.exports = router;