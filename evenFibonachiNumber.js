let obj = {};
let sum = 0
function evenFibonachiSequence(num, memo = {}) {
  

  if (num === 1) {
    return 1;
  }
  if (num === 2) {
    return 1;
  }

  let result = evenFibonachiSequence(num - 1) + evenFibonachiSequence(num - 2);

  if ( result % 2 === 0) {
      sum  = sum + result
  }
  if ( sum <= 4000000 ){
      return sum;
  }
  return result;
}

console.log(evenFibonachiSequence(10));
