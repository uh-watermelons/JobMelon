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
		client: {
			type: Boolean,
			required: true,
			default: false
		},
		contractor: {
			type: Boolean,
			required: true,
			default: true
		}
	},
	
	ccNumber: Number,
	ccSecurityCode: Number,
	ccExpiryDate: String,

	admin: Boolean,
	date: {
		type: Date,
		default: Date.now
	}

});

module.exports = EndUser = mongoose.model("EndUser", EndUserSchema);