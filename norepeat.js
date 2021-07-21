function permAlone(str) {
  var inputString = Array.from(str);

  function permutator(arr, previousChar) {
    var permutations = 0;
    for (var i = 0; i < arr.length; i++) {
      var subPiece = Array.from(arr);
      var currentChar = arr[i].toString();
      subPiece.splice(i, 1);
      if (subPiece.length === 0 && currentChar !== previousChar) {
        permutations++;
      } else if (currentChar !== previousChar) {
        permutations += permutator(subPiece, currentChar);
      }
    }
    return permutations;
  }

  var magic = permutator(inputString, "");

  return magic;
}

const pairWise = (array, sum) => {
  const table = Array(sum + 1)
    .fill()
    .map(() => null);
  table[0] = [];
  for (let i = 0; i < sum; i++) {
    if (table[i] !== null) {
      for (let j = 0; j < array.length; j++) {
        const prevValue = table[i];
        const combination = table[i + array[j]];
        const obj = {
          index: j,
          value: array[j],
        };

        if (i + array[j] <= sum) {
          if (combination !== null) {
            //we already have something here
            const found = combination.find((ele) => {
              return ele.index === obj.index && ele.value === obj.value;
            });

            if (found) {
              table[i + array[j]] = [...combination];
            } else {
              table[i + array[j]] = [...combination, ...prevValue, obj];
            }
          } else {
            table[i + array[j]] = [...prevValue, obj];
          }
        }
      }
    }
  }

  return [...table[sum]];
};

const pairWise2 = (array, target) => {
  let pairIndices = [];

  for (let i = 0; i < array.length; i++) {
    debugger
    for (let j = i + 1; j < array.length; j++) {
      if (
        array[i] + array[j] == target &&
        !pairIndices.includes(i) &&
        !pairIndices.includes(j)
      ) {
        pairIndices.push(i, j);
        break;
      }
    }
  }

  let result = pairIndices.reduce((sum, current) => {
    return (sum = current + sum);
  }, 0);
  return result;
};

console.log(pairWise2([0, 0, 0, 0, 1, 1], 1));
