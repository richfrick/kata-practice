function getEvenNumbers(array) {
  return array.filter((element) => element % 2 === 0);
}

module.exports = { getEvenNumbers };
