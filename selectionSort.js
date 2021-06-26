function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    let j = i + 1;
    while (j < arr.length) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
      j++;
    }
    if (minIndex !== i) {
      //perform swapping of the array
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

function merge(arr1, arr2) {
  let finalArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length ) {

    if (arr1[i] < arr2[j]) {
      finalArr.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      finalArr.push(arr2[j]);
      j++;
    } else if (arr1[i] === arr2[j]) {
      finalArr.push(arr1[i], arr2[j]);
      i++;
      j++;
    }
  }

  while ( i < arr1.length){
      finalArr.push(arr1[i]);
      i++
  }
  while ( j < arr2.length ){
      finalArr.push(arr2[j]);
      j++;
  }



  return finalArr;
}

let sortArr = merge([], [3, 4, 5, 5, 12, 23, 34]);
console.log(sortArr);
