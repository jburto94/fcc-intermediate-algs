function sumPrimes(num) {
  let total = 0;
  for (let i = 2; i <= num; i++) {
    for (let j = 2; j <= i; j++) {
      if (j === i) {
        total += i;
      }
      if (i % j === 0) {
        break;
      }
    }
  }
  return total;
}