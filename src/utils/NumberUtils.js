export const Numbers = {
  /**
   * Checks if the number is null or undefined
   * @param number to be checked
   * @returns boolean status
   */
  isNull(number) {
    return number === undefined || number === null;
  },
  /**
   * Checks if the number is not null
   * @param number to be checked
   * @returns boolean status
   */
  isNotNull(number) {
    return !Numbers.isNull(number);
  },
  /**
   * Checks if the number is null, if it is the case, there is a default value
   * @param value to be checked
   * @param defaultValue the default value if the number is null
   * @returns boolean status
   */
  defaultIfNull(value, defaultValue = 0) {
    return Numbers.isNotNull(value) ? value : defaultValue;
  }
};
