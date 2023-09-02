/**
 * Recursively traverses a nested object and calls a callback function for each key-value pair.
 *
 * @param deepObject - The object to be traversed.
 * @param callback - The callback function to be called for each key-value pair.
 */
declare function xDeepFlattenArray(expectedArray: any[], deepArray: any[]): void;

export default xDeepFlattenArray;
