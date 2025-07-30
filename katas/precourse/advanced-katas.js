function flipBooleans(array) {
  const flippedArray = [];
  array.map((bool) => {
    if (bool === true) {
      flippedArray.push(false);
    } else if (bool === false) {
      flippedArray.push(true);
    }
  });
  return flippedArray;
}

module.exports = { flipBooleans };
