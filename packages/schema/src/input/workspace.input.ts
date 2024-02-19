import { builder } from '../builder'

export const WorkspaceWhereUniqueInput = builder.inputType(
  'WorkspaceWhereUniqueInput',
  {
    fields: (t) => ({
      id: t.string({ required: true })
    })
  }
)

export const WorkspaceCreateInput = builder.inputType('WorkspaceCreateInput', {
  fields: (t) => ({
    title: t.string({ required: true }),
    description: t.string()
  })
})

export const WorkspaceUpdateInput = builder.inputType('WorkspaceUpdateInput', {
  fields: (t) => ({
    title: t.string({ required: true }),
    description: t.string()
  })
})
