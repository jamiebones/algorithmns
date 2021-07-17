const countConstruct = ( target, wordBank ) => {
    if ( target === '') return 1;
    let totalCount = 0;
    for (let word of wordBank ){
        if ( target.indexOf(word) === 0 ){
            const suffix = target.slice(word.length);
            let result = countConstruct(suffix, wordBank)
            totalCount += result
            
        }
    }
    return totalCount;
}

const countConstructMemo = ( target, wordBank, memo={} ) => {
    if ( target in memo ) return memo[target]
    if ( target === '') return 1;
    let totalCount = 0;
    for (let word of wordBank ){
        if ( target.indexOf(word) === 0 ){
            const suffix = target.slice(word.length);
            let result = countConstructMemo(suffix, wordBank, memo)
            totalCount += result
            memo[target] = result;
            
        }
    }
    memo[target] = totalCount;
    return totalCount;
}

console.log(countConstructMemo("purplehyyyyyyyyyyyyyyyyyy", ["purp", "p", "ur", "le", "purpl"]))