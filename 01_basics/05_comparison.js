// console.log("2" > 1); // true
// console.log("02" > 1); // true

// --- Mostly we avoid such type of conversions ---

// console.log(null > 0); //  false
// console.log(null == 0);  // false
// console.log(null >= 0); // true
/* The reason is that Equality Check (==) and Comparisons (>, <, >=, <=) work differentky.
    Comparisons convert null to a number, treating it as 0.
    That's why (3) is null >= 0 is true and (1) null > 0 is false.
*/
// console.log(undefined == 1); // false

// Strictly check : === : strictly checks value and data-type both
console.log("3" === 3); // false