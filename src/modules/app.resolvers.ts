import { Resolvers } from 'resolvers-types';
import { PostResolvers } from './posts/post.resolvers';
import { UserResolvers } from './users/user.resolvers';

const userResolvers = new UserResolvers();

export const resolvers: Resolvers = {
  Query: {
    ...PostResolvers.Query,
    getUser: userResolvers.getUser.bind(userResolvers),
  },

  Mutation: {
    ...PostResolvers.Mutation,
  }
};
