// Anagram
function checkStringAnagram() {
  var a = "Army";
  var b = "Mary";
  let str1 = a.toLowerCase().split("").sort().join("");
  let str2 = b.toLowerCase().split("").sort().join("");
  if (str1 === str2) {
    console.log("True");
  } else {
    console.log("False");
  }
}
