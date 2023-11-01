// app.container.ts
import { Container } from 'inversify';
import { PrismaService } from './providers/prisma/prisma.service';
import UserService from './modules/users/user.service';
import UserResolvers from './modules/users/user.resolvers'; // Make sure you import UserResolvers correctly
import TYPES from './types';

const container = new Container();

container.bind<UserService>(TYPES.UserService).to(UserService);
container.bind<UserResolvers>(TYPES.UserResolvers).to(UserResolvers);
container.bind<PrismaService>(TYPES.PrismaService).to(PrismaService);

export default container;
