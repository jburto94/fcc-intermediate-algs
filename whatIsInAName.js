function whatIsInAName(collection, source) {
  let keys = Object.keys(source);
  let matching = collection.filter(function(obj) {
    for (let i = 0; i < keys.length; i++) {
      if (!obj.hasOwnProperty(keys[i]) || obj[keys[i]]!== source[keys[i]]) {
        return false;
      }
    }
    return true;
  });
  return matching;
}