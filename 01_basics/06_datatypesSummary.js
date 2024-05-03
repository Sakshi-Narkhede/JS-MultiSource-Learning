/*
    ## The ways in which data is stored in & accessed from memory forms the basis of categorization
    of data-types: Primitive & Non-Primitive(Reference)

    # Primitive (Call by Value) --> 7 types
    --> String, Number, Boolean, null, undefined, Symbol, BigInt

    With call by value, when you pass a variable holding a primitive value (like a number or string) into something (like another variable or a function), a copy of that value is made. Any changes you make to this copy won't affect the original value.

    let x = 10;
    let y = x; // y gets a copy of the value in x
    y = 20; // changing y doesn't affect x
    console.log(x); // Output: 10
    console.log(y); // Output: 20

    --- Symbol Data-Type ---
    In JavaScript, a Symbol is a unique and immutable data type introduced in ECMAScript 6 (ES6). It's used to create unique identifiers.

    > Unique Identifier: A Symbol is like a special secret key. Each Symbol you create is unique, even if it looks the same.
    > Immutable: Once you create a Symbol, you can't change it. It stays the same throughout your program.

    // Creating two symbols
    const symbol1 = Symbol();
    const symbol2 = Symbol();

    // Checking if they are equal
    console.log(symbol1 === symbol2); // Output: false

    In this example, symbol1 and symbol2 are both symbols. When you compare them using ===, it returns false because each symbol is unique, even if they look the same.

    So, each time you create a new Symbol, it's like creating a unique marker that is different from any other symbol, even if it appears to have the same description.

    --- BigInt Data Type---
    const bigNumber = 349374293749470191234n
*/

/*
    # Non-Primitive (Reference Type) --> 
    --> Array, Objects, Functions

    With call by reference, when you pass a variable holding a reference to an object (like an array or an object literal) into something, you're actually passing a reference to the original object in memory. This means any changes made through this reference affect the original object.

    let obj1 = { value: 10 };
    let obj2 = obj1; // obj2 gets a reference to the same object in memory as obj1
    obj2.value = 20; // changing obj2 also changes obj1
    console.log(obj1.value); // Output: 20
    console.log(obj2.value); // Output: 20

    Though not all non-primitive types are actual instances of JavaScript's Object class, they indeed have a return type of "object" when checked with the typeof operator.
*/

const colors = ["red", "purple", "pink"]
let myObj = {
    name: "Sakshi",
     age: 20
}
const myFunction = function(){
    console.log("Hello World");
}
// console.log(typeof colors); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // function , actually it is called as object function