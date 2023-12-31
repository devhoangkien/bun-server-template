// post.resolvers.ts
import { Post, PrismaClient } from '@prisma/client';
import { Resolvers } from 'resolvers-types';
import { PostService } from './post.service';

const prisma = new PrismaClient();

const postService = new PostService();


export const PostResolvers: Resolvers = {
  Query: {
    getPost: async (_, { id }: { id: string }) => {
      return prisma.post.findUnique({ where: { id } });
    },
    getAllPosts: async () => {
      return prisma.post.findMany();
    },
  },
  Mutation: {
    createPost: async (_, { title, content }: Post) => {
      return prisma.post.create({ data: { title, content } });
    },
    updatePost: async (_, { id, title, content }: Post) => {
      return prisma.post.update({ where: { id }, data: { title, content } });
    },
    deletePost: async (_, { id }: { id: string }) => {
      await prisma.post.delete({ where: { id } });
      return true;
    },
  },
};


