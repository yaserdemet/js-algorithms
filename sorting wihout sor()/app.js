// Write a JavaScript code to sort the list/array below without using .sort() method.
// elements of list = [999, 333, 2, 8982, 12, 45, 77, 99, 11]
// Expected output:
// [2, 11, 12, 45, 77, 99, 333, 999, 8982]

let a = [999, 333, 2, 8982, 12, 45, 77, 99, 11];
let b = [];

while(true){
    let x = Math.min(...a);
    b.push(x);
    a.splice(a.indexOf(x),1);
    if(a.length == 0){
        break;
    }
}
console.log(b);


// Second Way With For Loop

for(let i = a.length-1; i >=0 ; i--){
    let x = Math.min(...a);
    b.push(x);
    a.splice(a.indexOf(x),1);
}
console.log(b);