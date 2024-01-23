const add = function(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
    return;
  }
  return a + b;
};

const subtract = function(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
    return;
  }
  return a - b;
};

const sum = function(numArr) {
	if (!Array.isArray(numArr)) {
    return;
  }
  return numArr.reduce((sum, currNum) => sum + currNum, 0);
};

const multiply = function(numArr) {
	if (!Array.isArray(numArr)) {
    return;
  }
  return numArr.reduce((sum, currNum) => sum * currNum);
};

const power = function(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
    return;
  }
  return Math.pow(a,b);
};

const factorial = function(num) {
	if (typeof num !== 'number' || num < 0) {
    return -1;
  }
  if (num === 0) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
