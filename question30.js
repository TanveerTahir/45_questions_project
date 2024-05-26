var users = ['Raza', 'Aslam', 'Ali', 'Umar', 'Admin'];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user == "Admin") {
        console.log(" Hello Admin would you like to see status report");
    }
    else if (user == "Moderator") {
        console.log("Hello  ".concat(users, ", thank you for logging in again."));
    }
}
