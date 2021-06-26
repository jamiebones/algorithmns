const insertionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
      console.log(arr);
    }
    arr[j + 1] = temp;
    console.log(arr);
  }
  return arr;
};

let arr = [2, 1, 4];
let a = insertionSort(arr);
