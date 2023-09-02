/**
 * Recursively flattens a nested array and stores the flattened elements in the provided array.
 *
 * @param {Array} expectedArray - The array where the flattened elements will be stored.
 * @param {Array} deepArray - The nested array to be flattened.
 * @returns {void}
 */
export function xDeepFlattenArray(expectedArray: any[], deepArray: any[]): void {
  for (const element of deepArray) {
    if (Array.isArray(element)) {
      xDeepFlattenArray(expectedArray, element);
    }
    else {
      expectedArray.push(element);
    }
  }
}