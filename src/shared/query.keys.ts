/**
 * Query Keys used for React Query
 */
const QueryKeys = {
  USER: 'user',
  USER_DETAILS: 'userDetails'
} as const;

export type QueryKeysType = typeof QueryKeys[keyof typeof QueryKeys];

export default QueryKeys;