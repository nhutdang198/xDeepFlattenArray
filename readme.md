**xDeepFlattenArray** is a JavaScript/Typescript function that recursively flattens a nested array and stores the flattened elements in a provided array.

## Installation

To use xDeepFlattenArray, you'll need to include the provided TypeScript file in your project.

1. Download the `xDeepFlattenArray.ts` file from this repository.
2. Add the file to your project directory.

## Usage

1. Import the `xDeepFlattenArray` class into your TypeScript code:

   ```typescript
   import { xDeepFlattenArray } from 'x-deep-flatten-array'

   const deepArray = [1, [2, [3, 4], 5], 6];
   const flattenedArray = [];
   xDeepFlattenArray(flattenedArray, deepArray);
   console.log(flattenedArray); 
   // Output: [1, 2, 3, 4, 5, 6]

2. Import the `xDeepFlattenArray` class into your Javascript code:

   ```javascript
   const { xDeepFlattenArray } = require("x-deep-flatten-array")

   const deepArray = [1, [2, [3, 4], 5], 6];
   const flattenedArray = [];
   xDeepFlattenArray(flattenedArray, deepArray);
   console.log(flattenedArray); 
   // Output: [1, 2, 3, 4, 5, 6]

## Support Me

If you find this project helpful or want to show your appreciation, you can support me by [buying me a coffee](https://www.buymeacoffee.com/nhutdm). Your support is greatly appreciated!
