import { builder } from '../builder'

export const UserWhereUniqueInput = builder.inputType('UserWhereUniqueInput', {
  fields: (t) => ({
    id: t.string({ required: true })
  })
})

export const UserCreateInput = builder.inputType('UserCreateInput', {
  fields: (t) => ({
    firstname: t.string({ required: true }),
    lastname: t.string({ required: true }),
    email: t.string({ required: true }),
    about: t.string()
  })
})

export const UserUpdateInput = builder.inputType('UserUpdateInput', {
  fields: (t) => ({
    firstname: t.string({ required: true }),
    lastname: t.string({ required: true }),
    email: t.string({ required: true }),
    about: t.string()
  })
})
