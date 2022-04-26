import {Request, Response} from 'express'
import contacts from '../../models/contacts'

export default async (_: Request, res: Response) => {
	try {
		const _contacts = await contacts.find({})

		if (!contacts || _contacts.length === 0) {
			return res.status(404).json({
				message: 'No contacts found',
				status: 'Failure',
			})
		}

		return res.status(200).json({
			message: 'Contacts were fetched successfully',
			status: 'Success',
			data: _contacts,
		})
	} catch (error) {
		return res.status(500).json({
			message: 'Internal server error',
			error,
		})
	}
}
