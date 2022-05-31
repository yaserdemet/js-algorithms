// This is an interview question asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// const arr = [14, 15, 3, 7];
// let x = 17;


// ! solution with standart for loop
// function myFunc(arr , x) {
//     for(let i = 0 ; i < arr.length ; i++) {
//         for(let j = 0; j < arr.length ; j++){
//             if(arr[i] + arr[j] ===x) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// console.log(myFunc(arr, x));



// ? solution with for of loop

function total (arr,x) {
    for(let i of arr) {
        for(let j of arr) {
            if(i +j === x) {
                return true
            }
        }
        return false;
    }
}
console.log(total([14, 15, 3, 7], 17));















// function sum(arr, x) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let ii = i + 1; ii < arr.length; ii++) {
//       if (arr[i] + arr[ii] === x) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// console.log(sum(arr, x));





// function checker(x) {
//   if (arr[0] + arr[arr.length - 1] == x) {
//     return true;
//   } else;
//   return false;
// }
// console.log(checker(x));
