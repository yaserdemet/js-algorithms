// Purpose of the this coding challenge is to write a code that given two sorted arrays, returns merged array of these inputs.
// function merge(arr1 , arr2) {
//     let result = [];
//     for(const x in arr1){
//         result.push(arr1[x]);

//     }

//     for(const y in arr2){
//         result.push(arr2[y]);
//     }
//     return result.sort((a,b) => a-b);
// }
// let mine = [1,3,5,7,9];
// let yours = [2,4,6,8,10];
// console.log(merge(mine, yours));

//? MERGED ARRAY SECOND SOLUTION;

const firstOne = [1,3,5,7,9];
const secondOne = [2,4,6,8,10];
const merged = [...firstOne,...secondOne];
console.log(merged);