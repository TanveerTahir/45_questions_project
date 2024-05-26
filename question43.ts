let magicians : string [] = ['David Blaine', 'Criss Angel', 'Shin Lim'];

function make_great(magicians: string[]): string[]{
    let greatMagicians : string [] = [];
    magicians.forEach(magicians => {
       greatMagicians.push(`${magicians} the Great`);
    });
    return greatMagicians;
}
let greatMagicians = make_great(magicians.slice()); // creat a new
console.log("Orignal magicians:");
show_magicians(magicians); // shows orignal names
console.log("Great magicians:");
show_magicians(greatMagicians); //shows modified names