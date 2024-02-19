import SchemaBuilder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'

import PrismaTypes from './types'
import { client } from './client'

export const builder = new SchemaBuilder<{
  Scalars: {
    DateTime: {
      Input: Date
      Output: Date
    }
  }
  PrismaTypes: PrismaTypes
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client,
    filterConnectionTotalCount: true
  }
})
