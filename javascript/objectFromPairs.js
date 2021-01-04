//Creates an object from the given key-value pairs.
//Use Array.prototype.reduce() to create and combine key-value pairs.

const objectFromPairs = arr => arr.reduce((a, [key, val]) => ((a[key] = val), a), {});

objectFromPairs([
    ['a', 1],
    ['b', 2]
]); // {a: 1, b: 2}