const reverseString = function(string) {
  let rev = '';
  for (let i = 0; i < string.length; i++) {
    rev += string[string.length - 1 - i];
  }
  return rev;
};

// Do not edit below this line
module.exports = reverseString;
