/**
 * Application Constants
 */

export const ROUTES = {
  SITE: {
    HOME: '/',
    LOGIN: '/auth/login/',
    REGISTER: '/auth/register/',
    ABOUT: '/about/',
    COURSES: '/courses/',
    BLOG: '/blog/',
    SETTINGS: '/settings/',
  }, 
  API: {
    SESSION: '/api/auth/session/',
    USERS: '/api/users/',
    PROFILE: '/api/users/profile/',
    COURSES: '/api/courses/',
    BLOGS: '/api/blogs/'
  }, 
  STATIC: {
    // Public folder and static assets
  }
} as const;