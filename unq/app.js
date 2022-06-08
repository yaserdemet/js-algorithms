let z = [ 0, 0, 0.55, 0, 0 ]

let empty = []
let empty2 = []
function unq(arr) {
    for(let i= 0; i < arr.length; i++) {
        empty.push(arr[0])
        if(empty.indexOf(arr[i]) === -1){
            empty2.push(arr[i])
        }
    }
    return empty2
}
console.log(unq([ 0, 0, 0.55, 0, 0 ]));