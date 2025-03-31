// regular function
// function num() {
//   console.log("hello i am regular function");
// }
// num();
// // arrow function
// const fun1 = () => {
//   console.log("hello i am arrow function");
// };
// fun1();
// //function expression
// const fun2 = function () {
//   console.log("hello i am  function expression");
// };
// fun2();

// function num(name) {
//   console.log("hello i am regular function " + name);
// }
// num("tanya");
// num("shreya");

// function showMasaage(name) {
//   alert("the function name is showMassage " + name);
// }
// showMasaage("1");
// showMasaage("2");


// function num1(age){
//     return age;
// }

// // num1(56);
// console.log("the age is " + num1(25));


// function square(number){
//     return number* number;
// }
// console.log(square(4));


// function subtract(a , b){
//     return a - b;
// }
// console.log(subtract(13 , 3));




//create one function with zero parameter having a console statement
// function zero(param){
//     console.log(param);
// }
// zero(0);



//create one arrow function with zero parameter having a return statement
// const zero = (param) => {
//     return param;
// }
// console.log(zero(0));






// function parameter( fistName , lastName , age){
// return fistName + lastName + " is " + age + "year old";

// }

// console.log(parameter("shreya " , "sharma" , 99 ));



//nested function
function outer(length , breadth)
{
    function inner(){
        console.log( length*breadth);
        
    }
    inner()
}
outer(5,5)


