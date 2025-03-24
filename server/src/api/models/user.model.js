const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	sname: { type: Number, required: true},
	onSale: {type:Boolean}
})

const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel
