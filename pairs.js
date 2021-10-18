function findPairs(arr) {
  let count = 0
  let obj = Object.create({});
  //create an object count of the remainder
  arr.forEach(element => {
      if (!obj.hasOwnProperty(element % 60 )){
          //save the remainder when you perform modular operation
          obj[element % 60] = 1
      }else{
          obj[element % 60]++;
      }
  });

  for (let keys in obj ){
      if (obj.hasOwnProperty(60 - keys )){
          if ( 60 - keys == keys){
              //we have a pair here
            count+= Math.floor(obj[keys] / 2)
            delete obj[keys]
          }else{
              count+=obj[keys] * obj[60-keys];
              delete obj[keys];
              delete obj[60-keys]
          }
      }
  }

  
  
  

  return count;
}

// function findPairNaive(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let sum = arr[i] + arr[j];
//       if (sum % 60 === 0 ) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

let result = findPairs([10, 20, 40, 30, 100]);

//let result = findPairNaive([10, 30, 30, 20, 100, 60,60]);
console.log(result);
