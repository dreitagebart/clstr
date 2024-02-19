import { builder } from '../builder'

export const PageWhereUniqueInput = builder.inputType('PageWhereUniqueInput', {
  fields: (t) => ({
    id: t.string({ required: true })
  })
})

export const PageCreateInput = builder.inputType('PageCreateInput', {
  fields: (t) => ({
    title: t.string({ required: true }),
    content: t.string({ required: true }),
    workspaceId: t.string({ required: true })
  })
})

export const PageUpdateInput = builder.inputType('PageUpdateInput', {
  fields: (t) => ({
    title: t.string({ required: true }),
    content: t.string({ required: true })
  })
})
