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

console.log(gridTravellerMemo(2, 2));
console.log(gridTravellerMemo(18, 18));
// console.log("*******************");
// console.log(gridTraveller(2, 2));
// console.log(gridTraveller(3, 3));
