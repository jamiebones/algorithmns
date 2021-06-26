function findNextWholeNumber( array ){
    if ( array.length === 0 ) return null;
    let arr = sortArray(array);
    let j = 0;
    while ( j <= arr.length-1 ){
        
        let current = j;
        let next = j + 1;
        if ( j === arr.length -1 ){
            //we have reached the end here
           if ( arr[current] - arr[current - 1] > 1 ){
               //next number will be arr[current -1 ] + 1;
               
               return arr[current -1] + 1 > 0? arr[current -1] + 1 : 1;
           }else{
               return arr[current] + 1 >0 ? arr[current] + 1 : 1;
           }
        }
        if ( arr[next] - arr[current] > 1 ){
            return arr[current] + 1 > 0 ? arr[current] + 1 : 1;
        }
        j++
    }
}

function sortArray(arr){
    return arr.sort((a,b)=> {
        return a -b;
    })
}

console.log(findNextWholeNumber([1, 3, 6, 4, 1, 2]))