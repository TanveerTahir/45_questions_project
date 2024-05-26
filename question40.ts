function make_album(artist: string, albumTitle: string){
    return {artist, albumTitle}
}

let album1 = make_album('ED B Shireen', 'perfect');
let album2 = make_album('Adele', "Hello");
let album3 = make_album('justen bieber', 'Ghost');

console.log(album1);
console.log(album2);
console.log(album3);

// number of tracks
function new_album(artisit: string, albumtitle: string, tracks: number){
    return {artisit,albumtitle,tracks}
}

let album4 = new_album('Micheal Jackson', 'Never Say Goodbye', 10);
let album5 = new_album('Imagine Dragon', "Bad Liar", 12);
let album6 = new_album('Celine Dion', 'Love Me Like You Do', 11);

console.log(album4);
console.log(album5);
console.log(album6);