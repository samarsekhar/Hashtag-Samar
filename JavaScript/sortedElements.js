// To find the largest pair of the 2 elements using indexing with sorted elements

function largestPairSumoTwo(num) {
  return num[num.length - 1] + num[num.length - 2];
}
const result = largestPairSumoTwo([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result);
