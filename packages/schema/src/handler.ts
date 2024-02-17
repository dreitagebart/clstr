// Next.js Custom Route Handler: https://nextjs.org/docs/app/building-your-application/routing/router-handlers
import { createYoga } from 'graphql-yoga'
import { schema } from './schema'

export const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response }
})
