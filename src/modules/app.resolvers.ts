import { Resolvers } from 'resolvers-types';
import { PostResolvers } from './posts/post.resolvers';

export const resolvers: Resolvers = {
  Query: {
    ...PostResolvers.Query,
  },

  Mutation: {
    ...PostResolvers.Mutation,
  }
};
