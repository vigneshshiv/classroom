/**
 * Base Types
 */

import { User } from '@prisma/client';

export type Data = {
  name: string;
};

export type UserData = Partial<
  Pick<User, 'id' | 'name' | 'email' | 'displayName' | 'image'>
>;