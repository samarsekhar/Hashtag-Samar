// Arrays in JavaScript //

const fruits = ["🍎", "🍌", "🍓", "🍋", "🍎", "🍒", "🍊", "🍋"];

// converts the array to a string
fruits.toString();
console.log("converts the array to a string");
console.log(fruits);

// adds element at the end of the array
fruits.push("🍒");
console.log("adds element at the end of array");
console.log(fruits);

// removes the last element of the array
fruits.pop();
console.log("removes the last element of the array");
console.log(fruits);

// checks if the array contains an element
fruits.includes("🍌");
console.log("check if the array contains an element");
console.log(fruits);

// returns the index of the element
fruits.indexOf("🍓");
console.log("returns the index of the element");
console.log(fruits);

// join the elements of the array with the given separator
fruits.join("+");
console.log("join the elements of the array with the given separator");
console.log(fruits);

// return a portion of the array
fruits.slice(1, 3);
console.log("return a portion of the array");
console.log(fruits);

// add elements to the array
fruits.splice(1, 0, "🍊");
console.log("add elements to the array");
console.log(fruits);
