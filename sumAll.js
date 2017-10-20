function sumAll(arr) {
  let total = 0;
  if (arr[0] <= arr[1]) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      total += i;
    }
  } else {
    for (let j = arr[1]; j <= arr[0]; j++) {
      total += j;
    }
  }
  return total;
}