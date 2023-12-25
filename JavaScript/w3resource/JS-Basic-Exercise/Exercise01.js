//    JavaScript Exercise - 1    //
// Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday
// Current time is : 10PM : 30 : 38

// Solution

// 1st - Get the current date and time.
var today = new Date();

// 2nd - Get the day of week (0-6, whare 0 is Sunday & 6 is Saturday).
var day = today.getDay();

// 3rd - Array of day names.
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// 4th - Display the current day.
console.log("Today is : " + daylist[day] + ".");

// 5th - Get the current hour, minute, and second.
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

// 6th - Determine if it's AM or PM.
var prepand = hour >= 12 ? "PM" : "AM";

// 7th - Convert 24-hour format to 12-hour format.
hour = hour >= 12 ? hour - 12 : hour;

// 8th - Check for special cases when hour is 0 PM
if (hour === 0 && prepand === "PM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "Noon";
  } else {
    hour = 12;
    prepand = "PM";
  }
}

// 9th - Check for special cases when hour is 0 AM
if (hour === 0 && prepand === "AM") {
  if (minute === 0 && prepand === 0) {
    hour = 12;
    prepand = "Midnight";
  } else {
    hour = 12;
    prepand = "AM";
  }
}
// last - Display the current time.
console.log(
  "Current Time : " + hour + prepand + " : " + minute + " . " + second
);
