export const Strings = {
  /**
   * Function that checks if the given string is empty (undefined, null, '')
   * @param str string to check
   * @returns true if empty else false
   */
  isEmpty(str) {
    return !str || str.length === 0;
  },

  /**
   * Function that checks if the given string is not empty (not -> undefined, null, '')
   * @param str string to check
   * @returns true if not empty else false
   */
  isNotEmpty(str) {
    return !Strings.isEmpty(str);
  },

  /**
   * Function that checks if the given string is empty and blank (undefined, null, '', ' ')
   * @param str string to check
   * @returns true if empty and black else false
   */
  isBlank(str) {
    return !str || str.trim().length === 0;
  },

  /**
   * Function that checks if the given string is not empty and blank (not -> undefined, null, '', ' ')
   * @param str string to check
   * @returns true if not empty and blank else false
   */
  isNotBlank(str) {
    return !Strings.isBlank(str);
  },

  /**
   * Capitalize the first letter of a given string
   * @param str string to capitalize its first letter
   * @returns the string with its first letter capitalized (if not blank)
   */
  capitalizeFirst(str) {
    if (!Strings.isBlank(str)) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return str;
  },
  /**
   * Remove accents from the given string
   * @param str string to remove accents from
   * @returns string without accents if not blank else empty string
   */
  removeAccents(str) {
    return Strings.isNotBlank(str) ? str.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '';
  }
};
