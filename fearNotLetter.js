function fearNotLetter(str) {
  let missingLetter = '';
  for (var i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i) !== str.charCodeAt(i+1) - 1) {
      missingLetter = String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  if (missingLetter == '') {
    return undefined;
  } else {
    return missingLetter;
  }
}