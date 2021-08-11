const evenFib = () => {
  let count = 0;
  let total = 4000000;
  let sum = 0;
  while (sum <= total) {
    count++;
    const result = fibonachiSequence(count);
    if (result % 2 === 0 && result <= total) {
      sum += result;
    } else if (result > total) return sum;
  }

  return sum;
};

function fibonachiSequence(num, memo = {}) {
  if (num in memo) {
    return memo[num];
  }

  if (num === 1) {
    return 1;
  }
  if (num === 2) {
    return 1;
  }
  let result = 0;
  result = fibonachiSequence(num - 1, memo) + fibonachiSequence(num - 2, memo);
  memo[num] = result;

  return memo[num];
}

console.log(evenFib());
