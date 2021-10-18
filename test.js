// const findXPlusOne = (arr) => {
//     //convert to object
//     let obj = {}
   
//     let count =0;
//     for (let i=0; i < arr.length; i++){
//        const currentElement = arr[i];
//        if ( obj[currentElement]){
//            obj[currentElement] = obj[currentElement] + 1
//        }else{
//            obj[currentElement] = 1
//        }
//     }
//     debugger
//     console.log(obj)
//   for (let key in obj ){
//       let g = parseInt(key) + 1
//       g = g.toString()
//       if (obj[g]){
//           //delete obj[g]
        
//         count +=  obj[key]
//       }
//   }
//   return count
// }


// const calPoint = (ops) => {
//     let sumArray = [];
//     let result = 0;
//     for ( let i=0; i < ops.length; i++){
//         debugger
//         let current = ops[i]
//         if ( current == "C"){
//             sumArray.pop()
//             continue;
//         }
//         if ( current == "D"){
//             let value = sumArray[sumArray.length - 1] * 2;
//             sumArray.push(parseInt(value))
//             continue
//         }
//         if ( current == "+"){
//             let value = sumArray[sumArray.length - 1] + sumArray[sumArray.length - 2];
//             sumArray.push(parseInt(value))
//             continue
//         }
//         else{
//             sumArray.push(parseInt(current))
//         }
//     }
//     console.log(sumArray)

//     result = sumArray.reduce((sum, x)=> {
//         return sum += x
//     }, 0)
//     return result;
// }

const maxPair = (A, K) => {
   let max = a[i]
  
 if (sum > 0 ){
     return sum
 }
 return -1
}

console.log(maxPair([34,23,1,24,75,33,54,8], 60))