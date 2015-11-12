module.exports = {  
  'url' : 'mongodb://localhost/passport'  
}

// models/user.js
var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    id: String,
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String
});
