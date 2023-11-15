const palindromes = function (arg) {
  // let lowered = arg.toLowerCase();
  // let punc = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
  // let spc = /\s+/g; 
  // let string = lowered.replace(punc, '').replace(spc, '');
  // ;
  //
  // let isPal;
  // for (let i = 0; i <= string.length / 2; i++ ) {
  //   for (let j = string.length - 1 - i; j >= string.length / 2; j--) {
  //     if (string[i] == string[j]) {
  //       isPal = true;
  //       break;
  //     } else {
  //       isPal = false;
  //       break;
  //     }
  //   }
  // }
  //
  //
  // return isPal;
  const filtered = arg.toLowerCase().replace(/[^a-z0-9]/g,'');
  return filtered.split('').reverse().join('') == filtered;
};

// Do not edit below this line
module.exports = palindromes;
