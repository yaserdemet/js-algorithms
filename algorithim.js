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


// const points = [40, 100, 1, 5, 25, 10]
// console.log(points.sort((a,b) =>  b-a));
// console.log(Math.max.apply(null , points))


// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];

// console.log(cars.sort((a,b) => a.year - b.year));

// const numbers = [45, 4, 9, 16, 25]
// let empty = 0

// function myFunction (item) {
//     empty += item
// }

// numbers.forEach(myFunction)
// const filtered = numbers.filter((item) => item > 18 )
// console.log(empty);
// console.log(filtered)

// ? The every() method checks if all array values pass a test.
// const numbers = [45, 4, 9, 16, 25 , 4]
// const data = numbers.every((item,index) => item > 3)
// console.log(data);

// ? indexOf ikinci parametresi hangi index ten baslaması gerektiğini belirtir
// const indexx = numbers.indexOf(4,4) 
// console.log(indexx)


// ? How to merge two array without dublicate
const myArray1 = [5, 7, 9];
const myArray2 = [9, 8, 5, 10];
const uniqueArrs = [...new Set(...myArray1, ...myArray2)]

//? How to make recursive treeList

 const groupByParentId = (data: any) => {
    let result: any = {};
    let separateList: any[] = [];
    for (let i = 0; i < data?.length; i++) {
      if (data[i].parentId === 0) {
        separateList.push(data[i]);
        continue;
      }
      if (!result[data[i].parentId]) {
        result[data[i].parentId] = {
          id: data[i].parentId,
          children: [],
        };
      }
      result[data[i].parentId].children.push(data[i]);
    }
    return [...separateList, ...Object.values(result)];
  };

// ? How to find missing number in array 1 to 100
const findMissingOne = (givenArray : number[]) => {
    const allSum = 100 * (100 + 1) / 2
    const sum = givenArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    },0)
    return allSum - sum;
};
console.log(findMissingOne([1,2,3,...100]))

// ? write a function that takes an array then get array's item's square if it is even and find their sum;
const findSquareOfEven = (arr : number[]) => {
    const finded = arr.filter((item) => item % 2 === 0).map((item) => item ** 2).reduce((accumulator,currentValue) => accumulator + currentValue , 0)
    return finded;
} 
console.lo(findSquareOfEven([1,2,3,4,5,6]))


// Create an array 1 to n then calculate time function to execute array' s item to write console.

const crateAnArray = (n : number) => {
    const data = Array.from(Array(n).keys())
    return data;
}

const calculateTime = () => {

    console.time()
    console.log("Execute Stared");
    for (let i in data){
        console.log(data[i])
    }
    console.timeEnd()
    console.log("Execution Ended)
    
}


// Sort given array according to given keys which contains object 
const sortArr = (array, keyToSort) => {
    const data = array.sort((a,b) => a[keyToSort] - b[keyToSort]);
    return data;
}
const arr = [
  { name: 'John', age: 30, gender: 'male' },
  { name: 'Jane', age: 25, gender: 'female' },
  { name: 'Adam', age: 35, gender: 'male' }
];
console.log(sortArr(arr, age)) 

another solution : 

const sortArr = (arr, key) => {
    const sortedOne = arr.sort((a,b) => {
        if(a[key] < b[key]){
            return -1 }
        else if (a[key] > b[key]){
            return 1;
        }
        else {
            return 0 
        }
    })
}

// Dynamically add external contents to your data using object bracket notation...

// One of my most use case of the bracket notation is when I need to assign extra or missing fields dynamically to a mapped data.

// For instance, there are cases where the data you get from the backend does not include some important fields, like symbols,

// images or icons, and you need to display these missing fields on the UI...

const vendors = [ {name : "Mozz", country  : "Turkey"},{name : "Phantom", country  : "Italy"},{name : "Norm", country  : "Greece"} ]
const curriencies = {Turkey : "tl", Italy : "euro", Greece : "euro"}
const addNewKey =  vendors.map((item) => ({...item, curriencies : curriencies[item.country] }))
// we use parentheses () around the object literal {...item, curriencies: curriencies[item.country] }. This is because when you use curly braces {} 
// inside an arrow function without parentheses, JavaScript considers it as a block of code instead of an object literal.
// So, adding parentheses helps to explicitly define that we are returning an object literal from the arrow function.
console.log(addNewKey)

