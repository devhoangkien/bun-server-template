import { GraphQLError } from "graphql";
import newLogger from "../../utils/logger";
import { UserService } from "./user.service";

const logger = newLogger.child({ module: 'user.resolvers.ts' });

export class UserResolvers {
  private userService: UserService;

  constructor(userService: UserService) {
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
