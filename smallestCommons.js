function smallestCommons(arr) {
  let commons = [];
  let low;
  let high;
  let answer;
  if (arr[0] < arr[1]) {
    low = arr[0];
    high = arr[1];
  } else {
    low = arr[1];
    high = arr[0];
  }
  for (let i = low; i <= high; i++) {
    commons.push(i);
  }
  
  high = low * high;
  
  for (let n = high; n < Infinity; n+= low) {
    if (commons.every(x => n % x == 0)) {
      answer = n;
      break;
    }
  }
  return answer;
}