function sumFibs(num) {
  let total = 1;
  let numOne = 1;
  let numTwo = 1;
  let sum;
  while (numTwo <= num) {
    if (numTwo % 2 !== 0) {
      total += numTwo;
    }
    sum = numOne + numTwo;
    numOne = numTwo;
    numTwo = sum;
  }
  return total;
}