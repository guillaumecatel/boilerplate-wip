import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const server = {
  subscribeToNewsletter: defineAction({
    accept: 'form',
    input: z.object({
      email: z.string().email(),
    }),
    handler: async (input) => {
      console.log('Subscribing email to newsletter:', input.email)
      return `Hello, ${input.email}!`
    },
  }),
}
