require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var Spotify = require("node-spotify-api");
var fs = require("fs");
var moment = require("moment");
var request = require("request");
var omdb = (keys.omdb);
var bandsintown = (keys.bandsintown);
var userInput = process.argv[2];
var userQuery = process.argv.slice(3).join(" ");
function userCommand(userInput, userQuery) {
    switch(userInput) {
        case "concert-this":
        concertThis();
        break
        case "spotify-this-song":
        spotifyThisSong();
        break;
        case "movie-this":
        movieThis();
        break;
        case "do-this":
        doThis();
        break;
        default:
        console.log("Invalid Instruction");
        break;
    }
};
userCommand(userInput, userQuery);
function concertThis(){
    console.log(`\n - - - - -\n\nsearching for...${userQuery}'s next show...`);
    request("https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp" + bandsintown, function(error, response, body){
        if(!error && response.statusCode === 200){
            var userBand = JSON.parse(body);
            if(userBand.length > 0){
                for(i = 0; i < 1; i++){
                    console.log(`\nResults...\n\nArtist: ${userBand[i].lineup[0]} \nVenue: ${userBand[i].venue.name}\nVenue Location: ${userBand[i].venue.latitude},${userBand[i].venue.longitude}\nVenue City: ${userBand[i].venue.city}, ${userBand[i].venue.country}`) 
                    let concertDate = moment(userBand[i].datetime).format("MM/DD/YYYY hh:00 A");
                    console.log(`Date and Time: ${concertDate}\n\n- - - - -`);
                };
            }else{
                console.log('Band or concert not found!');
            };
        };
    });
};
function spotifyThisSong(){
    console.log(`\n - - - - -\n\nsearching for..."${userQuery}"`);
    if(!userQuery){
        userQuery = "the sign ace of base"
    };
    spotify.search({
        type: "track",
        query: userQuery,
        limit: 1
    }, function(error, data){
        if(error){
            console.log("ERROR: " + error);
        }
        var spotifyArray = data.track.items;
        for(i = 0; i < spotifyArray.length; i++){
            console.log(`\nResults...\n\nArtist: ${data.tracks.items[i].album.artists[0].name} \nSong: ${data.tracks.items[i].name}\nAlbum: ${data.tracks.items[i].album.name}\nSpotify link: ${data.tracks.items[i].external_urls.spotify}\n\n - - - - -`)
        };
    });
}
function movieThis(){
    console.log(`\n - - - - -\n\nsearching for..."${userQuery}"`);
    if(!userQuery){
        userQuery = "mr nobody";
    };
    request("http://www.omdbapi.com/?t=" + userQuery + "&apikey=trilogy", function (error, response, body) {
        var userMovie = JSON.parse(body);
        var ratingsArray = userMovie.ratings;
        if(ratingsArray.length > 2){}
        if(!error && response.statusCode === 200){
            console.log(`\nResults...\n\nTitle: ${userMovie.Title}\nCast: ${userMovie.Actors}\nReleased: ${userMovie.Year}\nIMDb Rating: ${userMovie.imdbRating}\nRotten Tomatoes Rating: ${userMovie.Ratings[1].Value}\nCountry: ${userMovie.Country}\nLanguage: ${userMovie.Language}\nPlot: ${userMovie.Plot}\n\n- - - - -`) 
        }else{
            console.log("Movie Not Found. Error: " + error)
        };
    })
};
function doThis(){
    fs.readFile("random.txt", "utf8", function (error, data){
        if(error){
            console.log(error);
        }
        var dataArray = data.split(",");
        userInput = dataArray[0];
        userQuery = dataArray[1];
        userCommand(userInput, userQuery)
    });
}