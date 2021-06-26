function countUniqueValues(arr) {
  //arr is a sorted array
  //we are to return the count of the arrays with unique numbers
  let count = 0;
  let i = 0;
  let j = 1;

  while (i < j && j <= arr.length) {
    if (arr[i] === arr[j]) {
      i++;
      j++;
    } else {
      count++;
      i++;
      j++;
    }
  }
  return count;
}

console.log(countUniqueValues([1, 2]));
