"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xDeepFlattenArray = void 0;
/**
 * Recursively flattens a nested array and stores the flattened elements in the provided array.
 *
 * @param {Array} expectedArray - The array where the flattened elements will be stored.
 * @param {Array} deepArray - The nested array to be flattened.
 * @returns {void}
 */
function xDeepFlattenArray(expectedArray, deepArray) {
    for (var _i = 0, deepArray_1 = deepArray; _i < deepArray_1.length; _i++) {
        var element = deepArray_1[_i];
        if (Array.isArray(element)) {
            xDeepFlattenArray(expectedArray, element);
        }
        else {
            expectedArray.push(element);
        }
    }
}
exports.xDeepFlattenArray = xDeepFlattenArray;
