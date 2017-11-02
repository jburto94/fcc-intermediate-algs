function pairElement(str) {
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if(arr[0] === 'G') {
      arr.push(['G', 'C']);
      arr.shift();
    } else if (arr[0] === 'C') {
      arr.push(['C' ,'G']);
      arr.shift();
    } else if (arr[0] === 'A') {
      arr.push(['A' ,'T']);
      arr.shift();
    } else if (arr[0] === 'T') {
      arr.push(['T' ,'A']);
      arr.shift();
    }
  }
  return arr;
}