//             Exercise 5           //
// write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

// Solution

// Define a function to check if a given year is a leap year
function leapyear(year) {
  // Return true if the year is divisile by 4 but
  // not divisible by 100 unless it's also divisible by 400
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

// Test the function with various years and log the results to the console
console.log(leapyear(1999)); // flase
console.log(leapyear(2018)); // false
console.log(leapyear(2006)); // false
console.log(leapyear(2023)); // false
console.log(leapyear(2016)); // true
console.log(leapyear(2000)); // true
