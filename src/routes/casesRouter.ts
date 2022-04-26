import {Router} from 'express'
import {addCase, getAllCases, getCaseById} from '../controllers'

const router = Router()

router.route('/').get(getAllCases)
router.route('/case').get(getCaseById)
router.route('/').post(addCase)

export default router
