import { createSchema, createYoga } from 'graphql-yoga'
import { BunToText } from './utils/text-logs';
import { readFileSync } from 'node:fs'
import { resolvers } from './modules/app.resolvers';
import { useSofa } from '@graphql-yoga/plugin-sofa'

 
const typeDefs = readFileSync('./schema.graphql', 'utf8')

const yoga = createYoga({
  landingPage: true,
  schema: createSchema({ typeDefs, resolvers }),
  plugins: [
    useSofa({
      basePath: '/api',
      swaggerUI: {
        endpoint: '/swagger'
      },
      openAPI: {
        info: {
          title: 'Bun Server REST API',
          version: '1.0.0'
        }
      }
    })
  ]
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