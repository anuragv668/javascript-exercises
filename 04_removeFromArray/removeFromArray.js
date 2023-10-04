const removeFromArray = function(array, ...remove) {
  for (let i = 0; i < remove.length; i++) {
  let index = array.indexOf(remove[i]);
  if (index == -1) {
    continue;
  }
  array.splice(index, 1);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
