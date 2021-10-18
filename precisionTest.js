function precisionTest(arr){
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let zeros = 0;
  for (let i=0; i < arr.length; i++ ){
      let currentItem = arr[i];
      if ( currentItem.toString().indexOf("-") !== -1 ){
          negativeNumbers += 1;
      } else if ( currentItem === 0 ){
          zeros += 1
      }
      else{
          positiveNumbers += 1
      }
  }
  let positiveDivide = (positiveNumbers/arr.length).toFixed(6)
  let negativeDivide = (negativeNumbers/arr.length).toFixed(6)
  let zeroDivide = (zeros/arr.length).toFixed(6)

  console.log(positiveDivide)
  console.log(negativeDivide)
  console.log(zeroDivide)
}


precisionTest([-4, 3, -9, 0, 4, 1])