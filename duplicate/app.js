// Write a JS code to find the duplicate number in an array.


let arr1 = [4, 2, 34, 4, 1, 12, 1, 4,12];
let result = [];

function findDuplicate(arr) {
  for (let i = arr.length; i >= 0; i--) {
    let deleted = arr.pop();
    
    if (arr.includes(deleted) && !result.includes(deleted)) {
      result.push(deleted);
    }
  }
  return result;
}
console.log(findDuplicate(arr1));
