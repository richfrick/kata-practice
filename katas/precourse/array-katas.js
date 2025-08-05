function getEvenNumbers(array) {
  return array.filter((element) => element % 2 === 0);
}

function getItemsLongerThan(strArray, length) {
  if (strArray == 0) {
    return [];
  } else {
    return strArray.filter((element) => element.length > length);
  }
}

module.exports = { getEvenNumbers, getItemsLongerThan };
