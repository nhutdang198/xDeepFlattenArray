// xDeepFlattenArray.d.ts

/**
 * Type definition for a deeply nested array.
 */
declare type DeepArray<T> = Array<T | DeepArray<T>>;

/**
 * Flattens a deeply nested array into a one-dimensional array.
 *
 * @template T
 * @param {DeepArray<T>} deepArray - The input array to be flattened.
 * @returns {T[]} - A new one-dimensional array containing all the elements from the input array, with nested arrays flattened.
 */
declare function xDeepFlattenArray<T>(deepArray: DeepArray<T>): T[];

export { xDeepFlattenArray, DeepArray };
