let  current_users : string[] =['Adil', 'Ali', 'Aswad', 'Ahmed', 'Azher'];
let  new_users : string[] =['Bilal', 'Babar', "Aslam", 'Anwar'];

new_users.forEach(newUser => {
    if (current_users.some (current_users => current_users.toLowerCase() === newUser.toLowerCase()))
{
    console.log(`${newUser} will need to enter a new username.`);
} else{
    console.log(`${newUser} is available.`);
      }
});