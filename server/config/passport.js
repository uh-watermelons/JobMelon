const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const EndUser = mongoose.model("EndUser");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
	console.log("passport test");
	passport.use(
		new JwtStrategy(opts, (jwt_payload, done) => {
			EndUser.findById(jwt_payload.id)
				.then(user => {
					if(user) {
						console.log("user is user");
						return done(null, user);
					}
					console.log("user not user");
					return done(null, false);
				})
				.catch(err => console.log(err));
		})
	);
};