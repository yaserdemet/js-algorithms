// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise

const isSorted = (arr)=> {
    if (arr.length < 2) return 'yes, ascending';
    if(arr.length === 2) return arr[0] < arr[1] ? 'yes, ascending' : 'no';
    if(arr.sort((a,b)=>a-b) === arr) return 'yes, ascending';
    if(arr.sort((a,b)=>b-a) === arr) return 'yes, descending';
    return 'no';
}
console.log(isSorted([3,1,0,7]));