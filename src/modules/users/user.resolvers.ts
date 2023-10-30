import { Resolvers } from "resolvers-types";
import { PrismaClient } from '@prisma/client';
import UserService from './user.service';
import { GraphQLError } from "graphql";
import newLogger from "@app/utils/logger";

const prisma = new PrismaClient()
const userService = new UserService(prisma); // Tạo một thể hiện của UserService
const logger = newLogger.child({ module: 'user.resolvers.ts' });

export const userResolvers: Resolvers = {
  Query: {
    getUser: async (_parent, args: { id: string }) => {
        console.log('args', args.id);
        const user = await userService.getUserById(args.id);
        if (!user) {
          logger.error(`User with id '${args.id}' not found.`);
          throw new GraphQLError(
            `User with id '${args.id}' not found.`,
            {
              extensions: {
                code: 'USER_NOT_FOUND',
                timestamp: new Date().toISOString(),
              }
            }
          )
        }
        return user;

    },

  },
};