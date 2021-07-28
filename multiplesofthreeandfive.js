function multiplesOfThreeAndFive(number){
    //find the sum of the multiples of 3 and 5
    let sum = 0;
    for (let i=0; i < number; i++ ){
        if ( i % 3 === 0 ){
            sum += i;
        }

        if ( i % 5 === 0 ){
            sum += i;
        }

    }
    return sum;
}

console.log(multiplesOfThreeAndFive(10))