interface DeepArray<T> extends Array<T | DeepArray<T>> { }
/**
 * Flattens a deeply nested array into a one-dimensional array.
 *
 * @template T
 * @param {DeepArray<T>} deepArray - The input array to be flattened.
 * @returns {T[]} - A new one-dimensional array containing all the elements from the input array, with nested arrays flattened.
 *
 * @typedef {T | DeepArray<T>} DeepArray<T> - Type definition for a deeply nested array.
 *
 * @example
 * const deepArray = [1, [2, 3, [4, 5]], 6, [7, 8]];
 * const flattenedArray = xDeepFlattenArray(deepArray);
 * console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
 */
export function xDeepFlattenArray<T>(deepArray: DeepArray<T>): T[] {
  function flattenArray(flattenedArray: T[], deepArray: DeepArray<T>) {
    for (const element of deepArray) {
      if (Array.isArray(element)) {
        flattenArray(flattenedArray, element);
      } else {
        flattenedArray.push(element);
      }
    }
  }
  const flattenedArray: T[] = [];
  flattenArray(flattenedArray, deepArray);
  return flattenedArray;
}
