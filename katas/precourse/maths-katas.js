function modulo(a, b) {
  return a % b;
}

function squareRoot(num) {
  return Math.sqrt(num);
}

function raiseToPower(num1, num2) {
  return num1 ** num2;
}

function formatMoney(amount) {
  return `£${Number.parseFloat(amount).toFixed(2)}`;
}

function calculateCircleArea(radius) {
  return Number((Math.PI * radius ** 2).toFixed(3));
}

function calculateFullTurns(noOfDegrees) {
  return Number((noOfDegrees / 360).toFixed(0));
}

module.exports = {
  modulo,
  squareRoot,
  raiseToPower,
  formatMoney,
  calculateCircleArea,
  calculateFullTurns,
};
