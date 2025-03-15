const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	sname: { type: String, required: true },
	city: { type: String, required: true},
	age: { type: String }
})

const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel
