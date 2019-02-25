// Require statements and variables
const util = require('util');
require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys.js"); 
const spotify = new Spotify(keys.spotify);
const axios = require("axios");
const fs = require("fs");
const moment = require("moment");
moment().format();
const divider = "\n\n....................\n\n"

// user input variables
const command = process.argv[2];
let search = process.argv.slice(3).join("+");
console.log(search);

// Switch statement
switch (command) {
    case "concert-this":
        concert();
        break;
    case "spotify-this":
        song();
        break;
    case "movie-this":
        movie();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
};

// 1. concert-this
async function concert() {
    const URL = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";
    const response = await axios.get(URL);
    const result = response.data[0];
    const lineup = result.lineup;
    const venue = result.venue.name;
    const city = result.venue.city;
    const state = result.venue.region;
    const date = moment(result.datetime).format("MM/DD/YYYY");
    
    const concertData = [
        `Lineup: ${lineup.join(", ")}`,
        `Venue: ${venue}`,
        `Location: ${city}, ${state}`,
        `Date: ${date}`
    ];

    if(!search) {
        search = "Weezer";
        console.log("Showing results for Weezer");
    }
    console.log(divider + concertData.join("\n") + divider);
}

// 2. spotify-this-song
function song() {
    console.log('hello');
    spotify.search({
        type: "track",
        query: search,
        limit: 5
    }, function(err, data) {
        console.log(data)
        if(!search) {
            search = "heimdalsgate like a promethean curse";
            console.log("Showing results for Heimdalsgate Like a Promethean Curse by of Montreal");
        } else {
            for(i = 0; i < data.tracks.items.length; i++) {
                const results = data.tracks.items[i];
                const songData = [
                    `Song: ${results.name}`,
                    `Artist: ${results.artists[0].name}`,
                    `Album: ${results.album.name}`,
                    `Preview: ${results.preview_url}`
                ];
                console.log(divider + songData.join("\n") + divider);
            }
        }
    });
}

// 3. movie-this
async function movie() {
    if (!search) {
        search = "Donnie+Darko";
    }
    const response = await axios.get("http://www.omdbapi.com/?t=" + search + "&apikey=3bcc87a3")
    const result = response.data;
    const movieData = [
        `Title: ${result.Title}`,
        `Year: ${result.Year}`,
        `IMDB Rating: ${result.Ratings[0].Value}`,
        `Rotten Tomatoes: ${result.Ratings[1].Value}`,
        `Country: ${result.Country}`,
        `Language: ${result.Language}`,
        `Actors: ${result.Actors}`,
        `Plot: ${result.Plot}`,
    ];
    const displayString = divider + movieData.join("\n") + divider;
    fs.appendFile("log.txt", displayString, (err) => {
            console.log(displayString);
    });
}

// 4. do-what-it-says
function doWhatItSays() {
    const data = fs.readFileSync("random.txt").toString();
    if(data) {
        console.log(divider + data + divider);
    }
}

module.exports