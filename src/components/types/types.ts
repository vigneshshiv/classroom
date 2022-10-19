import { type Session, type User } from 'next-auth';

/**
 * Types
 */
export type PageProps = {
  session: Session | null | undefined;
  user: User | null | undefined;
};
