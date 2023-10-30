import { Resolvers } from 'resolvers-types';
import { PostResolvers } from './posts/post.resolvers';
import { userResolvers } from './users/user.resolvers';

export const resolvers: Resolvers = {
  Query: {
    ...PostResolvers.Query,
    ...userResolvers.Query,
  },

  Mutation: {
    ...PostResolvers.Mutation,
  }
};
