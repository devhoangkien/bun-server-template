import { inject, injectable } from 'inversify';
import "reflect-metadata";
import TYPES from '@app/types';
import { PrismaService } from '@app/providers/prisma/prisma.service';

@injectable()
export class UserService {
  constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

  async getUserById(id: string) {
    return await this.prismaService.getPrisma().user.findUnique({
      where: { id },
    });
  }
}

export default UserService;
