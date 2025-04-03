// Ques What are objects in javascript?

// In JavaScript, objects are a type of data structure that allow you to store collections of data in the form of key-value pairs. An object can store multiple values and each value can be of any type, including numbers, strings, arrays, functions, or even other objects.
// // an object consist of key and value
// const person = {
//     name: 'John',         // Key: 'name', Value: 'John'
//     age: 30,              // Key: 'age', Value: 30
//     isEmployed: true,     // Key: 'isEmployed', Value: true 
// }


//question 2  What are function?
// In JavaScript, functions are blocks of reusable code that perform a specific task. They allow you to group a set of instructions together that can be executed multiple times, and they can also accept input (parameters) and return output (a result).

//  quetion 3 What is an event loop and call stack.
// In JavaScript, the event loop and the call stack are fundamental concepts that help manage the execution of code, especially in the context of asynchronous operations like timers, API requests, or user interactions.
// 1. Call Stack:
// The call stack is a data structure that keeps track of function execution in JavaScript. It follows the Last In, First Out (LIFO) principle, meaning that the last function called is the first one to finish executing.

// When a function is invoked, it gets pushed onto the stack. When the function finishes executing, it is popped off the stack.
// 2. Event Loop:
// The event loop is responsible for managing asynchronous operations in JavaScript. JavaScript is single-threaded, meaning only one operation can execute at a time. However, tasks like I/O operations (e.g., file reading, network requests, timers) take time, and we don't want to block the execution of other code while waiting for these operations to finish.

// question 4 what is DOM
// The DOM (Document Object Model) is an essential concept in web development. It is a programming interface that allows JavaScript (or other programming languages) to interact with and manipulate the structure, content, and style of an HTML or XML document.

// question 5 Difference between undefined vs not defined vs NaN
// 1. undefined:
// What it is: undefined is a special value in JavaScript. It is a primitive data type that indicates the absence of a value or the absence of an assigned variable.

// let a;
// console.log(a); // undefined, because 'a' is declared but not assigned a value

// function myFunction() {
//   // no return statement
// }
// console.log(myFunction()); // undefined, because the function doesn't return anything

// let person = { name: 'Alice' };
// console.log(person.age); // undefined, because 'age' is not a property of the object


// 2. not defined:
// What it is: not defined is not an actual JavaScript value like undefined or NaN. Instead, it refers to the situation where you try to access a variable or property that has not been declared at all.

// When it occurs: It happens when you try to use a variable that has not been declared in the current scope. This causes a ReferenceError.
// console.log(a); // ReferenceError: a is not defined



// 3. NaN (Not-a-Number):
// What it is: NaN stands for "Not-a-Number." It is a special value in JavaScript used to represent values that are not valid numbers. It is a type of number (specifically, it’s a value of type number) but is used to indicate invalid or undefined numerical results, such as when a mathematical operation fails to produce a valid number.
// console.log(0 / 0); // NaN, because dividing zero by zero is undefined
// console.log(Math.sqrt(-1)); // NaN, because the square root of a negative number is not a valid real number
// console.log(Number('abc')); // NaN, because the string 'abc' can't be converted to a valid number


// question What are arrow functions?
// Arrow Functions in JavaScript
// Arrow functions, introduced in ES6 (ECMAScript 2015), provide a more concise way to write functions compared to the traditional function expressions. They are particularly useful for writing short, single-expression functions.
// const multiply = (a, b) => {
//     return a * b;
//   };
//   console.log(multiply(2, 3)); // Output: 6

// question What is the for-in loop in JavaScript? Give its syntax
// The for-in loop in JavaScript is used to iterate over the keys (or property names) of an object or the indices of an array. It allows you to loop through the enumerable properties of an object or the elements in an array (though using it on arrays is not always recommended, as it iterates over all properties, not just the numeric indices).
// const person = {
//     name: "Alice",
//     age: 25,
//     city: "Wonderland"
//   };
  
//   for (let key in person) {
//     console.log(key + ": " + person[key]);
//   }
//   output
//   name: Alice
// age: 25
// city: Wonderland




// question Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript

