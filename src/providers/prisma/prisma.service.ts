// prisma.singleton.ts
import { PrismaClient } from '@prisma/client';

let PrismaService: PrismaClient;

if (!PrismaService) {
  PrismaService = new PrismaClient();
}

export default PrismaService;
