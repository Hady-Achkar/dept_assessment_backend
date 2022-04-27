import {Request, Response} from 'express'
import cases from '../../models/cases'

export default async (req: Request, res: Response) => {
	try {
		const {title, image, content, work, thumbnail, description, industry} =
			req.body

		if (!title || title === '') {
			return res.status(400).json({
				message: 'title is a required field',
			})
		}
		if (!content || content === '') {
			return res.status(400).json({
				message: 'content is a required field',
			})
		}
		if (!work || work === '') {
			return res.status(400).json({
				message: 'work is a required field',
			})
		}
		if (!thumbnail || thumbnail === '') {
			return res.status(400).json({
				message: 'thumbnail is a required field',
			})
		}
		if (!image || image === '') {
			return res.status(400).json({
				message: 'image is a required field',
			})
		}
		if (!industry || industry === '') {
			return res.status(400).json({
				message: 'industry is a required field',
			})
		}
		if (!description || description === '') {
			return res.status(400).json({
				message: 'description is a required field',
			})
		}

		const _case = await cases.create({
			title,
			content,
			work,
			image,
			thumbnail,
			industry,
			description,
		})

		return res.status(200).json({
			message: 'Case was created successfully',
			data: _case._id,
		})
	} catch (error) {
		return res.status(500).json({
			message: 'Internal server error',
			error,
		})
	}
}
