const pairWise2 = (array, target) => {
    let pairIndices = [];
  
    for (let i = 0; i < array.length; i++) {
    
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