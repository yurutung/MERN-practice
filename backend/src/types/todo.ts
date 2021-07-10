import { Document } from 'mongoose'

// set types
interface ITodo extends Document {
    name: string
    description: string
    status: boolean
}

export { ITodo }
