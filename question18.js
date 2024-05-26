var placeVisit = ["Sodia Arab", "Dubai", "Australia", "New Zealand", "Europe", "Mexico"];
// print in orignal order
console.log("original order:", placeVisit);
//Print your array in alphabetical order without modifying the actual list.
console.log(" Alphabatical Order:", placeVisit.slice().sort());
// show your array is still its original order
console.log("original order", placeVisit);
//Print your array in reverse alphabetical order without changing the order of the original list
console.log("reverse order", placeVisit.slice().sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log("Original Order:", placeVisit);
//Reverse the order of your list. Print the array to show that its order has changed
console.log("order has changed");
placeVisit.reverse();
console.log(placeVisit);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("original order:", placeVisit);
console.log(placeVisit);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Order has been changed:", placeVisit.slice().sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("reverse Alphabetical Order:", placeVisit.sort().reverse());
