function MissingLetters(word) {
  let alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
  ];
  let firstLetter = word[0];
  let buildValue;
  let wordIndex;
  for (let i = 0; i < alphabets.length; i++) {
    const currentLetter = alphabets[i];
    if (currentLetter === firstLetter) {
      wordIndex = i;
      break;
    }
  }
  let missingWord = undefined;
  for ( let j=0; j < word.length; j++ ){
      debugger
      if ( word[j] !== alphabets[wordIndex]){
        missingWord = alphabets[wordIndex];
        wordIndex++
      }
      wordIndex++
  }
  return missingWord;

}

console.log(MissingLetters("abcdefk"));
