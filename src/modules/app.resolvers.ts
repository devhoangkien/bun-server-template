import { Resolvers } from 'resolvers-types';
import { PostResolvers } from './posts/post.resolvers';
import { UserResolvers } from './users/user.resolvers';
import { PrismaService } from '@app/providers/prisma/prisma.service';
import UserService from './users/user.service';

const prisma = new PrismaService()
// Initialize UserService and inject PrismaService
const userService = new UserService(prisma);

// Initialize UserResolvers and inject UserService
const userResolvers = new UserResolvers(userService);
export const resolvers: Resolvers = {
  Query: {
    ...PostResolvers.Query,
    getUser: userResolvers.getUser.bind(userResolvers),
  },

  Mutation: {
    ...PostResolvers.Mutation,
  }
};
