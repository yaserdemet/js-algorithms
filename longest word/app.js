// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// function findLongestWordLength(str) {
//     let word = str.split(" ")
//     let longest = 0;
//     for(let i = 0; i < word.length; i++){
//       if(word[i].length > longest){
//         longest = word[i].length
//       }
//     }
//     return longest;
//   }

//  let x =  findLongestWordLength("The quick brown fox jumped over the lazy dog");
//  console.log(x);







// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// function largestOfFour(arr) {
//   let bigest = [];
//   for (let i = 0; i < arr.length; i++) {
//     let largest = arr[i][0];
//     for (let j = 1; j < arr[i].length; j++) {
//       if (arr[i][j] > largest) {
//         largest = arr[i][j];
//       }
//     }
//     bigest.push(largest);
//   }
//   return bigest;
// }

// let x = largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1],
// ]);

// console.log(x);

//Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// function confirmEnding(str, target) {
//   let x = str.endsWith(target);
//   return x;
// }

// let y = confirmEnding("Bastian", "n");
// console.log(y);

// function confirmEnding(str, target) {
//   let x = str.substring(str.length - target.length);
//   return x === target;
// }

// let y = confirmEnding("Bastian", "n");
// console.log(y);






// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

// function repeatStringNumTimes(str, num) {
//   let empty = ""
//   for(let i = 0; i < num; i++){
//       empty += str
//   }

//   return empty;
// }

// repeatStringNumTimes("abc", 3);

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// function truncateString(str, num) {
//   if (str.length > num) {
//     return str.slice(0, num) + "...";
//   }
// }
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));







//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

// function titleCase(str) {
//   let x = str.toLowerCase().split(" ");
//   let y = [];
//   for (let i = 0; i < x.length; i++) {
//     y.push(x[i][0].toUpperCase() + x[i].slice(1));
//   }

//   return y.join(" ");
// }

// console.log(titleCase("I'm a little tea pot"));
