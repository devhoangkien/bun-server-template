import { PrismaClient, User } from "@prisma/client";
import newLogger from '../../utils/logger';
import { PrismaService } from "@app/providers/prisma/prisma.service";

export class UserService {
  logger = newLogger.child({ module: UserService.name });
  private readonly prisma: PrismaClient;

  constructor(prismaService: PrismaService) {
    this.prisma = prismaService.getPrisma();
  }

  async getUserById(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }
}

export default UserService;
