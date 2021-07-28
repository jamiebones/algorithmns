function isAPalindrone(string) {
  if (string.length === 0 || string.length === 1) {
    return true;
  }

  if (string[0] === string[string.length - 1]) {
    return isAPalindrone(string.substring(1, string.length - 1));
  }

  return false;
}

console.log(isAPalindrone("racecar"));
