import { getServerSession } from '@clstr/auth'
import { builder } from '../builder'
import { client } from '../client'
import {
  PageCreateInput,
  PageUpdateInput,
  PageWhereUniqueInput
} from '../input/page.input'
import { GraphQLError } from 'graphql'

builder.mutationField('pageCreate', (t) =>
  t.prismaField({
    type: 'Page',
    args: {
      data: t.arg({ type: PageCreateInput, required: true })
    },
    resolve: async (query, root, { data }) => {
      const session = await getServerSession()

      console.log('session', JSON.stringify(session, null, 2))

      if (!session?.user) {
        throw new GraphQLError('Not authorized')
      }

      return client.page.create({
        data: {
          title: data.title,
          content: data.content,
          workspace: {
            connect: {
              id: data.workspaceId
            }
          },
          author: {
            connect: {
              email: session.user.email!
            }
          }
        }
      })
    }
  })
)

builder.mutationField('pageUpdate', (t) =>
  t.prismaField({
    type: 'Page',
    args: {
      where: t.arg({ type: PageWhereUniqueInput, required: true }),
      data: t.arg({ type: PageUpdateInput, required: true })
    },
    resolve: (query, root, { data, where }) => {
      return client.page.update({
        where,
        data
      })
    }
  })
)
