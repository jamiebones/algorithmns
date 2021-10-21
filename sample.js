function canConstruct(targetWord, wordBank){
    if ( targetWord === "") return true;

    for (let word of wordBank ){
        if ( targetWord.startsWith(word)){
            const newTarget = targetWord.substring(word.length);
            if (canConstruct(newTarget, wordBank) === true){
                return true;
            }
        }
    }
    return false;
}



const result = canConstruct("abcdef", ["ab", "abc", "cpd", "abcd", "def"]);
console.log(result);