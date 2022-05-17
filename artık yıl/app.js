// SORU1: Taban ve yükseklik değerlerini parametre olarak alan ve bir üçgenin alanını hesaplayarak ana programa döndüren fonksiyonu yazınız.

// let taban = +prompt("Taban değerini giriniz");
// let h = +prompt("Yükseklik değerini giriniz");

// function alan(taban,h){
//     return taban * h / 2;
// }
// console.log(alan(taban,h));



// SORU2: kareAl, küpAl, üsAl şeklinde üç adet farklı arrow fonksiyonu tanımlayın. Bu fonksiyonların ana programdan gereken parametreleri alarak sonuçları ana programa döndürmeli gerekmektedir.

// let square = +prompt("Değer giriniz.");
// const hesapla = (square)=> {
//     return square * square;
// }
// console.log(hesapla(square));

// let cube = +prompt("Değer giriniz.");
// const hesapla2 = (cube) => {
//   return cube ** 3;
// };
// console.log(hesapla2(cube));


// let base = +prompt("Değer giriniz.");
// let exponent = +prompt("Değer giriniz.");
// const hesapla3 = (base, exponent) => {
//     return base ** exponent;
// }
// console.log(hesapla3(base, exponent));


// SORU3: Yıl değerini parametre olarak alan ve bu yılın artık yıl olup olmadığını hesaplayarak sonucu ana programa döndüren fonksiyonu function-expression yöntemi ile yazınız. NOT: Yıl 4’e tam bölünüyorsa VE (100'e tam bölünmüyorsa VEYA 400'e tam bölünüyorsa) artık yıldır aksi takdirde değildir.



// let year = +prompt("Yılı giriniz.");
// const artıkYıl = (year) =>{
//     if(year % 4 === 0 && year % 100 !==0 || year % 400 ===0){
//         return true;
//     }
//     else{
//         return false;
//     }
    
// }
// console.log(artıkYıl(year));