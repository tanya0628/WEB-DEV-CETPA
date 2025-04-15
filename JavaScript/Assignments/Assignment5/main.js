// question 1

// function product(){
// let prod = [ 2, 3, 4];
// let mul = 1;
// for(let i = 0 ; i < prod.length; i++){
//      mul = mul* prod[i]
// }
// return mul;
// }

// console.log(product());

// question2
// function add(){
//     let prod = [5, 1, 2, 3, 4, 5];
//     let mul = 1;
//     for(let i = 0 ; i < prod.length; i++){
//          mul = mul+ prod[i]
//     }
//     return mul;
//     }

//     console.log(add());

// question 3

// let A = [3, 4, 6, 5, 5, 5, 3, 3]
// let k = 5;
// let n = 3;
// let countk = 0;
// let countn = 0;
// for(let i = 0 ; i < A.length; i++){
//     if(A[i] === k){
//         countk++;
//     }
//     else if(A[i] === n){
//         countn++
//     }

// }
// console.log(countk);
// console.log(countn);

//  let array = [7 , 1 , 2, 3, 4, 5, 6, 7 ]
//  let odd = 0;
//  let even = 0;





// question 5
// function find() {
//   let arr1 = [5, 1, 2, 3, 4, 5, 2];
//   let input = 13;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] === input) {
//       console.log("YES");
//     } else {
//       return "NO";
//     }
//   }
// }




// let A = [15, 22, 18, 9, 30];  // input array

// let result = [];  // to store ages 18 and above

// // loop through A
// for (let i = 0; i < A.length; i++) {
//     if (A[i] >= 18) {
//         result.push(A[i]);  // add to result if age is 18 or more
//     }
// }
//     console.log(result);



let A =  [5 ,1, 2, 3, 4, 5, ];
for( let i = 0 ; i < A.length; i++) {
    A[i] = A[i] + 1;

}
console.log(A);



function isAllPass(input) {
    // Split input and convert to numbers
    let data = input.trim().split(" ").map(Number);
    
    let N = data[0];            // First number is the count of students
    let marks = data.slice(1);  // The rest are the marks

    for (let i = 0; i < N; i++) {
        if (marks[i] < 32) {
            console.log("NO");
            return;
        }
    }

    console.log("YES");
}



//9

function UniqueColorShirt(input) {
    // Split input and convert to numbers
    let data = input.trim().split(" ").map(Number);
    
    let N = data[0];            // First number is N, number of shirts
    let colors = data.slice(1); // The rest are the shirt colors
    
    let colorCount = {};        // Object to store the frequency of each color
    
    // Count frequency of each color
    for (let i = 0; i < N; i++) {
        let color = colors[i];
        if (colorCount[color]) {
            colorCount[color]++;
        } else {
            colorCount[color] = 1;
        }
    }
    
    // Count how many colors appear only once
    let uniqueCount = 0;
    for (let color in colorCount) {
        if (colorCount[color] === 1) {
            uniqueCount++;
        }
    }
    
    // Return the count of unique colors
    console.log(uniqueCount);
}




//10
function MinMax(input) {
    // Split input and convert to numbers
    let data = input.trim().split(" ").map(Number);
    
    let N = data[0];            // First number is N (number of elements)
    let arr = data.slice(1);    // The rest are the array elements
    
    // Find the minimum and maximum values
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    
    // Print the result (minimum and maximum)
    console.log(min, max);
}


MinMax("6 33 11 44 66 22 77");  // Output will be "11 77"
