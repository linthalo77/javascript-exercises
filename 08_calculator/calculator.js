const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  if (array.length == 0)
    return 0;

	return array.reduce((total, current) => total + current);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const power = function(num, power) {
  let temp = 1;
	for(let i = power; i > 0; --i) {
    temp = temp * num;
  }
  return temp;
};

const factorial = function(num) {
  if(num === 0)
    return 1;

  let array = [];
	for (let i = 1; i <= num; ++i) {
    array.push(i);
  }
  return multiply(array);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
