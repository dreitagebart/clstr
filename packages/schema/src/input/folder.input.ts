import { builder } from '../builder'

export const FolderWhereUniqueInput = builder.inputType(
  'FolderWhereUniqueInput',
  {
    fields: (t) => ({
      id: t.string({ required: true })
    })
  }
)

export const FolderCreateInput = builder.inputType('FolderCreateInput', {
  fields: (t) => ({
    title: t.string({ required: true }),
    workspaceId: t.string({ required: true })
  })
})

export const FolderUpdateInput = builder.inputType('FolderUpdateInput', {
  fields: (t) => ({
    title: t.string({ required: true })
  })
})
