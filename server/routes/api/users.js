const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load EndUser model
const EndUser = require("../../models/EndUser");


// @route POST api/users/register
// @desc Register user
// @access Public

router.post("/register", (req, res) => {
	// Form validation

	// Pull errors and isValid boolean from validation function
	const { errors, isValid } = validateRegisterInput(req.body);

	// Check validation
	if(!isValid) {
		return res.status(400).json(errors);
	}

	EndUser
		.findOne({ email: req.body.email })
		.then(user => {
			if(user) {
				return res.status(400).json({email: "Email already exists"});
			} else {
				const newUser = new EndUser({
					firstName: req.body.firstName,
					email: req.body.email,
					password: req.body.password,
					role: req.body.role
				});

				// Hash password before saving in database
				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if(err) throw err;
						newUser.password = hash;
						newUser
							.save()
							.then(user => res.json(user))
							.catch(err => console.log(err));
					});
				});
			}
		});
});


// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
	// Form validation

	const { errors, isValid } = validateLoginInput(req.body);

	//Check validation
	if(!isValid) {
		return res.status(400).json(errors);
	}

	const email = req.body.email;
	const password = req.body.password;

	// Find user by email
	EndUser
		.findOne({ email })
		.then(user => {
			// Check if user exists
			if(!user) {
				return res.status(404).json({ emailnotfound: "Email not found"});
			}

			// Check password
			bcrypt
				.compare(password, user.password)
				.then(isMatch => {
					if(isMatch) {
						// This means user is matched
						// So we create the JWT Payload
						const payload = {
							id: user.id,
							name: user.name
						};

						// Then sign the token
						jwt.sign(
							payload,
							keys.secretOrKey,
							{
								expiresIn: 31556926 // 1 year in seconds
							},
							(err, token) => {
								res.json({
									success: true,
									token: "Bearer " + token
								});
							}
						);
					}
					else {
						return res
							.status(400)
							.json({ passwordincorrect: "Password incorrect" });
					}
				});
		});
});

module.exports = router;