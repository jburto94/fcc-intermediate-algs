function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  let newStr = str.toLowerCase();
  return newStr.replace(/[^a-z]/g, '-');
}