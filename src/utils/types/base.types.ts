/**
 * Base Types
 */

import { Prisma, User } from '@prisma/client';

/**
 * All Props in object non-nullable type
 */
export type RequireNotNull<T> = {
  [P in keyof T]: NonNullable<T[P]>;
}

export type Data = {
  name: string;
};

export type UserData = Partial<
  Pick<User, 'id' | 'name' | 'email' | 'displayName' | 'image'>
>;

/**
 * Prisma sorting order
 */
export type SortDirection = 'asc' | 'desc';

