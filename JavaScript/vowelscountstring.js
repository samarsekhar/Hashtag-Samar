// To find vowels and its count in a givrn string

function vowelCounts() {
  vowels = ["a", "e", "i", "o", "u"];
  var str = "samar";
  count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
      console.log(letter);
    }
  }
  console.log(count);
  return count;
}
vowelCounts();
