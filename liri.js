require("dotenv").config();
import keys from "./keys.js";
var spotify = new Spotify(keys.spotify);

// Commands: 
//      concert-this
//      spotify-this-song
//      movie-this
//      do-what-it-says