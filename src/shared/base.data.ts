/**
 * Base Data
 */

 export const headerLinks = [
  { title: 'About', slug: '/about' },
  { title: 'Blog', slug: '/blog' },
  { title: 'Courses', slug: '/courses' },
  { title: 'Contact', slug: '/contact' },
  { title: 'Signin', slug: '/signin' }
];

/**
 * Message Type
 */
export const MessageType = {
  INFO: 'I',
  WARNING: 'W',
  ERROR: 'E',
  SUCCESS: 'S',
  NOTIFY: 'N'
};

/**
 * System Events
 */
export const SystemEvents = {
  STATUS: 'g-status',
  NOTIFY: 'g-notify',
  // Page
  PAGE_INITIALIZED: 'page-initialized',
  PAGE_DESTROYED: 'page-destroyed',
  PAGE_NAVIGATION_START: 'page-navigation-start',
  PAGE_NAVIGATION_END: 'page-navigation-end',
  // Service
  SERVICE_REQUESTED: 'service-requested',
  SERVICE_COMPLETED: 'service-completed',
  // Theme
  THEME_RELOADED: 'theme-reloaded',
  REFRESH_VIEW: 'refresh'
};

/**
 * Date Format
 */
export const DateFormat = {
  ISO_8601_FORMAT: 'YYYY-MM-DDTHH:mm:ss',
  DATE_FORMAT: 'ddMMMyyyy',
  TIME_FORMAT_12HOUR: 'hh:mm',
  TIME_FORMAT_24HOUR: 'HH:mm',
  DATE_TIME_FORMAT_12HOUR: 'ddMMMyyyy hh:mm',
  DATE_TIME_FORMAT_24HOUR: 'ddMMMyyyy HH:mm'
};

/**
 * Proxy Ref
 */
export const ProxyRef = {
  CONTAINER_REF: '_container_ref_',
  FORM_REF: '_form_ref_',
  HANDLER_REF: '_handler_ref_'
};

/**
 * Application Roles
 */
export enum Roles {
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT'
}
