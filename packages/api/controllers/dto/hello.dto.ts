import { Static, Type } from '@sinclair/typebox'

export const HelloSchema = Type.Object({
  message: Type.String(),
})

export type HelloDto = Static<typeof HelloSchema>