// 1. Local Scope
// Definition: Local scope refers to variables that are defined inside a function or block of code. These variables are accessible only within that specific function or block and are not visible to the outside world (outside the function or block).
// function greet() {
//     let message = "Hello, World!";  // message has local scope
//     console.log(message); // Accessible inside the function
//   }
  
//   greet();
//   console.log(message); // Error: message is not defined outside the function

//   2. Block Scope
// Definition: Block scope refers to variables that are confined to a block, which is typically defined by curly braces {}. Block scope was introduced in ES6 (ECMAScript 2015) through the let and const keywords. Variables declared with let or const inside a block are only accessible within that block.
// Example:

// javascript
// Copy
// if (true) {
//   let blockScopedVariable = "I'm block scoped!";
//   console.log(blockScopedVariable); // Accessible inside the block
// }

// console.log(blockScopedVariable); // Error: blockScopedVariable is not defined

// 3. Functional Scope
// Definition: Functional scope refers to the scope of variables declared inside a function. These variables are accessible only within that function and not outside it.



// Example:

// javascript
// Copy
// function add(a, b) {
//   let result = a + b;  // result is function-scoped
//   return result;
// }

// console.log(add(2, 3)); // 5
// console.log(result); // Error: result is not defined outside the function




// questionWhat is difference between null and undefined and where to use what?
// In JavaScript, null and undefined are both used to represent the absence of a value, but they are different in terms of their meaning, usage, and behavior. Let’s explore the differences between null and undefined, and when to use each one.
// 1. undefined
// Meaning: undefined is a primitive value that is automatically assigned to variables that are declared but not assigned a value. It is also the default value of function arguments that are not passed and the value returned by functions that do not explicitly return anything.
// let x; // Variable is declared but not assigned
// console.log(x); // undefined
// 2. null
// Meaning: null is an explicitly assigned value that represents the intentional absence of any object value. It is a primitive value that indicates the absence of an object or the intentional "empty" state.
// let obj = null; // Explicitly set to null
// console.log(obj); // null

  

// question Write code to explain map and filter in arrays
// 1. map()
// The map() function creates a new array populated with the results of calling a provided function on every element in the calling array. It is generally used to transform each element of the array.
// const numbers = [1, 2, 3, 4, 5];

// // Using map to square each element in the array
// const squares = numbers.map(num => num * num);

// console.log(squares); // Output: [1, 4, 9, 16, 25]
// console.log(numbers); // Original array remains unchanged: [1, 2, 3, 4, 5]


// 2. filter()
// The filter() function creates a new array with all elements that pass the test implemented by the provided function. It is generally used to filter out elements from an array based on a condition.
// const numbers = [1, 2, 3, 4, 5];

// // Using filter to get only even numbers
// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers); // Output: [2, 4]
// console.log(numbers); // Original array remains unchanged: [1, 2, 3, 4, 5]



// Given an array of 0's and 1's find out number of 0's
// finding zero and ones
// let arr1 = [0,1,1,0,0,,1,0,0];
// let zero = 0;
// let ones = 0;
// for(i = 0 ; i < arr1.length ; i++){
//     if(arr1[i] == 0){
//         zero++
//     }
//     else {
//         ones++
//     }
// }

// console.log( "there are " + zero + " zero");
// console.log("there are " + ones + " ones");

// Given an array find out total no. of odd and even nos.
// finding odd and even numbers

// let arr = [4, 8, 7, 54, 55, 7, 2, 22, 1, 7];
// let even = 0;
// let odd = 0;
// let oddnumber = [] ;
// let evennum = [] ;

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     even++
//     evennum.push(arr[i])
    

//   } else {
//     odd++
//     oddnumber.push(arr[i])
//   }
// }
// console.log("count of even number is" + even);
// console.log( "count of odd number is" + odd);


// console.log( "even num " + evennum);
// console.log("odd numbers" + oddnumber);



// Given a string find out number of vowels
///finding vowels
// let str = "indian" ;
// let vowel = 0;
// for (let i of str) {
//     if(i == "a" || i == "e" || i ==="o" || i ==="i" || i ==="u" )
//     {
//         vowel++;
//     }

// }
// console.log(vowel);





