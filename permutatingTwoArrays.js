function permutingTwoArray(k, A, B ){
   //sort array A in descending order
   let sortA = A.sort((a,b)=> {
       return a - b;
   })
    //ascending order
   let sortB = B.sort((a,b)=> {
       return b - a;
   });
  
  
   for (let i=0; i < sortA.length; i++){
       const currentA = sortA[i];
       const currentB = sortB[i];
       if ( currentA + currentB < k ){
           return "NO"
       }
   }
   return "YES";
}



const result = permutingTwoArray(10,  [2, 1, 3], [7, 8, 9]);
console.log(result);