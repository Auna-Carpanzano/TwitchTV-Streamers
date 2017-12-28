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
          status = "ONLINE";
          game = data2.stream.game;
        }

        html = '<div class="box"><div><img src="' + logo + '" class="logoSize" alt="Logo"></div><div class="nameSize"><a href="' + "https://go.twitch.tv/" + name + '" target="_blank">' + displayName + '</a></div>' + '<a href="' + "https://go.twitch.tv/" + name + '" target="_blank"><div class="statusSize">' + status + '</div><div class="gameSize">' + game + '</div></a></div>';

        $("#display").prepend(html);

        //Add online users to "onlines" variable
        if (data2.stream){
          onlines.push(html);
        }

      }); //End second getJSON
    }); //End first getJSON
  }); //End list.forEach(function(channel))
}; //End getInfo function

$(document).ready(function(){
  getInfo();
});
