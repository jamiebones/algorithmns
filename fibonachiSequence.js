const fibonachi = (num) => {
  if (num <= 2) {
    return 1;
  } else {
    return fibonachi(num - 1) + fibonachi(num - 2);
  }
};

const fibMemo = (num, memoArray = []) => {
  if (memoArray[num] != null) {
    return memoArray[num];
  }
  let result;
  if (num <= 2) {
    return 1;
  } else {
    result = fibMemo(num - 1, memoArray) + fibMemo(num - 2, memoArray);
    memoArray[num] = result;
  }

  return result;
};
//using tabulation
const fibBottomUp = (n) => {
  if (n <= 2) return 1;
  let arr = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

let num = 100;

// console.time("fibMemoi");
// console.log(fibMemo(num));
// console.timeEnd("fibMemoi");

// console.time("fibnormal");
// console.log(fibonachi(num));
// console.timeEnd("fibnormal");

console.time("fibB");
console.log(fibBottomUp(num));
console.timeEnd("fibB");
