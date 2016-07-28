'use strict';

import mongoose from	'mongoose'
import bcrypt 	from	'bcrypt-nodejs'

const userSchema = mongoose.Schema({
	email: String,
	password: String,
	first: String,
	last: String
});

userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
