function _convertToBase(number) {
  let remainders = [];

  while (number > 0) {
    if (number === 1) {
      remainders.push(1);
      return remainders.reverse().join().replace(/,/g, "");
    }
    let rem = number % 2;
    number = Math.floor(number / 2);
    remainders.push(rem);
  }
  return remainders.reverse().join().replace(/,/g, "");
}

function flippingBits(n) {
  const baseTwo = _convertToBase(n);
  const to32Bit = _convertTo32BitAndFlipBit(baseTwo);
  const toBase10 = _convertToBase10(to32Bit);
  return toBase10;
}
function _convertTo32BitAndFlipBit(base2) {
  const toBase32 = base2.padStart(32, "0");
  let newString = "";
  for (let i = 0; i < toBase32.length; i++) {
    const char = toBase32[i];
    if (char == "0") {
      newString += "1";
    } else {
      newString += "0";
    }
  }

  return newString;
}

function _convertToBase10(numbers) {
  let runningSum = 0;
  let power = 0;
  for (let i = numbers.length - 1; i >= 0; i--) {
    const char = numbers[i];
    runningSum += parseInt(char) * 2 ** power;
    power++;
  }
  return runningSum;
}

const result = flippingBits(9);

console.log(result);
