import { PrismaClient } from '@prisma/client';
import { injectable } from 'inversify';
import "reflect-metadata";

@injectable()
export class PrismaService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  getPrisma(): PrismaClient {
    return this.prisma;
  }

  async connect() {
    const maxRetries = 3;
    let retries = 0;
    
    while (retries < maxRetries) {
      try {
        await this.prisma.$connect();
        return;
      } catch (error) {
        // Handle the error or log it
        console.error(`Prisma connection failed on attempt ${retries + 1}: ${error}`);
        retries++;
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds before retrying
      }
    }
    
    throw new Error('Failed to connect to the database after multiple retries.');
  }

  async disconnect() {
    await this.prisma.$disconnect();
  }
}
