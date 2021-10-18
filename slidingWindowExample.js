
const slidingWindowExample = (arr, num) => {
    if ( arr.length < num ) return null;
    let tempSum = 0;
    let maxSum = 0;
    for (let i=0; i < num; i++ ){
        tempSum += arr[i];
    };

    //sliding window creation
    for (let i=num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num ] + arr[i];
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum;
}



const result = slidingWindowExample([2,23,10,56,12,100], 3);
console.log(result);