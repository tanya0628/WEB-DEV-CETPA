// const countCharacters = () => {
//     let S = "AbadBD";
//     let countA = 0;
//     let countD = 0 ;
//     for(let i = 0; i < S.length ; i++){
//         if(S[i] ==="A" || S[i] === "a"){
//             countA++;
//         }
//         else if(S[i] === "D" || S[i] === "d"){
//             countD++;
//         }
//     }
//     return [countA , countD]
// }
// console.log(countCharacters());



// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4

// printing this
// const row  = 10 ;
// for(let i = 1; i <= row ; i++){
//     let pattern = "  ";
//     for(let j = 1; j <= i ; j++){
//          pattern += j + " " ; }
//          console.log(pattern);
         

// }


// 2D array
// let arr = [[1,2],
// [3, 4],
// [5, 6],
// ];
//  for(let i = 0; i < arr.length; i++){
//     for(let j = 0 ; j < arr[i].length ; j++){
//         console.log(arr[i][j]);
        
//     }
//  }



// concat strings

// let str = "live";
// let str1 = " session"
// let res = str.concat(str1)
// console.log(res);


/// find largest no. from the arrray
// let arr = [ 45, 4 , 2, 45, 78, 550];
// let  largest =  arr[0];
// for(let i = 1 ; i < arr.length; i++){
//     if(arr[i] < largest){
//         largest = arr[i];
        
//     }
// }
// console.log("the largest number is  " + largest );



//duplicate
// let arr1 = [4, 2, 45, 44, 7, 78, 4, 2, 1, 9, 1];
// let  duplicate =  [];
// for(let i = 0 ; i < arr1.length; i++){
//     for(let j = i +1 ; j < arr1.length; j++){
//         if(arr1[i] === arr1[j] && !duplicate.includes(arr1[i])){
//             duplicate.push(arr1[i])
//         }
//     }
// }
    
// console.log(duplicate );
// console.log(arr1);




// char count
// let str = "heyyy";
// const count = {};
// for(let char of str){
//     count[char] = (count[char] || 0) + 1;
// }
// let res = "";
// const keys = Object.keys(count).sort();
// for(let char of keys){
//     if(count[char] > 1){
//         res +=char + count[char];
//     }
// }
// console.log(res);


