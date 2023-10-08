const findTheOldest = function(arr) {
  let ans;
  let age = 0;
  for (let i = 0;i < arr.length; i++) {
    let d = new Date();

    let c_age = d.getFullYear() - arr[i]['yearOfBirth'];

    if (arr[i]['yearOfDeath']) {
      c_age = arr[i]['yearOfDeath'] - arr[i]['yearOfBirth'];
    }
    if (c_age > age) {
      age = c_age;
      ans = arr[i];
    }

  }

  return ans;
};

// Do not edit below this line
module.exports = findTheOldest;
