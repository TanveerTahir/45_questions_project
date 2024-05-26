let guestlist : string [] = ["Qazzafi","Nasir", "Shehbaz", "Bilawal"];

// print the name who can't join
let unableAttend : string | undefined = guestlist.splice(2,2)[0];
console.log(`${unableAttend} , is busy in other projects, can't join us to dinner.`);

//push
guestlist.push("Tanveer");

// print message with new guest
guestlist.forEach(guests => {
    console.log(`You are welcome to the dineer tonight ! ${guests}`);
});