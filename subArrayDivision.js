function subArrayDivision(s, d, m) {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < m; i++) {
    sum += s[i];
  }

  if (sum === d) {
    count++;
  }

  for (let i = m; i < s.length; i++) {
    sum = sum - s[i - m] + s[i];
    if (sum === d) count++;
  }

  return count;
}

const result = subArrayDivision([2, 2, 1, 3, 2], 4, 2);
console.log(result);
