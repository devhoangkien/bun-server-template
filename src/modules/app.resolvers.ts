import { Resolvers } from 'resolvers-types';
import { PostResolvers } from './posts/post.resolvers';
import { Mutation } from '../../resolvers-types';
// app.resolvers.ts

export const resolvers: Resolvers = {
  Query: {
    ...PostResolvers.Query,
    // Thêm các resolvers khác ở đây nếu cần
  },

  Mutation: {
    ...PostResolvers.Mutation,
  }
};
