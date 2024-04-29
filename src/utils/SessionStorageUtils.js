export const SessionStorageUtils = {
  /**
   * Return session stored item if it exists.
   * @param key the item key storage
   * @return the stored item
   */
  getItem(key) {
    try {
      const sessionStorageItem = sessionStorage.getItem(key);
      return sessionStorageItem ? JSON.parse(sessionStorageItem) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  /**
   * Store item in session storage
   * @param key the key of the item to be stored
   * @param item the item to be stored
   * @return
   */
  storeItem(key, item) {
    try {
      sessionStorage.setItem(key, JSON.stringify(item));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
};
