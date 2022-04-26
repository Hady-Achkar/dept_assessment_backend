import mongoose from 'mongoose'

export const connectToMongo = () => {
	try {
		mongoose.connect(
			'mongodb+srv://hadi:HadiAsh123@dept.pb7zu.mongodb.net/test'
		)
		console.log('connected to db')
	} catch (error) {
		console.log(error)
	}
}
