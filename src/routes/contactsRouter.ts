import {Router} from 'express'
import {addContact, getContacts} from '../controllers'

const router = Router()

router.route('/').get(getContacts)
router.route('/').post(addContact)

export default router
