function translatePigLatin(str) {
  let vowel = /[aeiou]/gi;
  if (vowel.test(str[0]) === true) {
    return str += 'way';
  } else {
    let arr = str.split('');
    for (let i = 0; i < str.length; i++) {
      if (vowel.test(arr[0]) == false) {
        arr.push(arr[0]);
        arr.shift();
      } else {
        break;
      }
    }
    str = arr.join('');
    return str + 'ay';
  }
}