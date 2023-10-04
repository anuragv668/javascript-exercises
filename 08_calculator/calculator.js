const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
  for (num of array) {
    sum += num;
  }
  return sum;
};

const multiply = function(args) {
  let product = 1;

  for (num of args) {
    product *= num;
  }

  return product;
};

const power = function(num1, num2) {
  return num1 ** num2;	
};

const factorial = function(num) {
	let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
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
