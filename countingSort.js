function countingSort(arr){
  //const max = Math.max(...arr);
  let arrayIndex = new Array(100).fill(0);
  for (let i=0; i < arr.length; i++){
    const current = arr[i];
    arrayIndex[current]++
  }
 
  return arrayIndex;
}



const result = countingSort([1,1,3,2,1])
console.log(result)