function dropElements(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) == true) {
      newArr = arr.slice(i);
      break;
    }
  }
  return newArr;
}