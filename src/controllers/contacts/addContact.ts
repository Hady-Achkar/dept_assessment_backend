import {Request, Response} from 'express'
import {ContactsSchema} from '../../models'

export default async (req: Request, res: Response) => {
	try {
		const {name, email, message} = req.body
		console.log(req.body)

		if (!name || name === '') {
			return res.status(400).json({
				message: 'name is a required field',
			})
		}
		if (!email || email === '') {
			return res.status(400).json({
				message: 'email is a required field',
			})
		}
		if (!message || message === '') {
			return res.status(400).json({
				message: 'message is a required field',
			})
		}

		const _contact = await ContactsSchema.create({
			name,
			email,
			message,
		})

		if (!_contact) {
			return res.status(500).json({
				message: 'Unable to create contact.',
			})
		}

		console.log(_contact)

		return res.status(200).json({
			message: 'Contact was created successfully',
			data: _contact._id,
		})
	} catch (error) {
		return res.status(500).json({
			message: 'whats? server error',
			error: error,
		})
	}
}
