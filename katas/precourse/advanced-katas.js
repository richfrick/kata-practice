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

function translateKey(studentObj, keyToChange, translation) {
  const responseObject = {};

  for (const key in studentObj) {
    if (key === keyToChange) {
      responseObject[translation] = studentObj[keyToChange];
    } else responseObject[key] = studentObj[key];
  }

  console.log(responseObject);

  return responseObject;
}

module.exports = { flipBooleans, translateKey };
