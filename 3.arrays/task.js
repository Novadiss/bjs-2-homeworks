function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    let filtered = users.filter(user => user.gender === gender);
    let result = filtered.map(user => user.age).reduce((acc, curr) => acc + curr, 0);
    if (result === 0){
      return 0;
    } else {
      return result / filtered.length;
    }
}