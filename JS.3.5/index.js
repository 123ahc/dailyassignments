// Problem 1
// Create a function called circleArea.
// This function will take one parameter which will be a radius.
// Return the area of the circle based on the radius.
// area is 3.14 * r^2

function circleArea (radius) {
    let area = 3.14 * radius ^ 2;
    return area;
}
console.log ("Area of circle = " + circleArea(2));

// Problem 2
// Create a function called circleCircumference.
// This function will take one parameter which will be a radius.
// Return the circumference of the circle based on the radius.
// circumference is 2 * 3.14 * radius

function circleCircumference (radius) {
    let circumference = 2 * 3.14 * radius;
    return circumference;
}
console.log ("Circumference of circle = " + circleCircumference(2));

// Problem 3
// Create a function called average.
// This function will take three parameters which will be numbers.
// Find the average of these numbers and return the value.

function average (n1, n2, n3) {
    let a = (n1 + n2 + n3) / 3;
    return a;
}
console.log ("Average = " + average(1,2,3));

// Problem 4
// Create a function called combineTwoStrings.
// This function will take two parameters.
// return both of the strings concatenated(combined)

function combineTwoStrings (s1, s2) {
    let s3 = s1 + s2; 
    return s3;
}
console.log ("Combined strings = " + combineTwoStrings ("Do", "ne!"));

// Problem 5
// Create a function called cubed.
// This function will take one parameter.
// Return the cubed number that is given from the parameter.

function cubed (p) {
    let c = Math.pow(p, 3);
    return c;
}
console.log("Cubed number = " + cubed(2));

// Problem 6
// Create a function called squared.
// This function will take one parameter.
// Return the squared number that is given from the parameter.

function squared (p1) {
    let s = Math.pow(p1, 2);
    return s;
}
console.log("Square = " + squared(2));


// Problem 7
// Create a function called sphereArea.
// This function will take one parameter which will be the radius.
// Find the surface area given the radius 4 * 3.14 * r^2
// Use your squared function to find the squared radius.

function sphereArea (radius) {
    let surfaceArea = 4 * 3.14 * Math.pow(radius, 2);
    return surfaceArea;
}
console.log("Squared radius = " + sphereArea(2));
