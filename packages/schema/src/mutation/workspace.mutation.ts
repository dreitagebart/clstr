// import { getServerSession } from '@clstr/auth'
import { builder } from '../builder'
import { client } from '../client'
import {
  WorkspaceCreateInput,
  WorkspaceUpdateInput,
  WorkspaceWhereUniqueInput
} from '../input/workspace.input'
import { GraphQLError } from 'graphql'

builder.mutationField('workspaceCreate', (t) =>
  t.prismaField({
    type: 'Workspace',
    args: {
      data: t.arg({ type: WorkspaceCreateInput, required: true })
    },
    resolve: async (query, root, { data }) => {
      // const session = await getServerSession()

      // console.log('session', JSON.stringify(session, null, 2))

      // if (!session?.user) {
      //   throw new GraphQLError('Not authorized')
      // }

      return client.workspace.create({
        data: {
          ...data,
          author: {
            connect: {
              email: 'stefan.buechold@gmail.com'
            }
          }
        }
      })
    }
  })
)

builder.mutationField('workspaceUpdate', (t) =>
  t.prismaField({
    type: 'Workspace',
    args: {
      where: t.arg({ type: WorkspaceWhereUniqueInput, required: true }),
      data: t.arg({ type: WorkspaceUpdateInput, required: true })
    },
    resolve: (query, root, { data, where }) => {
      return client.workspace.update({
        where,
        data
      })
    }
  })
)
