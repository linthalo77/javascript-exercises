const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5/9);    // Formula for conversion
  celsius = Math.round(celsius * 10) / 10     // ROund to 1 decimal
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius * (9/5) + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
