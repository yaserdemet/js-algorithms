const vowels = (str) => {
    let x = str.match(/[aeiou]/gi);
    return x.length;
}
console.log(vowels("javascript"));