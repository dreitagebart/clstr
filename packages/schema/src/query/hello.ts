import { builder } from '../builder'

builder.queryField('hello', (t) =>
  t.string({
    resolve: () => 'hello, world!'
  })
)

builder.queryField('knusper', (t) =>
  t.string({
    resolve: () => 'fisch'
  })
)
