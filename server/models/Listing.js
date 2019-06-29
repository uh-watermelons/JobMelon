const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = mongoose.Schema.Types.ObjectId;

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
  owner: {  // will hold owner's userID
    type: ObjectId,
    required: true,
  },
  ownerName: {  // only first name for privacy reasons
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    required: true,
  }


});

// Given a user's ID, get all listings belonging to it
ListingSchema.statics.findUsersListings = function(userId) {
  return this.find({owner:userId}, {lean:true});
};

module.exports = Listing = mongoose.model("Listing", ListingSchema);
