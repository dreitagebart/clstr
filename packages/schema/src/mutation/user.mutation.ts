import { builder } from '../builder'
import { client } from '../client'
import {
  UserCreateInput,
  UserUpdateInput,
  UserWhereUniqueInput
} from '../input/user.input'

builder.mutationField('userCreate', (t) =>
  t.prismaField({
    type: 'User',
    args: {
      data: t.arg({ type: UserCreateInput, required: true })
    },
    resolve: (query, root, { data }) => {
      return client.user.create({
        data
      })
    }
  })
)

builder.mutationField('userUpdate', (t) =>
  t.prismaField({
    type: 'User',
    args: {
      where: t.arg({ type: UserWhereUniqueInput, required: true }),
      data: t.arg({ type: UserUpdateInput, required: true })
    },
    resolve: (query, root, { data, where }) => {
      return client.user.update({
        where,
        data
      })
    }
  })
)
