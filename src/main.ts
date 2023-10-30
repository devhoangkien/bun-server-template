import { createSchema, createYoga } from 'graphql-yoga'
import { BunToText } from './utils/text-logs';
import { useSofa } from '@graphql-yoga/plugin-sofa'
import { schema } from '../schema';
import chalk from 'chalk';

const yoga = createYoga({
  landingPage: true,
  schema,
  /**
   * @description enable plugin turn on REST API
   * 
    playground
   * 
   */

  // plugins: [
  //   useSofa({
  //     basePath: '/api',
  //     swaggerUI: {
  //       endpoint: '/swagger'
  //     },
  //     openAPI: {
  //       info: {
  //         title: 'Bun Server REST API',
  //         version: '1.0.0',
  //         description: 'Bun Server REST API'

  //       }
  //     },
  //   }),
  // ]
},)


const server = Bun.serve({
  fetch: yoga.fetch.bind(yoga),
  port: Bun.env.PORT || 8888,
  hostname: Bun.env.HOST || 'localhost',
  development: Bun.env.NODE_ENV !== 'production' ? true : false
});
console.info(chalk.red(BunToText))
console.info(chalk.blue('Bun running version: ') + chalk.green(Bun.version))

console.info(chalk.blue('Server running mode: ') + chalk.green(Bun.env.NODE_ENV))
console.info(chalk.blue('Server running on: ') +
  chalk.green(new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`
  )
  ))
console.info(chalk.blue('Server running at: ') + chalk.green(new Date().toISOString()))
