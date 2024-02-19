import { builder } from './builder'
import './enums'
import './scalars'
import './model'
import './query'
import './mutation'

export const schema = builder.toSchema()
