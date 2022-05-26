// Purpose of the this coding challenge is to write a code that given numbers convert to Roman Numerals. The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

function convertToRoman(num){

    function convertToRoman(num) {
        let roman = {
          M : 1000,
          CM : 900,
          D : 500,
          CD : 400,
          C : 100,
          XC : 90,
          L : 50,
          XL : 40,
          X : 10,
          IX : 9,
          V : 5,
          IV : 4,
          I : 1
        }
        let str = ""
        for (let i in roman) {
          let newNum = Math.floor(num / roman[i])
          num -= newNum*roman[i]
          str += i.repeat(newNum)
        }
        console.log(str)
        return str
      }
      
      convertToRoman(3999);
      
}
