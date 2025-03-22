// DAY1
// Difference between “ == “ and “ === “ operators.
// ANS- "==" operator check value are equal like a = 10 ,b = 10 a==b true,
// but in "===" equal and datatype of both value are equal .

// What are the differences between var, let and const?
//ANS- var is a global access variable and let and const are block level variable in const we can't change the value of const;
// example - 
// var a = 10;
//let b = 20;
//const c = 30;

// What is execution context
//ANS-Execution context is an environment where JavaScript code is executed. It contains:

// Global Execution Context (GEC): Created by default, this is the outermost execution context.
// Functional Execution Context (FEC): Created whenever a function is called.
// Eval Execution Context: Created inside the eval() function.
// Each execution context has two phases:

// Creation Phase: Memory allocation happens for variables and functions.
// Execution Phase: Code runs line by line.


// What is creation phase and execution phase.
//ANS- first decleartion then initilization and then execution.

// What is hoisting?
//ANS- Its a behaviour of javascript in this we first top we put value and we can access of value in variable.

// Difference between undefined vs not defined vs NaN
//ANS undefined - var a;  in this we not difind value in it .
// not defined - console.log(b);
// NaN - its mean not a number this function use for check value is not a number.

// How many operators do we have in JS ? 
//ANS arthmetic operators ,logical operators,betwise,Comparison Operators,Assignment Operators,Ternary Operator.


// Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript
//ANS Local Scope: Variables declared inside a function are only accessible within that function.
// Block Scope: Variables declared with let or const inside {} are accessible only within that block.

//Functional Scope: Variables declared with var are scoped to the function in which they are declared.
//Scope Chain: When a variable is accessed, JavaScript searches from the current scope upwards to the global scope.

// function name() {
//     var a = 100;
   
// }
// console.log(a);
// name();

// if(true){
//     let b = 90;
//    }
//    console.log(b);