//* Question: How would you reverse a string in JavaScript?

const reverseStr = (str) => {
        let emptyStr = "";
        for(let i = str.length - 1; i >= 0 ; i--){
            emptyStr += str[i]
        }
        return emptyStr;

}
console.log(reverseStr("hello"))