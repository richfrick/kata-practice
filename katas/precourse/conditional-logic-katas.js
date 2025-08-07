function areValuesEqual(value1, value2) {
  return value1 === value2;
}

function areNotEqualTo(value1, value2) {
  return value1 !== value2;
}

function isFromThe60s(year) {
  if (typeof year === 'number') {
    return year >= 1960 && year <= 1968;
  } else {
    return false;
  }
}

module.exports = { areValuesEqual, areNotEqualTo, isFromThe60s };
