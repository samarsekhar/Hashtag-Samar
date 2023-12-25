// String reverse without using inbult function
function Reverse() {
  var string = "India is my country";
  var result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result = result + string[i];
  }
  return result;
}
console.log(Reverse());

// String reverse with reversing of individual words
function withoutReverse() {
  var string = "India is my country";
  var result = string.split("").reverse().join("");
  return result;
}
console.log(withoutReverse());
