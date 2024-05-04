// Single or double quotes both can be used to denote strings

const firstName = "John"
const lastName = "Doe"
// console.log("My name is "+firstName+" "+lastName); --> this is a slightly order way to concat 
// strings. In modern days, we normally use backticks (``).

// Here, string interpolation takes place, i.e. making placeholders and directly injecting the values inside these placeholders.
// console.log(`My name is ${firstName} ${lastName}`);

// Another way to create a string
const repoName = new String('Python_AtoZ')
// console.log(typeof repoName); // [String: 'Python_AtoZ']
// console.log(repoName); // object

// console.log(repoName[6]); // _
// console.log(repoName.__proto__); // {}

// console.log(repoName.length()); // TypeError: repoName.length is not a function
// console.log(repoName.length); // 11

// console.log(repoName.toLowerCase()); // python_atoz --> original value of string is not changed
// console.log(repoName.charAt(8)); // t
// console.log(repoName.indexOf("t")); // 2

