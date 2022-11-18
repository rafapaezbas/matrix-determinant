# Matrix determinant

Calculate squared matrix determinant in Javascript

## Example

``` javascript
const { determinant } = require('./index.js')

/*
| 2  3  1 |
| 0 -2  5 |
| 3  7 -4 |
*/

const result = determinant([[2, 3, 1], [0, -2, 5], [3, 7, -4]])
console.log(result) // -3
```
