function sumZero(arr) {
  //arr is a sorted array
  //we are looking for the sum of two numbers that adds up to zero
  //if we find the numbers we return them else we just return zero
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left--;
    }
  }
  return undefined;
}

console.log(sumZero([-4, -3, -1, 0, 3, 4, 5]));
