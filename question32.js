var current_users = ['Adil', 'Ali', 'Aswad', 'Ahmed', 'Azher'];
var new_users = ['Bilal', 'Babar', "Aslam", 'Anwar'];
new_users.forEach(function (newUser) {
    if (current_users.some(function (current_users) { return current_users.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
