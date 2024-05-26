let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//for each
myNumbers.forEach(number => {
    let suffix = 'th';
    if (number === 1){
        suffix = 'st';
} else if (number === 2) {
    suffix = 'nd';
} else if (number === 3) {
    suffix = 'rd';
} 
   console.log(`${number}${suffix}`);

});

//for loop

for (let i = 0; i < myNumbers.length; i++) {
    let suffix = 'th';
  if (myNumbers[i] === 1){
        suffix = 'st';
    } else if (myNumbers[i] === 2) {
        suffix = 'nd';
    } else if (myNumbers[i] === 3) {
        suffix = 'rd';
    {
        console.log(`${myNumbers}${suffix}`);
    })
