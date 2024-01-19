const convertToCelsius = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9), 1);
};

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32), 1);
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
