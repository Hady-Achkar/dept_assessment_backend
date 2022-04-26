import {Request, Response} from 'express'
import cases from '../../models/cases'

export default async (_: Request, res: Response) => {
	try {
		const _cases = await cases.find({})

		if (!cases || _cases.length === 0) {
			return res.status(404).json({
				message: 'No cases found',
				status: 'Failure',
			})
		}

		return res.status(200).json({
			message: 'Cases were fetched successfully',
			status: 'Success',
			data: _cases,
		})
	} catch (error) {
		return res.status(500).json({
			message: 'Internal server error',
			error,
		})
	}
}
