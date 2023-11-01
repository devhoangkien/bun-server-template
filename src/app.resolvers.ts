// app.resolvers.ts

import { Resolvers } from 'resolvers-types';
import { PostResolvers } from './modules/posts/post.resolvers';
import UserResolvers from './modules/users/user.resolvers';
import TYPES from './types';
import container from './app.container';

const userResolvers = container.get<UserResolvers>(TYPES.UserResolvers);

export const resolvers: Resolvers = {
  Query: {
    ...PostResolvers.Query,
    getUser: userResolvers.getUser.bind(userResolvers),
  },
  Mutation: {
    ...PostResolvers.Mutation,
  },
};
