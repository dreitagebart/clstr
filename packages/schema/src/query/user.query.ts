import { builder } from '../builder'
import { client } from '../client'

builder.queryField('users', (t) =>
  t.prismaField({
    type: ['User'],
    resolve: () => {
      return client.user.findMany()
    }
  })
)
