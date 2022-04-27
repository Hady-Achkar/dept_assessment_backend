import {Schema, model} from 'mongoose'
import {Case} from '../types'

const CasesSchema = new Schema<Case>(
	{
		title: {
			type: String,
			trim: true,
			required: [true, 'title is a required field'],
		},
		content: {
			type: String,
			trim: true,
			required: [true, 'content is a required field'],
		},
		thumbnail: {
			type: String,
			trim: true,
			required: [true, 'thumbnail is a required field'],
		},
		image: {
			type: String,
			trim: true,
			required: [true, 'image is a required field'],
		},
		description: {
			type: String,
			trim: true,
			required: [true, 'description is a required field'],
		},
		work: {
			type: String,
			trim: true,
			required: [true, 'work is a required field'],
		},
		industry: {
			type: String,
			trim: true,
			required: [true, 'industry is a required field'],
		},
	},
	{
		timestamps: true,
		versionKey: false,
		minimize: false,
	}
)
CasesSchema.pre('save', async function (next) {
	this.work = this.work.toLowerCase()
	this.industry = this.industry.toLowerCase()
	next()
})
export default model<Case>('cases', CasesSchema)
