function linearSearch(arr, searchTerm){
    if ( arr.length === 0 ) return null;
    for (let i=0; i <arr.length; i++ ){
        const currentitem = arr[i];
        if ( searchTerm === currentitem )return i;
    }
    return -1;
}

console.log(linearSearch([23,45,67,889,34,12,89], 67))