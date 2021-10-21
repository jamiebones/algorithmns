function lonelyInteger(n){
    let obj = {};
    
    for (let num of n ){
        if ( !obj[num] ){
            obj[num] = 1
        }else{
            obj[num]++
        }
    }

    for ( let val in obj ){
        const result = obj[val];
        if ( result == 1) return val;
    }


    

}

const result = lonelyInteger([4 ,9 ,95 ,93 ,57 ,4 ,57 ,93 ,9])
console.log(result)