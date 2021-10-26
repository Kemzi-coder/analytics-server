import mongoose from 'mongoose'

const Schema = mongoose.Schema

const visitSchema = new Schema(
	{
		uuid: {
			type: String,
			required: true
		},
		url: {
			type: String
		},
		date: {
			type: String
		},
		mdate: {
			type: Number
		}
	},
	{versionKey: false}
)

const Visit = mongoose.model('Visit', visitSchema)

export default Visit
