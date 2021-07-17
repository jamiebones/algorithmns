const gridTraveller = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
};

const gridTravellerMemo = (m, n, memo = {}) => {
  const key = `${m}:${n}`;
  if (memo[key] !== undefined) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] =
    gridTravellerMemo(m - 1, n, memo) + gridTravellerMemo(m, n - 1, memo);
  return memo[key];
};

const gridTravellerTabulation = ( m, n ) => {
  const tables = Array(m + 1).fill().map(()=> Array(n + 1).fill(0));
  tables[1][1] = 1;
  for (let i=0; i <= m; i++){
    for (let j=0; j <=n; j++ ){
      const current = tables[i][j];
      if ( j + 1 <= n ){
        tables[i][j + 1] += current;
      }
      if ( i + 1 <= m ){
        tables[i + 1][j] += current;
      }
    }
  }
  return tables[m][n]
}

console.log(gridTravellerTabulation(18, 18));
//console.log(gridTravellerMemo(18, 18));
// console.log("*******************");
// console.log(gridTraveller(2, 2));
//console.log(gridTraveller(3, 3));
