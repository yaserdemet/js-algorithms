// ? Samples:
// ‘camelCasing’ =>  ‘camel Casing’
// ‘camelCasingTest’ => ‘camel Casing Test’

function camel(str) {
    let arr = str.split("");
    let x = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != arr[i].toUpperCase()) {
        x.push(arr[i] )
        
      }
      else {
        x.push(" " + arr[i])
      }
    }
    return x.join("");
  }
  console.log(camel("camelCasingTest"));