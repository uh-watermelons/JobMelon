const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
	jobName: {
		type: String,
    maxlength: 50
		required: true
	},
  price: {
    type: Number,
    min: 0,
    required: true
  },
  cityName: {
    type: String,
    required: true
  },
  stateCode: {
    type: String
    required: true
  },
  description: {
    type: String,
    maxlength: 200,
    required: true
  },
  datePosted: {
    type: Date,
    default: Date.now,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    required: true
  }


});

module.exports = Listing = mongoose.model("Listing", ListingSchema);
