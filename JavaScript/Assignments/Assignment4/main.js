// function character() {
//   let S = "AbaDd";
//   let countA = 0;
//   let countD = 0;
//   for (let i = 0; i < S.length; i++) {
//     if (S[i] === "A") {
//       countA++;
//     } else if (S[i] === "D") {
//       countD++;
//     }
//   }
//   return { countA, countD };
// }

// console.log(character());

// let str = "prepbytes";
// let count = {};

// for (const char of str) {
//   count[char] = (count[char] || 0) + 1;
// }

// let res = "";
// let keys = Object.keys(count).sort();
// for (const char of keys) {
//   if (count[char] > 1) {
//     res += char + count[char];
//   }
// }
// console.log(res);

//question 3

// let S1 = "prep";
// let S2 = "bytes";
// let S3 = S1.concat(S2);
// console.log(S3);

// let str = "cdejkl";
//  let count = str.length ;

// console.log(count);

// let string = "AADD";
// let countA = 0;
// let countD = 0;

// for (let i = 0; i <= string.length; i++) {
//   if (string[i] === "A") {
//     countA++;
//   } else if (string[i] === "D") {
//     countD++;
//   }
// }

// if (countA > countD) {
//   console.log("winner is Aditya");
// } else if (countD > countA) {
//   console.log("danish");
// } else {
//   console.log("draw");
// }

//question 7
// let S = "prepbytes";
// let P = "Technologies";
// let res = S.concat(P)
// console.log(res);

//question 8
// let S = "naman";
// let res = S.split("").reverse().join("");
// if ((S = res)) {
//   console.log("true");
// } else {
//   console.log("true");
// }



//question 9 
// let string1 = "i am utkarsh raj";
// let res = string1.split("").reverse().join("");
// console.log(res);


//question 10 
// let S1 = "prepbytes";
// let S2 = "prepbytes";
// if(S1 === S2){
//     console.log("YES");
    
// }
// else{
//     console.log("NO");
    
// }




//QUESTION 11 
// let string = "hey i am you ";
// let res = string.replace( "you" , "prepbytes");
// console.log(res);



//question 12 
// let str = "i am tanya";
// let res = str.split(" ")
// console.log(res);


//question 13

let find = "prepbytes";
let vowel = 0;
let consonent = 0 ;
for(let i = 1 ; i <= find.length;i++){
    if(find[i] === "i" || find[i] === "e" || find[i] === "o" || find[i] === "u"|| find[i] === "a" ){
        vowel++;
    }
    else{
        consonent++
    }
}
console.log(vowel);
console.log(consonent);





