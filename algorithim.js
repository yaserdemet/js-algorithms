//* Question1: How would you reverse a string in JavaScript?

// const reverseStr = (str) => {
//         let emptyStr = "";
//         for(let i = str.length - 1; i >= 0 ; i--){
//             emptyStr += str[i]
//         }
//         return emptyStr;

// }
// console.log(reverseStr("hello"))


//* Question2: How do get nth Fibonacci number?
//? A fibonacci sequence is written as: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

// function fibo(n){
//     if(n<=1){
//         return n
//     }

//     else{

//      return   fibo(n-1) + fibo(n-2)
//     }
// }
// console.log(fibo(12))


//* Question2: How do check Prime number?
//? A prime number is a positive integer that is only divisible by 1 and itself.

// const primeCheck = (num) => {

//     if (num === 1) {
//         console.log("1 is neither prime nor composite number.");
//     }
    
//     else if (num == 2) {
//         console.log(`${num} is only even number`)
//     }

//     else if(num > 2){
        

//         for(let i = 2; i <= num; i ++){
//             if( num  % i == 0){
//                 return false
//             }
//         }
//     }

//     else {
//         return true
//     }
   
// }
// console.log( primeCheck (17))


//* Question2: How to remove duplicate elements from JavaScript Array ?

// function removeDub(arr) {

//     const newArr = new Set(arr)
//     return [ ... newArr]
// }
// console.log(removeDub([1,2,3,4,3,3,3,5,6]))


// function remDub(arr){

//     const newArr = arr.filter((item, index) =>  arr.indexOf(item) === index)
    
//     return newArr

// }
// console.log(remDub([1,2,3,5,5,5,5,5,2,2,2,2]));

// * What is the difference between for in and for of ? 

// const myArr = [1,2,3,4,5,6]
// let empty = []

// for(let i in myArr){
        
//     empty.push(myArr[i]  + 1)
// }
// console.log(empty);


// //! in kullanırsa indexleme ile ulasılır , of ta ise sadece variable ile ulasılır.

// const yourArr = [1,2,3,4,5,6]
// let emptyy = []
// for(let i of yourArr){
//     emptyy.push(i + 1)
// }
// console.log(emptyy)


//* Question5: Check Whether a String is Palindrome or Not

// const palindrome = (str) => {
    
//     const arrStr = str.split("").reverse().join("")
//     if(str === arrStr){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(palindrome("oko"));


// function pal(str){
//     let len = str.length
//     let empty = ""
//     for(let i = len - 1; i>=0 ; i --){
//      empty += str[i]     
//     }
//     if(str === empty){
//         console.log(`${str} is palindrome word`)
//     }
//     else{
//         console.log(`${str} is not palindrome`);
//     }
//     return empty
// }
// console.log(pal("oko"))

const x = NaN
console.log(typeof(x))


let a = 100 / "Apple";
console.log(isNaN(x));

// There are 3 JavaScript methods that can be used to convert variables to numbers:

//* The Number() method
//* The parseInt() method
//* The parseFloat() method


//? Parse int sadece ilk gördüğü sayıyı çevirir
// parseInt("-10"); 10 
// parseInt("-10.33"); 10
// parseInt("10"); 10
// parseInt("10.33"); 10
// parseInt("10 20 30");10
// parseInt("10 years"); 10
// parseInt("years 10"); NaN


// ? parseFloat yanlızca ilk gördüğü str yi number a çevirir.

// parseFloat("10") 10 
// parseFloat("10.33") 10
// parseFloat("10 6") 
// parseFloat("10 years") 
// parseFloat("years 10");  

// const myArr = [ 1, 2,3,4,5]
// const p = Array.isArray(myArr)
// console.log(p)
// console.log(typeof(myArr));
//! arraylerin type ı objecttir.

//? array to string 
// // console.log(myArr.toString())
// // console.log(myArr.join(" * "));

// console.log(myArr.pop() , myArr)
// console.log(myArr.shift() , myArr);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
// * The first parameter (2) defines the position where new elements should be added (spliced in).

// * The second parameter (0) defines how many elements should be removed.

// * The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
console.log(fruits)