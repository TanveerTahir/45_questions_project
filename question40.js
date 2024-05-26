function make_album(artist, albumTitle) {
    return { artist: artist, albumTitle: albumTitle };
}
var album1 = make_album('ED B Shireen', 'perfect');
var album2 = make_album('Adele', "Hello");
var album3 = make_album('justen bieber', 'Ghost');
console.log(album1);
console.log(album2);
console.log(album3);
// number of tracks
function new_album(artisit, albumtitle, tracks) {
    return { artisit: artisit, albumtitle: albumtitle, tracks: tracks };
}
var album4 = new_album('Micheal Jackson', 'Never Say Goodbye', 10);
var album5 = new_album('Imagine Dragon', "Bad Liar", 12);
var album6 = new_album('Celine Dion', 'Love Me Like You Do', 11);
console.log(album4);
console.log(album5);
console.log(album6);
