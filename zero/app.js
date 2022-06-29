// ? moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
let one = []
let two = []
const zero = (arr) => {
  for (let i = 0 ; i < arr.length ; i++) {
    arr[i] === 0 ? one.push(arr[i]) : two.push(arr[i]);
  }
  return [...two, ...one];
};
console.log(zero([1,2,0,1,0,1,0,3,0,1]));
