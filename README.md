##LIRI
####Language Interpretation and Recognition Interface 

**LIRI** is a command line node app that takes in parameters (a command and something to search) and returns with data that is displayed in the terminal.

###Commands
The user can enter the following commands:

`<concert-this>`
This will cause the app to search the Bands in Town API for relevant concerts.

`<spotify-this-song>`
This will cause the app to search the Spotify API for relevant song titles.

`<movie-this>`
This will cause the app to search the OMDB API for relevant movie titles.

`<do-what-it-says>`
This will cause th app to read a command and search term located in the random.txt file. Like the other commands, it will then display the results in the terminal.

If you want to clone this app to run yourself, you will need to create a .env file to hold your API keys. This file will be used by the dotenv package to set environment variables to the global process.env object in node. Enter the following code into your .env file:

# Spotify API Keys
SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

