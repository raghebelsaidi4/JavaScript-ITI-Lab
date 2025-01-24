# how `Function.apply` Works?
The `apply()` method allows you to call a function with a specific this value and arguments provided as an array (or array-like object).

`Math.max` is a function that expects multiple arguments.
`apply()` is used to pass the array `numbers` as individual arguments to Math.max.
The first parameter `(null)` specifies the `this` value. Since `Math.max` doesn't use `this`, `null` is used here.

# Function.call()
1- Arguments are passed individually.
2- `Math.max.call(null, 5, 6, 2, 3, 7)`
3 - Ideal when the number of arguments is known.

# Function.apply()
1- Arguments are passed as an array or array-like object.
2- `Math.max.apply(null, [5, 6, 2, 3, 7])`
3- Ideal when the arguments are already in an array.