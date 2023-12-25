// Write a javascript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// Get the current date and time
const today = new Date();
// Get the day of the week (0-6, where 0 is sunday and 6 is saturday)
const day = today.getDay();
// Array of the names
const daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// Display the current day
console.log(`Today is : ${daylist[day]}.`);
// Get the current houe, minute, and second
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
// Determine if it's AM or PM
let prepand = hour >= 12 ? "AM" : "PM";
// Check for special casses when hour is 0 and it's PM
if (hour === 0 && prepand === "PM") {
  //check if minute and second are also 0
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "Noon";
  } else {
    hour = 12;
    prepand = "PM";
  }
}
// Check for special casses when hour is 0 and it's AM
if (hour === 0 && prepand === "AM") {
  //check if minute and second are also 0
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "Mindnight";
  } else {
    hour = 12;
    prepand = "AM";
  }
}
// Display the current time
console.log(`Current Time : ${hour} ${prepand} : ${minute} : ${second}`);
