// let age = 20 // number
// let age = "20" // string

// console.log(typeof age); // number
// console.log(typeof(age)); // number

// let valueInNumber = Number(age)
// console.log(typeof valueInNumber); // number

// let score = "90abc"
// let valueInNumber = Number(score)
// console.log(valueInNumber); // NaN
// console.log(typeof valueInNumber); // number

// let temp = null
// let valueInNumber = Number(temp)
// console.log(valueInNumber); // 0
// console.log(typeof valueInNumber); // number

// let temp = undefined
// let valueInNumber = Number(temp)
// console.log(valueInNumber); // NaN
// console.log(typeof valueInNumber); // number

// let isAdult = true // 1
// // let isAdult = false // 0
// let valueInNumber = Number(isAdult)
// console.log(valueInNumber); 
// console.log(typeof valueInNumber); // number

// let myName = "sakshi"
// let valueInNumber = Number(myName)
// console.log(valueInNumber); // NaN
// console.log(typeof valueInNumber); // number

/* NaN --> special type in JS 
   33 --> 33
   "33" --> 33
   true: 1, false: 0
*/

// --- Converting Numbers in Bollean ---
// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // true

// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // false

// let isLoggedIn = "sakshi"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // true

/* 
    1 --> true, 0 --> false
    "" --> false
    "sakshi" --> true
*/

// --- Converting Numbers in String ---
let someNumber = 10
let stringNumber = String(someNumber)
console.log(someNumber); // 10
console.log(typeof stringNumber); // string