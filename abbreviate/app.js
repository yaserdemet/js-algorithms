// Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. const input = 'Every developer likes to mix kubernetes and javascript';
const input = "E3y d7r l3s to mix k8s and j8t";
// result 'E3y d7r l3s to mix k8s and j8t'

// ÇÖZÜM 1;

// const array = input.split(` `);

// const empty = [];

// for (let i = 0; i < array.length; i++) {
//   if (array[i].length > 3) {
//     y = array[i][0] + (array[i].length - 2) + array[i][array[i].length - 1];
//     empty.push(y);
//   } else {
//     empty.push(array[i]);
//   }
// }
// console.log(empty);

// ÇÖZÜM 2 =========================================================;




