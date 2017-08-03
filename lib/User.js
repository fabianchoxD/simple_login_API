var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
	SALT_WORK_FACTOR = 10;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/myuser', { useMongoClient: true });


var userSchema = mongoose.Schema({

	username: {type: String, unique: true},
	password: {type: String},
	firstname: String,
	lastname: String
});

userSchema.pre('save', function (next){
	var user = this;

	//Only hash the password if it has been modified (or is new)
	if(!user.isModified('password')) return next();

	//Generate a Salt
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
		if (err) return next(err);

		//Hash the password using our new  Salt
		bcrypt.hash(user.password, salt, function(err, hash){
			if (err) return next(err);

			//Override the clearText password with the  hashed one
			user.password = hash;
			next();
		});

	});
});

//Compare the password

userSchema.methods.comparePassword = function(candidatePassword, callback){
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
		if(err) return callback(err);
		callback(undefined, isMatch);
	});
};

var User = mongoose.model('myuser', userSchema);

module.exports = User;