/**
 * Types
 */
export type PageProps = {
  user: User | null | undefined;
};

export type User = {
  username: string;
  email: string;
  loggedIn: boolean;
};
