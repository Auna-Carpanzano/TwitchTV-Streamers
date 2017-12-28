var list = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb"];
var onlines = [];
var offlines = [];
var game;
var status;

//Get info from each user in list
function getInfo() {
  list.forEach(function(channel) {
    function makeURL(type, name) {
      return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
    };
    //Get logo, name, and display name from "users" URL
    $.getJSON(makeURL("users", channel), function(data) {

    }); //End getJSON
  }); //End list.forEach(function(channel))
}; //End getInfo function
