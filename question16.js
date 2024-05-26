var guestlist = ["Javed", "Usman", "Abdul Sattar"];
//unshift
guestlist.unshift("Ali Aden");
// splice()
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Ubaid");
//push();
guestlist.push("Nasir");
console.log(guestlist);
// foreach
guestlist.forEach(function (guests) {
    console.log("you are invted for dinner at Kashana e Tanveer ! ".concat(guests));
});
//map
