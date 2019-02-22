// Require statement and variables

require("dotenv").config();

import keys from "./keys.js";

const spotify = new Spotify(keys.spotify);

// user input variables
const liri_command = process.argv[2];
const liri_search = process.argv[3];
console.log("LIRI command: " + liri_command);
console.log("LIRI search: " + liri_search);


// LIRI functions

// 1. concert-this
// Search the Bands in Town Artist Events API for an artist and render venue name, location, and date for each event
function liriConcertThis() {
    // Grab the axios package
    const axios = require("axios");
    
    // Run the axios.get function (this is like making an ajax call)
    axios
        .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function(response) {
            // If axios was successful, log body from site
            console.log(response.data);
        })
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error:", error.message);
            }
            console.log(error.config);
        });

    // Name of the venue

    // Venue location

    // Date of the Event (use moment to format this as "MM/DD/YYYY")
    // Use moment.js to format the date
}

// 2. spotify-this-song
// This will show the following info about the song in your terminal/bash window
function liriSpotifyThisSong() {
    // Artist(s)
    // The song's name
    // A preview link of the song from Spotify
    // The album that the song is from
}

// 3. movie-this
// This will show the following info in your terminal/bash window:
function liriMovieThis() {
    // Title of the movie.
    // Year the movie came out.
    // IMDB Rating of the movie.
    // Rotten Tomatoes Rating of the movie.
    // Country where the movie was produced.
    // Language of the movie.
    // Plot of the movie.
    // Actors in the movie.
}

// 4. do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt
// and then use it to call one of LIRI's commands.
function liriDoWhatItSays() {

}

// Switch statement


module.exports