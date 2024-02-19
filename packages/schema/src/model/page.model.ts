import { builder } from '../builder'

builder.prismaObject('Page', {
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    content: t.exposeString('content'),
    folderId: t.exposeString('folderId', { nullable: true }),
    folder: t.relation('folder', { nullable: true }),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    authorId: t.exposeString('authorId'),
    author: t.relation('author'),
    workspaceId: t.exposeString('workspaceId'),
    workspace: t.relation('workspace')
  })
})
