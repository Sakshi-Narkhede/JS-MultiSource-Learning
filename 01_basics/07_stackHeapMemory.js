/*
    Stack (Primitive DT) and Heap(Non-Primitive DT)
    Stack: Changes/updation happens in the copies of values
    Heap: Changes/updation happens in the original values

    --- Stack Memory ---

    In stack memory, variables store their values directly.
    For primitive data types, the actual value is stored in the stack memory.
    Copies of primitive values are independent of each other, meaning modifications to one copy do not affect the others.

    E.g.: // Primitive data type (number)
          let num1 = 10; // Value 10 is stored in stack memory
          let num2 = num1; // num2 gets a copy of the value 10
          num2 = 20; // num1 remains unchanged
          console.log(num1); // Output: 10
          console.log(num2); // Output: 20

    --- Heap Memory ---

    In heap memory, variables store references to their values.
    For non-primitive data types, like objects or arrays, the actual values are stored in the heap memory, and variables store references (memory addresses) to these values.
    Copies of non-primitive values share the same reference (memory address), meaning they point to the same value in memory. Modifying one copy affects all other copies since they reference the same underlying data.

    E.g: // Non-primitive data type (object)
         let obj1 = { name: 'Alice' }; // Reference to an object in heap memory
         let obj2 = obj1; // Both obj1 and obj2 reference the same object in heap memory
         obj2.name = 'Bob'; // Modifying obj2 also affects obj1
         console.log(obj1.name); // Output: 'Bob'
         console.log(obj2.name); // Output: 'Bob'

    In the first example with stack memory, when we copy the primitive value num1 to num2, each variable holds its own independent value. Modifying num2 does not affect num1.

    In the second example with heap memory, when we copy the reference obj1 to obj2, both variables point to the same object in memory. Therefore, modifying obj2 also changes the value accessed by obj1.
*/

// let myYoutubeName = "code with sakshi"
// let anotherName = myYoutubeName
// // console.log(anotherName) // code with sakshi
// anotherName = "code and cook"
// console.log(myYoutubeName); // code with sakshi
// console.log(anotherName) // code and cook

let userOne = {
    email: "user@google.com",
    upi: "4567289@bpl"
}
let userTwo = userOne
userTwo.email = "user@bn.com"
console.log(userTwo.email); // user@bn.com
console.log(userOne.email); // user@bn.com