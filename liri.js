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
async function concertThis(search) {
    const response = await axios.get("https://rest.bandsintown.com/" + search + "/weezer/events?app_id=codingbootcamp")
    const result = response.data;
    console.log(`Response: ${util.inspect(result)}`);

    const artistName = result.lineup;
    const venue = result.venue.name;
    const city = result.venue.city;
    const state = result.venue.region;
    const date = result.datetime;
    // TODO: Use moment.js to format the date ("MM/DD/YYYY")

    const concertData = [
        `Artist: ${artistName}`
        `Venue: ${venue}`
        `Location: ${city}, ${state}`
        `Date: ${date}`
    ];

    if(err) {
        console.log(`Error: ${err}`);
    } else {
        console.log(divider + concertData + divider);
    }
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
                    `Preview: ${results.preview_url}`,
                    `\n\n....................\n\n`
                ];
                console.log(songData);
            }
        }
    });
}

// TODO: Format printed movieData
// 3. movie-this
function movieThis() {
    axios
        .get("http://www.omdbapi.com/?t=" + search + "&apikey=3bcc87a3")
        .then(function(response) {
        const result = response.data;
        const movieData = [
            `Title: ${result.Title}`,
            `Year Released: ${result.Year}`,
            `IMDB Rating: ${result.Ratings[0].Value}`,
            `Rotten Tomatoes Rating: ${result.Ratings[1].Value}`,
            `Country Produced: ${result.Country}`,
            `Language: ${result.Language}`,
            `Plot: ${result.Plot}`,
            `Actors: ${result.Actors}`,
    ];
    
    fs.appendFile("log.txt", movieData, (err) => {
        if (err) throw err;
    });

    console.log(divider + movieData + divider);
})
}

// async function movieThis() {
//     const response = await axios.get("http://www.omdbapi.com/?t=" + search + "&apikey=3bcc87a3");
//     const result = response.data;
//     const movieData = [
//         `Title: ${result.Title}`,
//         `Year Released: ${result.Year}`,
//         `IMDB Rating: ${result.Ratings[0].Value}`,
//         `Rotten Tomatoes Rating: ${result.Ratings[1].Value}`,
//         `Country Produced: ${result.Country}`,
//         `Language: ${result.Language}`,
//         `Plot: ${result.Plot}`,
//         `Actors: ${result.Actors}`,
//     ];

//     fs.appendFile("log.txt", movieData, (err) => {
//         if (err) throw err;
//     });

//     console.log(divider + movieData + divider);
// }


// 4. do-what-it-says
function doWhatItSays() {
    const data = fs.readFileSync("random.txt").toString();
    if(data) {
        console.log(
            `\n\n....................\n\n`,
            `${data}`,
            `\n\n....................\n\n`
        );
    }
}

module.exports