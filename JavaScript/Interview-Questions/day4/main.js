// Day4
// What are objects in javascript?
// Ans.  In JavaScript, objects are one of the most fundamental data types. They allow you to store collections of data and more complex entities.
// Basic Object Syntax
// javascript
// Copy
// Edit
// const person = {
//   name: "Alice",
//   age: 30,
//   isStudent: false
// };

// What are function constructors?

//ans. Function constructors are a way to create objects in JavaScript using functions as templates.
//  function person(name, age){
//     this.name = name;
//     this.age = age;
//  }
//  const person1 = new person("alice" , 30)
//  console.log(person1);

// Give an example of inheritance using function constructor

// function Person(name){
//     this.name = name;
// }
//  Person.prototype.sayHello = function() {
//     console.log(`hi ,  i am ${this.name}`);

//  }
//  function Student(name,grade){
//     Person.call(this, name);
//     this.grade = grade;
//  }

//  Student.prototype = Object.create(Person.prototype);  // Inherit methods
// Student.prototype.constructor = Student;

// Student.prototype.study = function() {
//   console.log(`${this.name} is studying in grade ${this.grade}`);
// };

// const s1 = new Student("Alice", 10);
// s1.sayHello();  // From Person
// s1.study();

// What is the use of setTimeout

//Ans. setTimeout is a built-in JavaScript function used to run code after a delay.

// What are promises and why do we need them?
//ans. A Promise is a special object that represents a future value — something that will be available later, like the result of a network request, a file read, or a timer.
// we need Promises:
// Because JavaScript is asynchronous, and sometimes tasks take time (like API calls). Promises help us:
// Handle async operations cleanly
// Avoid callback hell (messy nested functions)
// Write cleaner, readable code

// What is the purpose of async/await keywords?
// async and await are keywords in JavaScript that make it easier to work with Promises and write asynchronous code that looks like regular, synchronous code.

// Think of it like this:
// We use it
// Because 
// Makes code look more readable
// Avoids .then().catch() chains
// Works great with try...catch for error handling




// What is callback hell
// ans . Callback hell happens when you have too many nested callbacks, one inside another, usually for handling asynchronous operations.



// What is promise?
// A Promise is a special JavaScript object that represents a value that will be available in the future — like a placeholder for something that hasn't happened yet (but will).

// What are arrow functions?
// ans . Arrow functions are a shorter and cleaner way to write functions.
// Introduced in ES6
//  const greet = (name) => {
//     console.log(`hello , ${name}!`);
    
//  }
//   greet("tanya")

// Give an example of async/await
// Simulate an API request using a Promise
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const success = true; // Change to `false` to simulate an error
//         if (success) {
//           resolve({ name: "John Doe", age: 30 });
//         } else {
//           reject("Failed to fetch data");
//         }
//       }, 2000); // Simulate a 2-second delay
//     });
//   }
  
//   // Using async/await to handle the async operation
//   async function getUser() {
//     try {
//       console.log("Fetching user data...");
//       const user = await fetchUserData(); // Waits for the Promise to resolve
//       console.log("User data:", user);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
  
//   getUser();
  


// What is difference between null and undefined and where to use what?\
// Both null and undefined are primitive values in JavaScript, but they mean slightly different things.
// 1. undefined
// What it is: A variable that has been declared but has not been assigned a value yet.
// 2. null
// What it is: Intentionally empty or no value. It’s a placeholder for "no value" or "nothing" — you set it explicitly.

// Write code to explain map and filter in arrays
// const numbers = [1, 2, 3, 4, 5];

// // Use map to double each number
// const doubledNumbers = numbers.map(num => num * 2);

// console.log(doubledNumbers);  // [2, 4, 6, 8, 10]
// console.log(numbers);         // Original array remains unchanged: [1, 2, 3, 4, 5]

//filter
// const numbers = [1, 2, 3, 4, 5, 6];

// // Use filter to get only even numbers
// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers);  // [2, 4, 6]
// console.log(numbers);      // Original array remains unchanged: [1, 2, 3, 4, 5, 6]




// Given an array of 0's and 1's find out number of 0's
// const arr = [1, 0, 1, 0, 1, 0, 1, 0];

// // Use reduce to count the 0's
// const numberOfZeros = arr.reduce((count, num) => {
//   return num === 0 ? count + 1 : count;
// }, 0);

// console.log(numberOfZeros);  // Output: 4


// Given an array find out total no. of odd and even nos.
// const array  = [1, 2, 3, 4, 5, 6,7,8,9];
// let even = 0;
// let odd = 0;
// array.forEach(num => {
//     if (num % 2 === 0) {
//         even++;  // Increment even counter
//       } else {
//         odd++;   // Increment odd counter
//       }
// })
//  console.log("even num" , even);
//  console.log("odd num" , odd);
 
 


// Given a string find out number of vowels
// const str = "hello world";
// let vowelCount = 0 ;
// const vowels = [ 'a' , 'e' , 'i' , 'o' , 'u']
//  for( let i = 0 ; i < str.length ; i++){
//     if(vowels.includes(str[i].toLowerCase())){
//         vowelCount++;
//     }

//  }
//  console.log(vowelCount);
 
// Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same
// Create two objects with a string property and an array property
// const object1 = {
//   name: "Object 1",
//   values: [1, 2, 3, 4]
// };

// const object2 = {
//   name: "Object 2",
//   values: [1, 2, 3, 4]
// };

// // Function to check if both arrays have the same elements in the same order
// function areArraysEqual(obj1, obj2) {
//   // Check if both objects have an array property
//   if (!Array.isArray(obj1.values) || !Array.isArray(obj2.values)) {
//     return false;
//   }

//   // Compare the arrays element by element
//   if (obj1.values.length !== obj2.values.length) {
//     return false; // Arrays have different lengths, so they can't be equal
//   }

//   for (let i = 0; i < obj1.values.length; i++) {
//     if (obj1.values[i] !== obj2.values[i]) {
//       return false; // If any element is different, return false
//     }
//   }

//   return true; // If all elements are the same, return true
// }

// // Test the function
// const result = areArraysEqual(object1, object2);
// console.log(result);  // Output: true (since both arrays are the same)

