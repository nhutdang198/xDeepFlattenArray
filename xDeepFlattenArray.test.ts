import { xDeepFlattenArray } from './xDeepFlattenArray';

// Define test cases using Jest
describe('xDeepFlattenArray', () => {
  // Test case 1: Flatten a deep array with integers
  it('should flatten a deep array with integers', () => {
    const deepArray1: number[] | any[] = [1, [2, 3, [4, 5]], 6, [7, 8]];
    const expectedFlattenedArray1: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(xDeepFlattenArray(deepArray1)).toEqual(expectedFlattenedArray1);
  });

  // Test case 2: Flatten a deep array with strings
  it('should flatten a deep array with strings', () => {
    const deepArray2: string[] | any[] = ['a', ['b', 'c'], [['d']], 'e'];
    const expectedFlattenedArray2: string[] = ['a', 'b', 'c', 'd', 'e'];
    expect(xDeepFlattenArray(deepArray2)).toEqual(expectedFlattenedArray2);
  });

  // Test case 3: Flatten a deep array with mixed types
  it('should flatten a deep array with mixed types', () => {
    const deepArray3: (number | string)[] | any[] = [1, ['a', 2, 'b'], [3, 'c'], 'd'];
    const expectedFlattenedArray3: (number | string)[] = [1, 'a', 2, 'b', 3, 'c', 'd'];
    expect(xDeepFlattenArray(deepArray3)).toEqual(expectedFlattenedArray3);
  });

  // Test case 4: Flatten an empty deep array
  it('should flatten an empty deep array', () => {
    const deepArray4: any[] = [];
    const expectedFlattenedArray4: any[] = [];
    expect(xDeepFlattenArray(deepArray4)).toEqual(expectedFlattenedArray4);
  });

  // Test case 5: Flatten a deep array with a single element
  it('should flatten a deep array with a single element', () => {
    const deepArray5: number[] | any[] = [42];
    const expectedFlattenedArray5: number[] = [42];
    expect(xDeepFlattenArray(deepArray5)).toEqual(expectedFlattenedArray5);
  });
});
