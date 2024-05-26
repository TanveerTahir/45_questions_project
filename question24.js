// Tests for equality and inequality with strings
console.log(" Strings Equality Test:");
console.log("Movie" === "Movie"); // True
console.log("Movie" !== "Movie"); // False
// Tests using the lower case function
console.log("Testing with lower case:");
console.log("Tanveer".toLowerCase() == "tanveer"); // True
// Numerical tests involving equality and inequality,
// greater than and less than, 
// greater than or equal to, 
// and less than or equal to
console.log("Numerical tests 10 > 5 and 2 < 1:");
console.log(10 > 5); // True
console.log(2 < 1); // False
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or operators':");
console.log(2 * 1 === 2 && 2 * 3 === 5); // False
console.log(5 + 5 === 10 || 5 + 5 === 15); // True
// Test whether an item is in a array
var week = ["Friday", "Saturday", "Sunday"];
console.log("Is 'Friday' in week?");
console.log(week.includes("Friday")); // True
// Test whether an item is not in a array
console.log("Is 'Monday' not in week?");
console.log(!week.includes("Monday")); // True
