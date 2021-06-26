function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    console.log("pivot ind", pivotIndex);
    //call quicksort again on the left side of the found index
    quickSort(arr, left, pivotIndex - 1);
    //call quicksort on the right hand side of the found index
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapInd = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapInd++;
      [arr[swapInd], arr[i]] = [arr[i], arr[swapInd]];
    }
  }

  [arr[swapInd], arr[start]] = [arr[start], arr[swapInd]];
  //return arr
  return swapInd;
}

let sortArray = quickSort([23,2, 9, 1,1,34,-56,22,9,21,87,12,23,12,23]);
console.log(sortArray);
