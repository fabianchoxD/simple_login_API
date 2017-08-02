var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/myuser', { useMongoClient: true });


var userSchema = mongoose.Schema({

	username: {type: String, unique: true},
	password: {type: String},
	firstname: String,
	lastname: String
});

var User = mongoose.model('myuser', userSchema);

module.exports = User;