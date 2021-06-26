
const factoriali = (num) => {
    if (num === 1) {
      return 1;
    } else {
      return factoriali(num - 1) * num;
    }
  };
  
  const factorialLoop = ( num ) => {
      let result = [num];
      for ( let i=0; i < num-1; i++ ){
          result.push(num - 1- i)
      }
      let ans = result.reduce((a, b )=> {
          return a * b;
      });
      return ans;
  }
  
  const raiseToPower = (base, power) => {
    if (power === 1) {
      return base;
    } else {
      return raiseToPower(base, power - 1) * base;
    }
  };
  
  const raiseToPower2 = (base, power) => {
    let result = base;
    for (let i = 0; i < power-1; i++) {
      result = result * base;
    }
    return result;
  };
  
  // console.time("fibrecursive")
  // const resultRecursive = factoriali(20)
  // console.timeEnd("fibrecursive")
  
  // console.log("======================")
  // console.time("fibloop")
  // const result = factorialLoop(20);
  // console.timeEnd("fibloop")
  // console.log("recursive result: ",resultRecursive)
  // console.log("loop result: ", result)
  
  
  console.time("powerrecursion");
  let ans = raiseToPower(2, 10);
  console.timeEnd("powerrecursion");
  console.log(ans);
  console.log("==================")
  console.time("powerloop")
  const ans2 = raiseToPower2(2, 10);
  console.timeEnd("powerloop")
  console.log(ans2);
  