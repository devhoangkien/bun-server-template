// post.resolvers.ts
import { Post, PrismaClient } from '@prisma/client';
import { Resolvers } from 'resolvers-types';
import { PostService } from './post.service';

const prisma = new PrismaClient();

const postService = new PostService();


export const PostResolvers: Resolvers = {
  Query: {
    getPost: async (_: any, args: { id: string }) => {
      const post = await prisma.post.findUnique({ where: { id: args.id } });
      if (!post) {
        throw new Error("Post not found");
      }
      return post; // Ensure that the returned value includes the 'content' field and matches the 'Post' type as defined in your schema
    }
    
    // getAllPosts: async () => {
    //   console.log('postService', postService);
    //   return prisma.post.findMany();
    // },
  },
  Mutation: {
    // createPost: async (_, { title, }: Post) => {
    //   return prisma.post.create({ data: { title  } });
    // },
    // updatePost: async (_, { id, title, content }: Post) => {
    //   return prisma.post.update({ where: { id }, data: { title, content } });
    // },
    // deletePost: async (_, { id }: { id: any }) => {
    //   await prisma.post.delete({ where: { id: parseInt(id, 10) } });
    //   return true;
    // },
  },
};


