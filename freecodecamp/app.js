// bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].

// bouncer(["a", "b", "c"]) should return ["a", "b", "c"].

// bouncer([false, null, 0, NaN, undefined, ""]) should return [].

// bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].

// function bouncer(arr) {
//     let empty = [];
//   for (const b in arr) {
//     if (!!arr[b]) {
//       empty.push(arr[b]);
//     }
//   }

//   return empty;
// }

// let x = [7, "ate", "", false, 9];
// console.log(bouncer(x));





//For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// function mutation(arr) {
//   let first = arr[0].toLowerCase();
//   let second = arr[1].toLowerCase();
//   for (let i = 0; i < second.length; i++) {
//     if (first.indexOf(second[i]) < 0) {
//       return false;
//     }
//   }

//   return true;
// }

// let u = mutation(["hello", "Hello"]);
// console.log(u);


//chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

function chunkArrayInGroups(arr, size) {

let empty = [];

 let x =  arr.slice(0,size);
 empty.push(x);
 let y = arr.slice(size);
    empty.push(y);


    return empty;
  }
  
 console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); 
