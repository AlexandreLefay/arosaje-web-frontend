import Nullable from '@appTypes/global/Nullable';

export const Arrays = {
  /**
   * Function that checks if is the given array is not empty
   * @param arr array to check
   * @returns true if not empty else false
   */
  isNotEmpty<T>(arr: Nullable<Readonly<T[]>>): arr is Readonly<T[]> {
    return Array.isArray(arr) && arr.length > 0;
  },
  /**
   * Function that checks if is the given array is empty (not -> undefined, null, [], ...)
   * @param arr array to check
   * @returns true if empty else false
   */
  isEmpty<T>(arr: Nullable<Readonly<T[]>>): boolean {
    return !Arrays.isNotEmpty(arr);
  },
  /**
   * Function that checks if array contains all given items
   * @param arr the array to check
   * @param items the items to be included in array
   */
  includesAll<T>(arr: Nullable<Readonly<T[]>>, items: Nullable<Readonly<T[]>>): boolean {
    return Arrays.isNotEmpty(items) && Arrays.isNotEmpty(arr) && items.every((item) => arr.includes(item));
  },
  /**
   * Function that checks if array contains at least one of the given items
   * @param arr the array to check
   * @param items the items to be included in array
   */
  includesAny<T>(arr: Nullable<Readonly<T[]>>, items: Nullable<Readonly<T[]>>): boolean {
    return Arrays.isNotEmpty(items) && Arrays.isNotEmpty(arr) && items.find((item) => arr.includes(item)) !== undefined;
  },
  /**
   * Function that checks if array doesn't contain any of the given items
   * @param arr the array to check
   * @param items the items to be included in array
   */
  includesNone<T>(arr: Nullable<Readonly<T[]>>, items: Nullable<Readonly<T[]>>): boolean {
    return !Arrays.includesAny(arr, items);
  }
};
