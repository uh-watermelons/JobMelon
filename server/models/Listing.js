const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
	jobName: {
		type: String,
    maxlength: 50,
		required: true,
    default: "Job Listing"
	},
  price: {
    type: Number,
    min: 0,
    required: true,
    default: 0
  },
  cityName: {
    type: String,
    required: true,
    default: ""
  },
  stateCode: {
    type: String,
    required: true,
    default: ""
  },
  description: {
    type: String,
    maxlength: 500,
    required: true,
    default: "Job Description"
  },
  datePosted: {
    type: Date,
    default: Date.now,
    required: true
  },
  owner: {
    type: String,
    required: true,
    default: ""
  },
  complete: {
    type: Boolean,
    required: true,
    default: false
  }


});

// Given a user's ID, get all listings belonging to it
ListingSchema.statics.findUsersListings = function(userId) {

}

module.exports = Listing = mongoose.model("Listing", ListingSchema);
