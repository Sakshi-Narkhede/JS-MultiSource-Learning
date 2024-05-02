"use strict"; // strictly treat all the code as newer version of JS code

// alert("Hello")
// alert(2+3) // ReferenceError: alert is not defined
/* whenever people write these alerts, they either bind their JS files in html file or write this in developer
    console. This can't work here because JS engine is hidden in the browser, and here we are using NodeJS
*/

// Official ECMA documentation for JS: https://tc39.es/ecma262/2023/multipage/

console.log(typeof null) // object
console.log(typeof undefined) // undefined

/*
    number = 2 ^ 53
    bigint = for large numbers
    string = "assembly of characters"
    boolean = true / false
    null = stand alone value (type = object)
    undefined = place holder for a value which is not defined yet (type = undefined)
    symbol = uniqueness
*/