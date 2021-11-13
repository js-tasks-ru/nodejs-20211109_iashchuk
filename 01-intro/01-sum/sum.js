function sum(num1, num2) {
  const errors = [num1, num2].filter((num) => !Number.isFinite(num));

  if (errors.length) {
    throw new TypeError('Invalid arguments. Arguments must be numbers');
  }

  return num1 + num2;
}

module.exports = sum;
