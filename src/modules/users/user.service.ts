import {  Prisma, PrismaClient, User } from "@prisma/client";
import newLogger from '../../utils/logger';

export class UserService {
  logger = newLogger.child({ module: UserService.name });
  private readonly prisma: PrismaClient 
  constructor(
  ) {
    this.prisma = new PrismaClient();
  }

  async getUserById(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }
}

export default UserService;
