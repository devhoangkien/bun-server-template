import { inject, injectable } from 'inversify';
import "reflect-metadata";
import { GraphQLError } from "graphql";

import TYPES from '@app/types'; // Tệp chứa các symbols
import { UserService } from './user.service'; // Đảm bảo đường dẫn đúng
import newLogger from "../../utils/logger";

const logger = newLogger.child({ module: 'user.resolvers.ts' });
@injectable()
export class UserResolvers {
  private userService: UserService;

  constructor(@inject(TYPES.UserService) userService: UserService) {
    this.userService = userService;
  }

  async getUser(_parent, args: { id: string }) {
    logger.info(`getUser resolver called with id: ${args.id}`);
    const user = await this.userService.getUserById(args.id);
    if (!user) {
      logger.error(`User with id '${args.id}' not found.`);
      throw new GraphQLError(
        `User with id '${args.id}' not found.`,
        {
          extensions: {
            code: 'USER_NOT_FOUND',
            timestamp: new Date().toISOString(),
          }
        }
      );
    }
    return user;
  }
}

export default UserResolvers
