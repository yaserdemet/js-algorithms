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
// const array1 = [1, 4, 9, 16];

// pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);




// const fiyatlar = [100, 250, 50, 89];

// Psecode;
//1 array deki her bir fiyata ulaş.
//2 her bir elemana %10 zam yap.
//3 forEach yap. orjinal dizi değişmeli.

// fiyatlar.forEach(
//   (price, index, array) => (array[index] = (price * 1.1).toFixed(2))
// );
// console.log(fiyatlar);



//SORU2;
// FİYATI 110 dan küçük olanları  %10 zam yap.

// fiyatlar.filter((x) => x < 110).map((y) => (y * 1.1) ).forEach((z)=> console.log(z.toFixed(2)));
// console.log(fiyatlar)



//SORU3;

// const salary = [25000, 3900 , 3200 , 120000 , 73000];
//maasların toplamını forEach ile bul.

// let sum = 0;
// salary.forEach((v) => sum += v);
// console.log(sum);


// REDUCE İLE ÇÖZÜMÜ;
// reduce orjinal arrayi değiştirmez.

// let total = salary.reduce((x , y ) => x + y);
// console.log(total);




// ? QUESTION1: maaslar dizisi icin maasi ortalamanin altinda olanlara %20 zam yaparak zamli maaslari ayrı bir diziye atalım.

const maaslar = [3000, 5000, 4000, 6000, 6500];

const avarage = maaslar.reduce((x , y)=> x+y,0) / maaslar.length;   //! reduce ile ortalamayı buldum.
console.log(avarage);
const expend = maaslar.filter((x) => x < avarage).map((y) => (y*1.2))  //! filter ile ortalama altında olanları bul ve map ile zam yap.
console.log(expend);
