import { PrismaClient, User } from "@prisma/client";
import newLogger from '../../utils/logger';

export class UserService {
  logger = newLogger.child({ module: UserService.name });
  constructor(
    private readonly prisma: PrismaClient,
  ) {}

  async getUserById(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }
}

export default UserService;
