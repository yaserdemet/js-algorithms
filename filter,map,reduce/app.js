// FILTER METHODS;

// filter methodu içine bir fonksiyon yazılır. Ve bu fonsiyonun true çevirdiği değerleri döndürür.

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(parametre => parametre.length > 6);
// console.log(result);


// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num){
//     for(let i = 2; i < num; i ++){
//         if(num % i ===0){
//             return false;
//         }
//     }
//     return num > 1;
// }
// const result = array.filter(isPrime);
// console.log(result);


// MAP METHODS; 
// map metodu içine bir fonksiyon yazılır. Ve bu fonsiyonun true çevirdiği değerleri döndürür.
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
