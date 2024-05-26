import { log } from "console"

// add some friend in array
let friendsName : string [] = ["Shafaat, Aslam, Rizwan, Qazzafi, Habib."]

// loop
// for each
// for loop

for (let i=0; i < friendsName.length; i++) {
    console.log(friendsName[i]);
}

// for each

friendsName.forEach(friends => {
    console.log(friendsName);

});

//for loop
for (let names of friendsName) {
    console.log(friendsName);
}