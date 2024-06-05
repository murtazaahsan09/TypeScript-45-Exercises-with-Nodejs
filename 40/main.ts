// Define the make_album function
function make_album(artist_nanme: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_nanme,
        title: album_title,
    };

    if (tracks !== undefined){
        album.tracks = tracks;
    }
    
    return album;

}

// Calling three functions and creating 3 vriables with diffrent values

let album1 = make_album("Murtaza", "Album tittle 1");

let album2 = make_album("Kerem", "Album title 2");

// Calling three functions and creting 3 vriables with diffrent values

let album3 = make_album("Kaan", "Album title 3", 10);

// Printing the vriables

console.log(album1);
console.log(album2);
console.log(album3);
