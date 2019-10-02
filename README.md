# LIRI-App
LIRI (Language Interpretation and Recognition Interface) is a command line application that lets the user search 
for concerts (concert-this), songs (spotify-this-song), movies (movie-this) and a default option (do-this) which outputs a default
spotify song. The application uses node.js, and Spotify, OMDB,
and bands In Town APIs to search the user input. The application is a quick and easy way to look up song, movie, or concert information.
# Installation Instructions
1) dotenv: Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
command line: npm install dotenv
2) Request: Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
command line: npm install request
3) Moment: A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
command line: npm i moment
4) Fs: Built in node package
command line: npm i request
# LIRI App in action
1) "concert-this"
Takes in a band or artist user input and outputs that band or artist's next concert using the Bands in town API.
Code: ![alt text](https://github.com/jackb312/LIRI-App/blob/master/images/concert-this.code.png)
Command line: ![alt text](https://github.com/jackb312/LIRI-App/blob/master/images/concert-this.terminal.png)

2) "movie-this"
Takes in a movie user input and outputs that movie information and ratings using the OMDB API.
Code: ![alt text](https://github.com/jackb312/LIRI-App/blob/master/images/movie-this.code.png)
Command line: ![alt text](https://github.com/jackb312/LIRI-App/blob/master/images/movie-this.terminal.png)

3) "spotify-this-song"
Takes in a song user input and outputs that song information using the spotify API.
Code: ![alt text](https://github.com/jackb312/LIRI-App/blob/master/images/spotify-this-song.code.png)
Command line: ![alt text](https://github.com/jackb312/LIRI-App/blob/master/images/spotify-this-song.terminal.png)

4) "do-this"
Default option which takes in no user input and outputs a given song using the Spotify API.
Code: ![alt text](https://github.com/jackb312/LIRI-App/blob/master/images/do-this.code.png)
Command line: ![alt text](https://github.com/jackb312/LIRI-App/blob/master/images/do-this.terminal.png)