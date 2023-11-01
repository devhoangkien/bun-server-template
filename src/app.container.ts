import { Container } from 'inversify';

// Import các phụ thuộc (dependencies) và các lớp cần đăng ký
import { PrismaService } from './providers/prisma/prisma.service';
import { UserService } from './modules/users/user.service';
import { UserResolvers } from './modules/users/user.resolvers';
import TYPES from './types';

// Tạo một container mới
const container = new Container();

// Đăng ký các phụ thuộc (dependencies)
container.bind<UserService>(UserService).to(UserService);
container.bind<UserResolvers>(UserResolvers).to(UserResolvers);
container.bind<PrismaService>(TYPES.PrismaService).to(PrismaService);

// Nếu bạn có nhiều dependencies hơn, bạn có thể tiếp tục đăng ký chúng ở đây

// Export container để sử dụng trong toàn bộ ứng dụng
export default container;
