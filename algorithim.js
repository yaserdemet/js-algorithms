//* Question1: How would you reverse a string in JavaScript?

// const reverseStr = (str) => {
//         let emptyStr = "";
//         for(let i = str.length - 1; i >= 0 ; i--){
//             emptyStr += str[i]
//         }
//         return emptyStr;

// }
// console.log(reverseStr("hello"))


//* Question2: How do get nth Fibonacci number?
//? A fibonacci sequence is written as: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

// function fibo(n){
//     if(n<=1){
//         return n
//     }

//     else{

//      return   fibo(n-1) + fibo(n-2)
//     }
// }
// console.log(fibo(12))


//* Question2: How do check Prime number?
//? A prime number is a positive integer that is only divisible by 1 and itself.

// const primeCheck = (num) => {

//     if (num === 1) {
//         console.log("1 is neither prime nor composite number.");
//     }
    
//     else if (num == 2) {
//         console.log(`${num} is only even number`)
//     }

//     else if(num > 2){
        

//         for(let i = 2; i <= num; i ++){
//             if( num  % i == 0){
//                 return false
//             }
//         }
//     }

//     else {
//         return true
//     }
   
// }
// console.log( primeCheck (17))


//* Question2: How to remove duplicate elements from JavaScript Array ?

// function removeDub(arr) {

//     const newArr = new Set(arr)
//     return [ ... newArr]
// }
// console.log(removeDub([1,2,3,4,3,3,3,5,6]))


// function remDub(arr){

//     const newArr = arr.filter((item, index) =>  arr.indexOf(item) === index)
    
//     return newArr

// }
// console.log(remDub([1,2,3,5,5,5,5,5,2,2,2,2]));