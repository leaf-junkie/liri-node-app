// Require statement and variables

require("dotenv").config();

import keys from "./keys.js";

var spotify = new Spotify(keys.spotify);

// user input variables
const liri_command = process.argv[2];
const liri_search = process.argv[3];
console.log("LIRI command: " + liri_command);
console.log("LIRI search: " + liri_search);

// LIRI functions

// 1. concert-this
// This will search the Bands in Town Artist Events API 
// ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") 
// for an artist and render the following information about each event to the terminal:
//      Name of the venue
//      Venue location
//      Date of the Event (use moment to format this as "MM/DD/YYYY")

function liriConcertThis() {
    
}

// 2. spotify-this-song
// This will show the following info about the song in your terminal/bash window
//      Artist(s)
//      The song's name
//      A preview link of the song from Spotify
//      The album that the song is from
function liriSpotifyThisSong() {

}

// 3. movie-this
// This will show the following info in your terminal/bash window:
//      Title of the movie.
//      Year the movie came out.
//      IMDB Rating of the movie.
//      Rotten Tomatoes Rating of the movie.
//      Country where the movie was produced.
//      Language of the movie.
//      Plot of the movie.
//      Actors in the movie.
function liriMovieThis() {

}

// 4. do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt
// and then use it to call one of LIRI's commands.
function liriDoWhatItSays() {

}