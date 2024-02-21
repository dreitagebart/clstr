import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { writeFileSync } from 'fs'
import { lexicographicSortSchema, printSchema } from 'graphql'

import { schema } from './schema'

const schemaAsString = printSchema(lexicographicSortSchema(schema))

const outputPath = join(
  dirname(fileURLToPath(import.meta.url)),
  '../schema.graphql'
)

console.log('schema written to:', outputPath)

writeFileSync(outputPath, schemaAsString)
