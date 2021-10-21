function diagonalDifference(arr) {
  let diagonalLeftSum = 0;
  let diagonalRightSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    let sum = arr[i][j];
    diagonalLeftSum += sum;
  }

  for (let i = 0; i < arr.length; i++) {
    let j = (arr.length - 1) - i;
    let sum = arr[i][j];
    diagonalRightSum += sum;
  }
  if ( diagonalLeftSum > diagonalRightSum ){
      return diagonalLeftSum- diagonalRightSum;
  }
  return diagonalRightSum - diagonalLeftSum;
}

const result = diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]);
console.log(result);
