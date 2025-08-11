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

function getLastItems(array, num) {
  if (num > 0) {
    return array.slice(array.length - num);
  } else {
    return [];
  }
}

module.exports = { getEvenNumbers, getItemsLongerThan, getLastItems };
