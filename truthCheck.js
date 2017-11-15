function truthCheck(collection, pre) {
  for (let o in collection) {
    if (!collection[o][pre]) {
      return false; 
    }
  }
  return true;
}