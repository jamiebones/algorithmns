function diagonalDifference(arr) {
  let diagonalLeftSum = 0;
  let diagonalRightSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    let k = arr.length - 1 - i;
    let sum = arr[i][j];
    diagonalLeftSum += sum;
    diagonalRightSum += arr[i][k];
  }

  if (diagonalLeftSum > diagonalRightSum) {
    return diagonalLeftSum - diagonalRightSum;
  }
  return diagonalRightSum - diagonalLeftSum;
}

const result = diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]);
console.log(result);
