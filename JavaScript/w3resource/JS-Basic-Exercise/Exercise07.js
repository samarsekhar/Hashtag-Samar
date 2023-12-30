//           Exercise 06         //
// Find 1st January be a sunday between a range of years....

// Solution

// Log a separator to visually distinguish the output
console.log("----------------------------");

// Loop through the years from 2014 to 2050 (inclusive)
for (var year = 2014; year <= 2050; year++) {
  // Create a Date object for january 1st of sthe curremt year
  var d = new Date(year, 0, 1);

  // Check if january 1st is a sunday ( where sunday corresponds to day index 0)
  if (d.getDay() === 0) {
    // Log a message if january 1st is a sunday for the current year
    console.log("1st January is being a Sunday " + year);
  }
}

console.log("----------------------------------");
