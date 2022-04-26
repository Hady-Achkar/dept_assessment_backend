import {Request, Response} from 'express'
import cases from '../../models/cases'
import {isValidObjectId} from 'mongoose'

export default async (req: Request, res: Response) => {
	try {
		const {caseId} = req.query

		if (!caseId) {
			return res.status(400).json({
				message: 'caseId is required in the query',
			})
		}
		if (!isValidObjectId(caseId)) {
			return res.status(400).json({
				message: 'caseId is invalid',
			})
		}
		const _case = await cases.findById(caseId)

		return res.status(200).json({
			message: 'Case was fetched successfully',
			status: 'Success',
			data: _case,
		})
	} catch (error) {
		return res.status(500).json({
			message: 'Internal server error',
			error,
		})
	}
}
