import {Schema, model} from 'mongoose'
import {Contact} from '../types'

const ContactsSchema = new Schema<Contact>(
	{
		name: {
			type: String,
			trim: true,
			required: [true, 'name is a required field'],
		},
		email: {
			type: String,
			trim: true,
			required: [true, 'email is a required field'],
		},
		message: {
			type: String,
			trim: true,
			required: [true, 'message is a required field'],
		},
	},
	{
		timestamps: true,
		versionKey: false,
		minimize: false,
	}
)

export default model<Contact>('Contacts', ContactsSchema)
