function findElement(arr, func) {
  let answer;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      answer = arr[i];
      break;
    }
  }
  return answer;
}