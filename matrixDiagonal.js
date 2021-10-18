function matrixDiagonal(arr) {
  let leftSum = 0;
  let rightSum = 0;
  let row = 0;
  let column = 0;
  let colR = arr.length - 1;
  let rowR = 0;
  for (let i = 0; i < arr.length; i++) {
    let a = parseInt(arr[row][column]);
    let r = parseInt(arr[colR][rowR])
    leftSum += a
    rightSum += r
    row++;
    column++;
    colR--
    rowR++
  }
 
  return leftSum > rightSum ? leftSum - rightSum : rightSum - leftSum


}

let answer = matrixDiagonal([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);

console.log(answer)
