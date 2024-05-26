let guestlist : string [] = ["Ali", "Javed","Usman", "Nasir", "Ubaid"];
console.log("Unfortunately we can't invite more people to tonight's dinner");

guestlist.unshift("Alice", "Bob");
// updated guestlist
console.log("updated guest list", guestlist);

// remove guset from guestlist
while (guestlist.length > 2) {
    let removedGuest : string | undefined =guestlist.pop();
    if (removedGuest !== undefined) {
        console.log(`sorry ${removedGuest}, we cannot invite you to tonight's dinner.`);

    }
}
// print a message to easch person who is still on the guest list "you are invited"
guestlist.forEach(guests => {
    console.log(`Dear ${guests}, you are invited.`);
})

// remove all guests from the guest list
guestlist.splice(0, guestlist.length);

// print update empty guest list
console.log("update empty guest list.", guestlist);