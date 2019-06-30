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
		type: String,
		default: "0"
	},
	ccSecurityCode: { 
		type: String,
		default: "0"
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

// Updates user's data
EndUserSchema.statics.updateUser = function(userId, newData) {
	this.updateOne(
			{id:userId},
			{ $set: { newData } }
		)
		.then(user => {return true})
		.catch(err => {throw err});
}



module.exports = EndUser = mongoose.model("EndUser", EndUserSchema);