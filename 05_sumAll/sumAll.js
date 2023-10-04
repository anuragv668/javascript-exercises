const sumAll = function(num1, num2) {
  if (typeof num1 != 'number' || typeof num2 != 'number' || num1 < 0 || num2 < 0) {
    return 'ERROR';
  }
  let first = num1;
  let second = num2;
  if (first > second) {
    let temp = first;
    first = second;
    second = temp;
  }
  let sum = 0;
  for (let i = first; i <= second; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
