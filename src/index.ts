import express from 'express'
import cors from 'cors'
import {connectToMongo} from './lib'
import {CasesRouter, ContactsRouter} from './routes'
import morgan from 'morgan'

const app = express()
const port = 5000

connectToMongo()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/cases', CasesRouter)
app.use('/contacts', ContactsRouter)

app.listen(port, () => console.log(`Server is running on port ${port}`))
