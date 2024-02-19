import { builder } from '../builder'

builder.prismaObject('Workspace', {
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    description: t.exposeString('description', { nullable: true }),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    authorId: t.exposeString('authorId'),
    author: t.relation('author'),
    folders: t.relation('folders'),
    pages: t.relation('pages')
  })
})
