// Fibonacci Series (0,1,1,2,3,5,8,13....)

function fibonacciSeries() {
  const number = 12;
  let n1 = 0,
    n2 = 1,
    nextTerm,
    arr = [];
  arr.push(n1);
  arr.push(n2);
  for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    arr.push(nextTerm);
  }
  return arr;
}
console.log(fibonacciSeries());
