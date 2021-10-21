function countApplesAndOranges(s, t, a, b, apples, oranges){
    //add the tree distance to the fruit position
    let appleCount = 0;
    let orangeCount = 0;
    for (let i=0; i < apples.length; i++){
        const position = apples[i] + a;
        if ( position >= s && position <= t ){
            appleCount++;
        }
    }

    for (let i=0; i < oranges.length; i++){
        const position = oranges[i] + b;
        if ( position >= s && position <= t ){
            orangeCount++;
        }
    }
    console.log(appleCount)
    console.log(orangeCount)


    // 7 11
    // 5 15
    // 3 2
    // -2 2 1
    // 5 -6
}



const result = countApplesAndOranges(7,11,5,15, [-2,2,1], [5,-6]);
console.log(result);