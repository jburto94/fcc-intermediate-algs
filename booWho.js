function booWho(bool) {
  let isFalse = false;
  let isTrue = true;
  let check = bool === isFalse || bool === isTrue ? true : false;
  return check;
}