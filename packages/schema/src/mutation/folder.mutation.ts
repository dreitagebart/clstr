import { auth } from '@clstr/auth'
import { GraphQLError } from 'graphql'

import { builder } from '../builder'
import { client } from '../client'
import {
  FolderCreateInput,
  FolderUpdateInput,
  FolderWhereUniqueInput
} from '../input/folder.input'

builder.mutationField('folderCreate', (t) =>
  t.prismaField({
    type: 'Folder',
    args: {
      data: t.arg({ type: FolderCreateInput, required: true })
    },
    resolve: async (query, root, { data }) => {
      const session = await auth()

      console.log('session', JSON.stringify(session, null, 2))

      if (!session?.user) {
        throw new GraphQLError('Not authorized')
      }

      return client.folder.create({
        data
      })
    }
  })
)

builder.mutationField('folderUpdate', (t) =>
  t.prismaField({
    type: 'Folder',
    args: {
      where: t.arg({ type: FolderWhereUniqueInput, required: true }),
      data: t.arg({ type: FolderUpdateInput, required: true })
    },
    resolve: (query, root, { data, where }) => {
      return client.folder.update({
        where,
        data
      })
    }
  })
)
