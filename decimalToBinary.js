function convertDecimalToBinary(number) {
  let result = "";
  function recursiveDivision(number) {
    if (number == 0) {
      return result;
    } 
    let rem = Math.floor(number / 2);
    result = (number % 2) + result;
    return recursiveDivision(rem);
  }
  recursiveDivision(number);
  return result;
}

console.log(convertDecimalToBinary(233));
