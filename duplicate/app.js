// Write a JS code to find the duplicate number in an array.

// let arr1 = [4, 2, 34, 4, 1, 12, 1, 4,12];
// let result = [];

// function findDuplicate(arr) {
//   for (let i = arr.length; i >= 0; i--) {
//     let deleted = arr.pop();

//     if (arr.includes(deleted) && !result.includes(deleted)) {
//       result.push(deleted);
//     }
//   }
//   return result;
// }
// console.log(findDuplicate(arr1));

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

let str1 = "recede";
str1 = str1.toLowerCase();
let result = [];
str1.split("").forEach(function (char) {
  if (str1.split(char).length > 2) {
    result.push(")");
  } else {
    result.push("(");
  }
});
console.log(result.join(""));
