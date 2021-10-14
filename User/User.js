import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
	uuid: {
		type: String,
		unique: true
	},
	user_agent: {
		type: String
	},
	screen: {
		type: String
	},
	os_name: {
		type: String
	},
	os_version: {
		type: String
	},
	browser_name: {
		type: String
	},
	browser_version: {
		type: String
	},
	cpu: {
		type: String
	},
	engine: {
		type: String
	},
	device: {
		type: String
	},
	languages: {
		type: String
	},
	date: {
		type: String
	},
	mdate: {
		type: Number
	}
}, {versionKey: false})

const User = new mongoose.model('User', userSchema)

export default User