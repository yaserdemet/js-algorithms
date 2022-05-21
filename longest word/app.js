// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
    let word = str.split(" ")
    let longest = 0;
    for(let i = 0; i < word.length; i++){
      if(word[i].length > longest){
        longest = word[i].length
      }
    }
    return longest;
  }
  
 let x =  findLongestWordLength("The quick brown fox jumped over the lazy dog");
 console.log(x);