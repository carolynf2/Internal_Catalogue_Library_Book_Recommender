const STORAGE_KEY = 'libraryRecommenderPreferences';

/**
 * Save user preferences to localStorage
 */
export const savePreferences = (preferences) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    return true;
  } catch (error) {
    console.error('Error saving preferences:', error);
    return false;
  }
};

/**
 * Load user preferences from localStorage
 */
export const loadPreferences = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return getDefaultPreferences();
  } catch (error) {
    console.error('Error loading preferences:', error);
    return getDefaultPreferences();
  }
};

/**
 * Get default preferences
 */
export const getDefaultPreferences = () => ({
  genre: 'all',
  tone: 'all',
  series: 'all',
  author: ''
});

/**
 * Clear saved preferences
 */
export const clearPreferences = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing preferences:', error);
    return false;
  }
};
