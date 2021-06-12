const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
	username: String,
	password: String,
	email: String,
	createdAt: {
		type: Date,
		default: Date.now
	}
})

UserSchema.methods.generateHash = password => {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

UserSchema.methods.validPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
}


module.exports = mongoose.model("user", UserSchema);