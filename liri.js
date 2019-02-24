// Require statement and variables

require("dotenv").config();
// import * as dotenv from "dotensv";
// dotenv.config()
import keys from "./keys.js";
import { readFile } from "fs";

const spotify = new Spotify(keys.spotify);

// user input variables
const liri_command = process.argv[2];
const liri_search = process.argv[3];
console.log("LIRI command: " + liri_command);
console.log("LIRI search: " + liri_search);


// LIRI functions

// 1. concert-this
// Search the Bands in Town Artist Events API for an artist and render venue name, location, and date for each event
function concertThis() {
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

    // TODO: Clean up code, especially console logs
    // a. Name of the venue
    const venueName = artist.venue.name;
    console.log(`Venue: ${venueName}`);

    // b. Venue location
    const venueCity = artist.venue.city;
    const venueState = artist.venue.region;
    console.log(`Location: ${venueCity}, ${venueState}`);

    // c. Date of the Event (use moment to format this as "MM/DD/YYYY")
    const eventDate = artist.datetime;
    console.log(`Date: ${date}`);
    // TODO: Use moment.js to format the date
}
concertThis();

// 2. spotify-this-song
// TODO: Unsure if axios is necessary - need to use keys.js for the API string!!
// This will show the following info about the song in your terminal/bash window
function spotifyThisSong() {
    const axios = require("axios");
    axios
        .get("")
        .then(function(response) {
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

    // a. Artist(s)

    // b. The song's name

    // c. A preview link of the song from Spotify

    // d. The album that the song is from

}
spotifyThisSong();

// 3. movie-this
// This will show the following info in your terminal/bash window:
function movieThis() {
    const URL = ; // TODO: Add URL
    axios.get(URL).then(function(response) {

        const movieData = response.data[].; // TODO: Look up API JSON structure
        
        // TODO: Fill in information
        const movieObject = [
            // Title of the movie
            `Title: ${}`,
            // Year the movie came out
            `Year Released: ${}`,
            // IMDB Rating of the movie
            `IMDB Rating: ${}`,
            // Rotten Tomatoes Rating of the movie
            `Rotten Tomatoes Rating: ${}`,
            // Country where the movie was produced
            `Country Produced: ${}`,
            // Language of the movie
            `Language: ${}`,
            // Plot of the movie
            `Plot: ${}`,
            // Actors in the movie
            `Actors: ${}`
    ];
    
    fs.appendFile("log.txt", movieData + divider, (err) => {
        if (err) throw err;
    });
    console.log(movieObject);
})
}
movieThis()

// 4. do-what-it-says
function doWhatItSays() {
    fs.readFile("random.txt", (err) => {
        if (err) throw err;
    });
    // console.log(`Now playing ${song} by ${artist}`);
}
doWhatItSays();

// Switch statement


module.exports