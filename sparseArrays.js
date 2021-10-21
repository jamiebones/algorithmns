function sparseArrays(strings, queries) {
  let stringObject = {};
  let answerArray = [];
  for (let string of strings) {
      if ( !stringObject[string]){
          stringObject[string] = 1
      }else{
          stringObject[string]++
      }
  }

  for ( let query of queries ){
      if ( stringObject[query]){
          answerArray.push(stringObject[query])
      }else{
          answerArray.push(0)
      }
  }

  return answerArray;

 
}

const result = sparseArrays(
  [
    "abcde",
    "sdaklfj",
    "asdjf",
    "na",
    "basdn",
    "sdaklfj",
    "asdjf",
    "na",
    "asdjf",
    "na",
    "basdn",
    "sdaklfj",
    "asdjf",
  ],
  ["abcde", "sdaklfj", "asdjf", "na", "basdn"]
);
console.log(result)