"use strict";
function recursiveSumation(num) {
  if (num <= 1) {
    return 1;
  }

  return recursiveSumation(num - 1) + num;
}
