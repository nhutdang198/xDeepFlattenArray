"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xDeepFlattenArray = void 0;
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
function xDeepFlattenArray(deepArray) {
    function flattenArray(flattenedArray, deepArray) {
        for (var _i = 0, deepArray_1 = deepArray; _i < deepArray_1.length; _i++) {
            var element = deepArray_1[_i];
            if (Array.isArray(element)) {
                flattenArray(flattenedArray, element);
            }
            else {
                flattenedArray.push(element);
            }
        }
    }
    var flattenedArray = [];
    flattenArray(flattenedArray, deepArray);
    return flattenedArray;
}
exports.xDeepFlattenArray = xDeepFlattenArray;
