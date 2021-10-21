let answerArray = []
// const howSum = (targetSum, numbers) => {
//   debugger;
//   //base case
  
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;
//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     const remainderResult = howSum(remainder, numbers);
//     if (remainderResult !== null) {
//       console.log([...remainderResult, num]);
//       return [...remainderResult, num]
      
//     }
//   }
//   return null;
// };

const howSumMemo = (targetSum, numbers, memo = {}) => {
  //base case
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSumMemo(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};


const howSum = (target, numbers ) => {
  //base case
  if ( target === 0 ) return [];
  if ( target < 0 ) return null;
  
  let combinationResult = null;

  for ( let num of numbers ){
    const remainder = target - num;
    const remainderResult = howSum(remainder, numbers);
    if ( remainderResult !== null ){
    
      const combination = [...remainderResult, num];
      if ( combinationResult === null || combination.length === combinationResult.length){
        combinationResult = combination;
      }
      
    }
  }
 
  return combinationResult;
}

console.log(howSum(5, [4,1,2]));
