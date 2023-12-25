//        Exercise - 3     //
// JavaScipt - Find the area of triangle where three of its sides are 5, 6, 7.

//  Solution

// 1st - Define the lengths of thr three sides of a triangle
var side1 = 5;
var side2 = 6;
var side3 = 7;

// 2nd - Calculate the semi-perimeter of the triangle
var s = (side1 + side2 + side3) / 2;

// 3rd -  Use Heron's fourmula to calculate the area of the triangle
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

// last - Log the calulated area to console.
console.log(area);

// output - 14.6969696969
