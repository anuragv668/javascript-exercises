const convertToCelsius = function(feh) {
  let cel = (feh - 32) * 5 / 9;
  return Math.round(cel * 10) / 10;
};

const convertToFahrenheit = function(cel) {
  // return Math.round((cel * 5 / 9 + 32) * 10) / 10;
  let feh = (cel * 9/5) + 32; 
  return Math.round(feh * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
