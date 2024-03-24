//creating a function that builds a Object of music album.
function make_album(artist: string, title: string, tracks?: number) {
    const album:{artist: string, title: string, tracks?:number} = {
        artist,
        title,
    }
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}

// Print each return value to show that Objects are storing the album information correctly.
console.log(make_album("atif aslam",":doori"));
console.log(make_album("rahat fateh ali khan","noori"));
// Make at least one new function call that includes the number of tracks on an album
console.log(make_album("shahzad roy","rahien",3));