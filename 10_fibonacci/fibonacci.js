const fibonacci = function(num) {
  let run = +num;
  if (run < 0) {
    return 'OOPS';
  } 
  let n1 = 1;
  let n2 = 1;
  let n3;
  for (let i = 2; i < run; i++) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
  return n2;
};

// Do not edit below this line
module.exports = fibonacci;
