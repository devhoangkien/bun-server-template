import { createSchema, createYoga } from 'graphql-yoga'
import { BunToText } from './utils/text-logs';
import { readFileSync } from 'node:fs'
import { Resolvers } from '../resolvers-types'
import { PrismaClient } from '@prisma/client';
import { postResolvers } from './modules/posts/post.resolvers';

const typeDefs = readFileSync('./schema.graphql', 'utf8')

const resolvers: Resolvers = {
  Query: {
    // typed resolvers
    ...postResolvers.Query, 
  },

  Mutation: {
    // typed resolvers
    ...postResolvers.Mutation, 
  },

}
const yoga = createYoga({
  
  schema: createSchema({ typeDefs, resolvers })
}, )

const server = Bun.serve({ 
  fetch: yoga.fetch.bind(yoga), 
  port: Bun.env.PORT || 8888,
  hostname: Bun.env.HOST || 'localhost',
  development: Bun.env.NODE_ENV !== 'production'? true : false
});
console.info(BunToText)
console.info(
  `Server is running on ${new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`
  )}`
)