// Require statements and variables
require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys.js"); 
const spotify = new Spotify(keys.spotify);
const axios = require("axios");
const fs = require("fs");
const moment = require("moment");
moment().format();

// user input variables
const command = process.argv[2];
const search = process.argv.slice(3).join("+");
console.log(search);

// Switch statement
switch (command) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this":
        spotifyThisSong();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
    // default:
};

// 1. concert-this
function concertThis(artist) {
    axios
        .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
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

    const artistName = artist.lineup[0];
    const venueName = artist.venue.name;
    const venueCity = artist.venue.city;
    const venueState = artist.venue.region;
    const eventDate = artist.datetime;
    // TODO: Use moment.js to format the date ("MM/DD/YYYY")
    
    const concertData = [
        `\n\n....................\n\n`,
        `Artist: ${artistName}`
        `Venue: ${venueName}`
        `Location: ${venueCity}, ${venueState}`
        `Date: ${eventDate}`
    ];
    console.log(concertData);
}

// 2. spotify-this-song
function spotifyThisSong(search) {
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
            for(a = 0; a < limit.length; a++) {
                const results = data.tracks.items[a];
                const songData = [
                    `\n\n....................\n\n`,
                    `Song Name: ${results.name}`,
                    `Artist: ${results.artists[0].name}`,
                    `Album: ${results.album.name}`,
                    `Preview: ${results.preview_url}`
                ];
                console.log(songData);
            }
        }
    });
}

// 3. movie-this
function movieThis() {
    axios
        .get("http://www.omdbapi.com/?t=" + search + "&apikey=3bcc87a3")
        .then(function(response) {
        const result = response.data;
        const divider = "\n\n....................\n\n";
        console.log(result);
        const movieData = [
            `Title: ${result.Title}`,
            `Year Released: ${result.Year}`,
            `IMDB Rating: ${result.Ratings[0].Value}`,
            `Rotten Tomatoes Rating: ${result.Ratings[1].Value}`,
            `Country Produced: ${result.Country}`,
            `Language: ${result.Language}`,
            `Plot: ${result.Plot}`,
            `Actors: ${result.Actors}`,
            `\n\n....................\n\n`
    ];
    
    fs.appendFile("log.txt", result + divider, (err) => {
        if (err) throw err;
    });

    console.log(movieData);
})
}

// 4. do-what-it-says
function doWhatItSays() {
    fs.readFile("random.txt", (err) => {
        if (err) throw err;
    });
    // console.log(`Now playing ${song} by ${artist}`);
}

module.exports