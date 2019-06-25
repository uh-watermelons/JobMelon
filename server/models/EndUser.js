const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EndUserSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: false
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
		client: Boolean,
		contractor: Boolean
	}
	ccNumber: Number,
	ccSecurityCode: Number,
	ccExpiryDate: String,

	date: {
		type: Date,
		default: Date.now
	}

});

module.exports = EndUser = mongoose.model("EndUser", EndUserSchema);