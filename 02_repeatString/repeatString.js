const repeatString = function(string, num) {
  if (num < 0) {
    return 'ERROR';
  }
  let muliplied = '';
  for (let i = 0; i < num; i++) {
    muliplied += string;
  }
  return muliplied;
};

// Do not edit below this line
module.exports = repeatString;
