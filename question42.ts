let magicians : string [] = ['David Blaine', 'Criss Angel', 'Shin Lim'];

function make_great(magicians:string[]){
    for (let i=0; i < magicians.length; i++)
        magicians[i] = magicians[i] + 'The Great'; 
        console.log(magicians);
}
make_great(magicians);