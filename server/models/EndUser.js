const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EndUserSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: false,
		default: ""
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	role: {
		type: String,
		required: true,
		default: "contractor"
	},

	ccNumber: {
		type: Number,
		default: 0
	},
	ccSecurityCode: { 
		type: Number,
		default: 0
	},
	ccExpiryDate: { 
		type: String,
		default: ""
	},
	date: {
		type: Date,
		default: Date.now
	}

});

module.exports = EndUser = mongoose.model("EndUser", EndUserSchema);