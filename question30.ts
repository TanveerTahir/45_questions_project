let users : string [] = ['Raza', 'Aslam', 'Ali', 'Umar', 'Admin' ];

for (let user of users){
    if (user == "Admin"){
        console.log(" Hello Admin would you like to see status report")
    } else if (user == "Moderator"){
        console.log(`Hello  ${users}, thank you for logging in again.`)
    }
} 