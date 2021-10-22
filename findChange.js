function findChange(amount, coins, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount === 0) return [];
  if (amount < 0) return null;
  let smallest = null;
  let allCombo = [];
  for (let coin of coins) {
    let change = amount - coin;
    let result = findChange(change, coins, memo);

    memo[change] = result;
    if (result !== null) {
      let foundChange = [...result, coin];
      
      if (smallest === null || foundChange.length < smallest.length) {
        smallest = foundChange;
      }
    }
  }
 
  return smallest;
}

function findChange2(amount, coins, memo = {}) {
    //if (amount in memo) return memo[amount];
    if (amount === 0) return 1;
    if (amount < 0) return 0;
    let sum = 0
    for (let coin of coins) {
      let change = amount - coin;
      let result = findChange2(change, coins, memo);
      //console.log(result)
      sum += result
      
      
      
      //memo[change] = result;
     
    }
   
    return sum;
  }



const result = findChange2(10, [4,1]);
console.log(result);
