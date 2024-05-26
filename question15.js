var guestlist = ["Qazzafi", "Nasir", "Shehbaz", "Bilawal"];
// print the name who can't join
var unableAttend = guestlist.splice(2, 2)[0];
console.log("".concat(unableAttend, " , is busy in other projects, can't join us to dinner."));
//push
guestlist.push("Tanveer");
// print message with new guest
guestlist.forEach(function (guests) {
    console.log("You are welcome to the dineer tonight ! ".concat(guests));
});
