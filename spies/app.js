var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
    // Check if the email already exists
    // Save the user
    db.saveUser({
        email,
        password
    });
};