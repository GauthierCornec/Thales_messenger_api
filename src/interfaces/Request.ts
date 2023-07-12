import { Request } from 'express';
import { User } from '../../src/modules/users/entities/user.entity';

export type AuthenticatedRequest = Request & {
  uuid: string;
  email: string;
  user?: User;
};
