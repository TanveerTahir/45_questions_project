// //Stages of Life
//  Write an if-else chain that determines a person’s stage of life. 
//  Set a value for the variable age, and then:
let age: number = 26;

if (age < 2) {
    console.log("The person is Baby") // BABY
}else if (age < 4){
    console.log("The person is a Toddler") //TODDLER
} else if (age < 13){
    console.log("The person is a Kid") // KID
} else if (age < 20){
    console.log("The person is a Teenager") // TEENAGER
}else if (age < 65){
    console.log("The person is an Adult") // ADULT
} else {
    console.log("The person is elder") // ELDER
}