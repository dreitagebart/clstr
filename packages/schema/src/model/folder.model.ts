import { builder } from '../builder'

builder.prismaObject('Folder', {
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    pages: t.relation('pages'),
    workspaceId: t.exposeString('workspaceId'),
    workspace: t.relation('workspace'),
    createdAt: t.expose('createdAt', { type: 'DateTime' })
  })
})
