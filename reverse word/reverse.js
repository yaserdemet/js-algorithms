// function reverse (str){
//     let empty = ""
//     for(let i = str.length-1; i>=0; i--){
//         empty += str[i];
//     }
//     return empty
// }
// console.log(reverse("hello"));

function reversed (str) {
  let x =   str.split("").reverse().join("");
  return x;

}
console.log(reversed("hello yasu"));