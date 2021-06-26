// const MergeSort = arr => {
//   //lets check if array lenth === 1
//   //we return the array
//   if (arr.length === 1) {
//     return arr;
//   }
//   const middle = Math.floor(arr.length / 2);
//   const left = arr.slice(0, middle);
//   const right = arr.slice(middle);
//   return Merge(MergeSort(left), MergeSort(right));
// };

// const Merge = (left, right) => {
//   let result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;
//   while (leftIndex < left.length && rightIndex < right.length) {
    
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }
//   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// };

function mergeSort(arr){
  if ( arr.length <= 1){
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  console.log("left: ", left , "right: ", right )
  return merge(left, right);
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

let array = [6, 4, 5, 1,7,9,23,45,12];

const sortArray = mergeSort(array);
console.log(sortArray);
