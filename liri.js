// Require statement and variables
require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const keys = require("./keys.js"); 
const moment = require("moment");
moment().format();
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

// user input variables
const command = process.argv[2];
const search = process.argv.slice(3).join("");
console.log("LIRI command: " + liri_command);
console.log("LIRI search: " + liri_search);

// LIRI functions

// 1. concert-this
// Search the Bands in Town Artist Events API for an artist and render venue name, location, and date for each event
function concertThis() {
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
    const artistName = artist.lineup[0];
    const venueName = artist.venue.name;
    const venueCity = artist.venue.city;
    const venueState = artist.venue.region;
    const eventDate = artist.datetime;
    
    console.log(`Artist: ${artistName}`);
    console.log(`Venue: ${venueName}`);
    console.log(`Location: ${venueCity}, ${venueState}`);
    console.log(`Date: ${eventDate}`);
    // TODO: Use moment.js to format the date ("MM/DD/YYYY")
}

// 2. spotify-this-song
function spotifyThisSong() {
    if(!search) {
        search = "heimdalsgate like a promethean curse";
        console.log("Showing results for Heimdalsgate Like a Promethean Curse by of Montreal");
    }
    spotify.search({
        type: "track",
        query: search,
        limit: 5
    }, function(err, data) {
        if(err) {
            console.log(`Oops, we encountered an error: ${err}`);
        } else {
            
        }
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

    // TODO: chec Sportify API JSON structure
    // a. Artist(s)

    // b. The song's name

    // c. A preview link of the song from Spotify

    // d. The album that the song is from

}

// 3. movie-this
// This will show the following info in your terminal/bash window:
function movieThis() {
    const search = process.argv.slice(3).join(""); // TODO: variable name

    const URL = "" + search; // TODO: Add URL
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

// 4. do-what-it-says
function doWhatItSays() {
    fs.readFile("random.txt", (err) => {
        if (err) throw err;
    });
    // console.log(`Now playing ${song} by ${artist}`);
}

// Switch statement
switch (function) {
    case "":
        console.log();
        break;
    case "":
        console.log();
        break;
    case "":
        console.log();
        break;
    case "":
        console.log();
        break;
};

module.exports