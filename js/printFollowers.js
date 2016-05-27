var apiKey = require("./../.env").apiKey;
exports.printFollowers = function(userName) {
	$.get('https://api.github.com/users/' + userName + '/followers?access_token=' + apiKey).then(function(response){
		console.log(response);
    for (var i = 0; i < response.length; i++) {
    	$("#followerList").append("<li><a href='" + response[i].html_url + "'>" + response[i].login + "</a></li>");
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};