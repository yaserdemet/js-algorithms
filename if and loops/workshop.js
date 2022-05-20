// console.log("----------\nswitch case statements\n----------");

// let text;
// let fruit = prompt("type your favorite fruit");
// banana, lime, limon, orange, apple;

// switch (fruit.toLowerCase()) {
//   case "banana":
//     text = "I like Banana!🍌";
//     break;
//   case "lime":
//   case "lemon":
//   case "orange":
//     text = `I am not a fan of ${fruit}`;
//     break;
//   case "apple":
//     text = `I like 🍎🍏`;
//     break;

//   default:
//     text = "I don't know that fruit";
// }

// const day = prompt("enter a day: ").toLowerCase();

// switch (day) {
//   case "monday":
//   case "tuesday":
//   case "wednesday":
//   case "thursday":
//     console.log(`Inclass`);
//     break;
//   case "friday":
//     console.log(`Teamwork`);
//     break;
//   case "saturday":
//     console.log(`Inclass and workshop`);
//     break;
//   case "sunday":
//     console.log(`Self study.`);
//     break;
//   default:
//     console.log(`${day} is not a day.`);
// }

//? ODEV2: Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

// console.log("OYUN");

// let devam;
// do {
//   let hak = 5;
//   const rasgeleSayi = Math.floor(Math.random() * 100 + 1);
//   console.log(rasgeleSayi);

//   do {
//     const tahmin = Number(prompt("Lütfen 0-100 arasında bir sayi giriniz:"));
//     hak -= 1;
//     if (tahmin === rasgeleSayi) {
//       console.log(`Tebrikler ${5 - hak}. denemede bildiniz.🥳`);
//       break;
//     } else {
//       console.log(`Dikkat ${hak} hakkınız kaldı`);
//       if (tahmin < rasgeleSayi) {
//         console.log("ARTTIR ⬆️");
//       } else {
//         console.log("AZALT ⬇️");
//       }
//     }
//   } while (hak > 0);

//   if (hak === 0) {
//     console.log("Üzgünüz oyunu kaybettiniz 😔");
//   }

//   devam = prompt("Yeniden oynamak ister misiniz e/h?");
// } while (devam == "e" || devam == "E");

// console.log("Yine bekleriz");

// console.log("****** LOOPS *******");

// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************
// Math.floor() =>aşağıya yuvarlar
// Math.ceil() =>sürekli yukarıya yuvarlar
// Math.round() => değerine göre yuvarlar.
// Math.trunc() => kesirli sayının tam kısmı alır.

// for (let i = 1; i <= 10; i++) {
//   const randomSayi = Math.floor(Math.random() * 100 + 1);
//   console.log(randomSayi);
// }

// console.log('Program bitti');

//? Ornek: 1 den n kadar sayıları toplayan kodu yazınız.

// const n = prompt('n sayisini girinz:');
// let toplam = 0;
// for (let i = 1; i <= n; i++) {
//   toplam += i;
// }

// console.log('Toplam:', toplam);

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

//******************** WHILE ******************

// let i = 1;
// while (i <= 5) {
//   console.log('Merhaba-', i);
//   i++;
// }

// console.log('Bitti');

// let not = prompt('Lütfen notunuzu giriniz (0-100):');

// while (not < 0 || not > 100) {
//   alert('Girdiğiniz not 0-100 arasında olmalıdır');
//   not = prompt('Lütfen notunuzu giriniz (0-100):');
// }
// console.log('Girdiğiniz not', not);

//* Ornek

//******************** DO-WHILE ******************
// let i = 1;

// do {
//   console.log('Merhaba-', i);
//   i++;
// } while (i <= 5);

// let not;

// do {
//   not = prompt("Lütfen notunuzu giriniz (0-100):");
//   if (not < 0 || not > 100) {
//     alert("Girdiğiniz not 0-100 arasında olmalıdır");
//   }
// } while (not < 0 || not > 100);

// console.log("Girdiğiniz not", not);

// do {
//   not = prompt("Lütfen notunuzu giriniz (0-100):");
//   if (not < 0 || not > 100) {
//     alert("Girdiğiniz not 0-100 arasında olmalıdır");
//   }
// } while (not < 0 || not > 100);

// console.log("Girdiğiniz not", not);

// GİRİLEN BİR KELİMEYİ TERS ÇEVİRME

// 1. YOL (Kelimeyi ters çevirme)
// let x = "This is an example";
// let y = x.split("");
// let z = y.reverse().join(""); //Sadece split() string i parcalar ve diziye atar.
// console.log(z); //join ise listeyi stringe çevirir.

// İKİNCİ YOL (Kelimeyi ters çevirme);
// buradaki mantığımız stringi for ile iterate edip boş bir listeye atıp daha sonra o listeyi is join ile birleştiriyoruz.
// let a = "This is an example";
// let empty = [];
// for (let i = a.length - 1; i >= 0; i--) {
//   empty.push(a[i]);
// }
// console.log(empty.join(""));

// RECURSIVE YAPILARI

// function recursive(number) {
//   console.log(number);

//   let a = number - 1;
//   if (a > 0) {
//     recursive(a);
//   }
// }
// recursive(10);

// function recursive2(number) {
//   console.log(number);
//   if (number > 0){
//     recursive2(number-1)
//   }
// }
// recursive2(11)

// function fakto(number) {
//   if (number === 1 || number === 0) {
//     return 1;
//   }
//   else if (number > 1) {
//     return number * fakto(number - 1);
//   }
// }
// fakto(5);

// function power1(number, power) {
//   if (number === 1) {
//     return 1;
//   } else if (power === 0) {
//     return 1;
//   } else if (power === 1) {
//     return number;
//   } else;
//   return number * power1(number, power - 1);
// }
// power1(3, 5);

// let a = 22;
// let fonk = function () {
//   a = 33;
//   let b = 33;
//   return a + b;

// };
// fonk();

console.log("****** for of kullanımı *******");

//for of kullanımı for a göre daha kullanışlıdır.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(const myNumbers of numbers){
//   console.log(myNumbers);
// }

// for (const newNumbers of numbers) {
//   console.log(newNumbers ** 2);
// }

// const webTechs = [
//    "HTML",
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// for(const x of webTechs){
//     console.log(x.toLocaleUpperCase());
// }

// for(const x of webTechs){
//     console.log(x[0]);
// }

// const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
// const emptyArray = [];
// for (const x of countries) {
//   emptyArray.push(x.toUpperCase());
// }
// console.log(emptyArray);

// const numbers = [1, 2, 3, 4, 5]
// let sum = 0
// for (const num of numbers) {
//   sum = sum + num  
// 	// can be also shorten like this, sum += num
//   // after this we will use the shorter synthax(+=, -=, *=, /= etc)
// }
// console.log(sum)

for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
  }
  
  // 0 1 2 4 5