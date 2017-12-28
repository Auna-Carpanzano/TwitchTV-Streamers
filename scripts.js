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
      var logo = data.logo;
      var displayName = data.display_name;
      var name = data.name;

      //Get status and game from "streams" URL
      $.getJSON(makeURL("streams", channel), function(data2) {
        if (data2.stream === null) {
          status = "OFFLINE";
          game = "";
        }
        if (data2.stream) {

        }
      }); //End second getJSON
    }); //End first getJSON
  }); //End list.forEach(function(channel))
}; //End getInfo function
