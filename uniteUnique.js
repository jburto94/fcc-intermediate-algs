function uniteUnique(arr) {
  let newArray = [].concat(...arguments);
  for (let i = 0; i < newArray.length; i++) {
    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[i] === newArray[j]) {
        newArray.splice(j, 1);
        j--;
      }
    }
  }
  return newArray;
}