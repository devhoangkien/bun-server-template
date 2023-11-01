import { resolvers } from '@app/app.resolvers'
import { createSchema } from 'graphql-yoga'
import { readFileSync } from 'node:fs';
const typeDefs = readFileSync('./schema.graphql', 'utf8')
 
export const schema = createSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
})