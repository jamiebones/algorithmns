
function bubbleSort(arr) {
  let swap;
  do {
    swap = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        //swap here
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swap = true;
        //[arr[i], arr[j + 1]] = [ arr[j + 1], arr[i]]
      }
    }
  } while (swap);

  return arr;
}

function bubbleSort2(arr){
  //bubble sort 
  var noSwaps;
  for (let i=arr.length; i > 0; i--){
    noSwaps = true;
    for (let j=0; j < i-1; j++){
      if ( arr[j] > arr[j + 1 ]){
        //perform the swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

console.time("bubbleOne")
let sortedArray = bubbleSort([1, 12, 3, 67, 4, 45, 6, 7,
                               3,67,34,12,9,2,12,34,5,
                               89,1, 1,-1, -3, 54,28,0,2]);
console.timeEnd("bubbleOne")
console.log(sortedArray);

console.time("bubbleTwo")
let bubbleTwo = bubbleSort2([1, 12, 3, 67, 4, 45, 6, 7,
                               3,67,34,12,9,2,12,34,5,
                               89,1, 1,-1, -3, 54,28,0,2]);
console.timeEnd("bubbleTwo")
console.log(bubbleTwo);

