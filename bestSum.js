const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestLength = null;
  //loop through every number and apply recursion to it
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = bestSum(remainder, numbers);

    if (remainderResult !== null) {
      let combination = [...remainderResult, num];

      if (
        shortestLength === null ||
        combination.length < shortestLength.length
      ) {
        shortestLength = combination;
      }
    }
  }

  return shortestLength;
};

const bestSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let shortestLength = null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = bestSumMemo(remainder, numbers, memo);

    if (remainderResult !== null) {
      let combination = [...remainderResult, num];
    
      if (
        shortestLength === null ||
        combination.length < shortestLength.length
      ) {
       
        shortestLength = combination;
      }
    }
  }
 memo[targetSum] = shortestLength;
  return shortestLength;
};

console.log(bestSumMemo(11, [1,2,3]));
