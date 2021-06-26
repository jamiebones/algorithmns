function naiveStringSearch(longWord, shortWord ){
    let objCount = 0;
    for (let i=0; i < longWord.length; i++){
        for ( let j=0; j < shortWord.length; j++){
            if (shortWord[j] !== longWord[i + j]){
                break;
            }
            if ( j === shortWord.length-1 ){
                objCount++
            }
           
        }
       
    }


    return objCount;
}



naiveStringSearch("thisday day porororoday day is a day", "day")