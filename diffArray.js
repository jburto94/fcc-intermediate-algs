function diffArray(arr1, arr2) {
  let newArr = arr1.filter(function(a) {
    return arr2.indexOf(a) < 0;
  });
  let newArr2 = arr2.filter(function(b) {
    return arr1.indexOf(b) < 0;
  });
  return newArr.concat(newArr2);
}