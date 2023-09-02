import { xDeepFlattenArray } from './xDeepFlattenArray';

describe('xDeepFlattenArray', () => {
  it('should flatten a nested array with one level of nesting', () => {
    const deepArray: any[] = [1, [2, 3], 4];
    const flattenedArray: any[] = [];
    xDeepFlattenArray(flattenedArray, deepArray);
    expect(flattenedArray).toEqual([1, 2, 3, 4]);
  });

  it('should flatten a deeply nested array', () => {
    const deepArray: any[] = [1, [2, [3, 4], 5], 6];
    const flattenedArray: any[] = [];
    xDeepFlattenArray(flattenedArray, deepArray);
    expect(flattenedArray).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle empty arrays', () => {
    const deepArray: any[] = [];
    const flattenedArray: any[] = [];
    xDeepFlattenArray(flattenedArray, deepArray);
    expect(flattenedArray).toEqual([]);
  });

  it('should handle arrays with no nested elements', () => {
    const deepArray: any[] = [1, 2, 3, 4];
    const flattenedArray: any[] = [];
    xDeepFlattenArray(flattenedArray, deepArray);
    expect(flattenedArray).toEqual([1, 2, 3, 4]);
  });

  it('should handle arrays with various data types', () => {
    const deepArray: any[] = [1, 'hello', [true, false], null, undefined, { key: 'value' }];
    const flattenedArray: any[] = [];
    xDeepFlattenArray(flattenedArray, deepArray);
    expect(flattenedArray).toEqual([1, 'hello', true, false, null, undefined, { key: 'value' }]);
  });
});
