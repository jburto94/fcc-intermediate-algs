function binaryAgent(str) {
  return String.fromCharCode(...str.split(' ').map(x => parseInt(x, 2)));
}