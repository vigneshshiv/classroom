/**
 * Shared Data for Local Storage
 */

/**
 * Init local storage cache
 */
export const initCache = (key: string, value: any): void => {
  if (!value) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.debug(`Unable to set Locale Storage - ${key}`);
  }
};

/**
 * Update local storage cache
 */
export const updateCache = (key: string, value: any): void => {
  if (!value) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.debug(`Unable to update Locale Storage - ${key}`);
  }
};

/**
 * Get local storage cache
 */
export const getCache = (key: string): any => {
  const value = window.localStorage.getItem(key);
  if (value) {
    try {
      return JSON.parse(value);
    } catch (e) {
      console.debug(`Unable to retrieve Local Storage - ${key}`);
    }
  }
  return null;
};

/**
 * Remove cache
 */
export const removeCache = (key: string): void => {
  window.localStorage.removeItem(key);
};

/**
 * Clear All cache
 */
export const clearAll = (): void => {
  window.localStorage.clear();
};
