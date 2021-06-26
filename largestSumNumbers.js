function subArraySum(arr, num){
    if ( arr.length < num ) return null;
    let maxSum = 0;
    let tempSum = 0;
    for ( let i=0; i < num; i++ ){
        tempSum += arr[i];
    }
    for (i= num; i < arr.length; i++ ){
        tempSum = tempSum - arr[ i - num ] + arr[i];
        maxSum = Math.max(tempSum, maxSum )
    }
    return maxSum;
}



function largestSubSum(arr, num){
    if ( num > arr.length-1 ){
        return null;
    }
    let max = -Infinity;
    for (i=0; i < arr.length - num + 1; i++){
      
        let temp = 0;
        for (j=0; j < num; j++){
            temp += arr[i + j]
        }

        if ( temp > max ){
            max = temp;
        }
};
    return max;
}

console.log(subArraySum([2,3,3,4,5,7,8,4], 3))

