function getLength(string) {
  return string.length;
}

function putNamesTogether(firstName, surname) {
  return `${firstName} ${surname}`;
}

function capitaliseString(string) {
  if (typeof string === 'string') {
    return string[0].toUpperCase() + string.slice(1);
  }
}

module.exports = { getLength, putNamesTogether, capitaliseString };
