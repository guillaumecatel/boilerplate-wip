import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const server = {
  subscribeToNewsletter: defineAction({
    accept: 'form',
    input: z.object({
      email: z.string().email(),
    }),
    handler: async (input) => {
      return `Hello, ${input.email}!`
    },
  }),
}
