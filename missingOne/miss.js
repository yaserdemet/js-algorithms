// ?  find missing one in array

const findMissingOne = (arr) =>{
    const miss = []
  
    for (let i in arr){
     const diff =  2
     if (arr[i] - arr[i-1] > diff){
          miss.push(arr[i-1] + diff)
      }
  }
  return miss
  }
  
  console.log(findMissingOne([1,3,5,7,11]));