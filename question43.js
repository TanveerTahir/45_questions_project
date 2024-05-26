var magicians = ['David Blaine', 'Criss Angel', 'Shin Lim'];
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magicians) {
        greatMagicians.push("".concat(magicians, " the Great"));
    });
    return greatMagicians;
}
var greatMagicians = make_great(magicians.slice()); // creat a new
console.log("Orignal magicians:");
show_magicians(magicians); // shows orignal names
console.log("Great magicians:");
show_magicians(greatMagicians); //shows modified names
