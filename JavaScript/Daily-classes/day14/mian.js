// function clock(){
//     var date = new Date();
//     var h = date.getHours();
//     var m = date.getMinutes();
//     var s = date.getSeconds();

//     // let time = ${h} : ${m} : ${s};
//     let time = h + " : " + m + " : " + s;
//     setTimeout(() => {
//         clock();
//     }, 1000);
//     document.getElementById('Myclock').innerText = time;
// }
// clock();




// for(let n = 1; n<=10; n++){
//     setTimeout(() => {
//         console.log(n)
//     }, n * 2000);
// }


// let i=0;
// let t=0;
// function count(){
//     var date=new Date();
//     var s=date.getSeconds();
//     setTimeout(()=>{
//         i++;
//         count()
//     },t=t+1000)
//     let c=document.getElementById("num")
//     c.innerText=i;
// }
// count();


// function wait(ms){
//     return new Promise(resolve => setTimeout(resolve,ms));
// }
// async function printNumbers() {
//     for(let i=0; i<=10; i++){
//         console.log(i);
//         await wait(2000);
//     }
// }
// printNumbers();

// function order(){
//     let show = document.querySelector('#cars').value;
//     document.getElementById('values').innerText = show;
// }