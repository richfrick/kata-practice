function isOver40(object) {
  return object.age > 40 ? true : false;
}

function getUserAge(userObj) {
  return new Date().getFullYear() - userObj.yearOfBirth;
}

function getUserPetAge(userObj) {
  return userObj.pet.age;
}

module.exports = { isOver40, getUserAge, getUserPetAge };
