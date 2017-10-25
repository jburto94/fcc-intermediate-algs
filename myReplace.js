function myReplace(str, before, after) {
  if (before.charCodeAt(0) === before.toUpperCase().charCodeAt(0)) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  let newString = str.replace(before, after);
  return newString;
}