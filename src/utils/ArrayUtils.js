export const Arrays = {
  /**
   * Function that checks if is the given array is not empty
   * @param arr array to check
   * @returns true if not empty else false
   */
  isNotEmpty(arr) {
    return Array.isArray(arr) && arr.length > 0;
  },

  /**
   * Function that checks if is the given array is empty (not -> undefined, null, [], ...)
   * @param arr array to check
   * @returns true if empty else false
   */
  isEmpty(arr) {
    return !Arrays.isNotEmpty(arr);
  },
  /**
   * Function that checks if is the given array is empty (not -> undefined, null, [], ...)
   * @param arr array to check
   * @returns true if empty else false
   */
  getFirst(arr) {
    return !!arr && Arrays.isNotEmpty(arr) ? arr[0] : null;
  }
};
