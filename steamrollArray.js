function steamrollArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arr = arr.reduce( (a,b) => a.concat(b), [] );
      i--;
    }
  }
  return arr;
}