function compareArrays(arr1, arr2) {
  const arrOfArrs = [];
  arrOfArrs.push(arr1, arr2);
  if (arrOfArrs.every(item => JSON.stringify(item) === JSON.stringify(arr1))) {
    return true;
  } else {
      return false;  
  }
}
 

function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(person => person.gender === gender)
    .map(person => person.age)
    .reduce((acc, item, index, arr) => {
        acc += item;
        if (index === arr.length - 1) {
            return acc / arr.length;
        }
        return acc;
    }, 0)
  return result;  
}