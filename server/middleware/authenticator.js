const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/keys').secretOrKey;

// Helper function
// Given the authentication from the header
// The authHeader looks like "Bearer [token]"
// Then it just gives back the [token] part
const getBearerToken = (authHeader) => {
  let token = "";
  if (authHeader.startsWith("Bearer ")) {
     token = authHeader.substring(7, authHeader.length);
  } else {
     token = "";
  }
  return token;
};

// Helper function
// Given the JWT token, decodes it, and extracts the userID
const verifyTokenAndGetUID = (token) => {
  try {
    const decoded = jwt.verify(token, jwtSecret);
    return decoded.id;
  } catch(err) {
    throw err;
  }
  return decoded.id;
};

// Middleware for making sure user is who they say they are
// before they get or make updates to a user's data
// Used in API routes for getting/updating user data

const isUserAuthenticated = (req, res, next) => {

  const authHeader = req.headers.authorization;
  // If there is no token...then user doesn't have a JWT!
  if (!authHeader) {
    return res.status(403).json({
      status: 403,
      message: 'FORBIDDEN'
    })
  } else {
    // Extract the token from the authHeader
    let token = getBearerToken(authHeader);
    if (token) {
     let id; 
      try {
      	id = verifyTokenAndGetUID(token);
        res.locals.auth = {
        	userId: id
        }
      next();      
    	} catch (err) {
        return res.status(401).json({
            status: 401,
            message: 'UNAUTHORIZED'
          });
      	}
    } else {
      return res.status(403).json({
        status: 403,
        message: 'FORBIDDEN'
      })
    }
  }
}

module.exports = { isUserAuthenticated };