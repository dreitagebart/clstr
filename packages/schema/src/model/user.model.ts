import { builder } from '../builder'
import { ColorSchemeEnum } from '../enums'

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email'),
    firstname: t.exposeString('firstname'),
    lastname: t.exposeString('lastname'),
    about: t.exposeString('about', { nullable: true }),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    colorScheme: t.expose('colorScheme', { type: ColorSchemeEnum }),
    pages: t.relation('pages'),
    workspaces: t.relation('workspaces')
  })
})
