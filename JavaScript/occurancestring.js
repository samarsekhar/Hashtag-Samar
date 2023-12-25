// To find character occurance fro the string

function characterOccurance(str, letter) {
  let count = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    if (str.charAt(i) === letter) {
      count++;
    }
  }
  console.log(count);
  return count;
}
characterOccurance("hashtagsamar", "s");
