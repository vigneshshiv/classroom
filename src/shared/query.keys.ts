/**
 * Query Keys used for React Query
 */
const QueryKeys = {
  USER: 'user',
  USER_DETAILS: 'userDetails',
  STUDENTS_ENROLLED_COURSES: 'studentsEnrolledCourses'
} as const;

export type QueryKeysType = typeof QueryKeys[keyof typeof QueryKeys];

export default QueryKeys;