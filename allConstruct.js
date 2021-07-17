const allConstruct = (target, wordBank) => {
  if (target === "") return [[]];

  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const waysToConstruct = allConstruct(suffix, wordBank);
      //loop over the return value and add the word
      const wordsArray = waysToConstruct.map((way) => [word, ...way]);
      result.push(...wordsArray);
    }
  }
  return result;
};

const allConstructMemo = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];
  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const waysToConstruct = allConstructMemo(suffix, wordBank, memo);
      //loop over the return value and add the word
      const wordsArray = waysToConstruct.map((way) => [word, ...way]);
      result.push(...wordsArray);
    }
  }
  memo[target] = result;
  return result;
};

console.log(
  allConstructMemo("aaaaaaaaaaa", [
    "aaaaaa",
    "aa",
    "aaaaaa",
    "aaaaaaa",
    "aaa",
    "aaaaa",
  ])
);
