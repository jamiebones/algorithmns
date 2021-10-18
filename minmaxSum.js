function minMaxSum(n){
    //sum the numbers together
    let sum = 0;
    let min = Infinity;
    let max = 0;
    for (let i=0; i< n.length; i++){
        sum += n[i]
    }

    for ( let i=0; i < n.length; i++){
        let result = sum - n[i];
        min = Math.min(result, min);
        max = Math.max(result, max)
    }
    console.log(min, max)
}


const result = minMaxSum([1,3,5,7,9]);
