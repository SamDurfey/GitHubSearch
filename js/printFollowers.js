var apiKey = require("./../.env").apiKey;
exports.printFollowers = function(url) {
	$.get(url).then(function(response){
		console.log(response);
    for (var i = 0; i < response.length; i++) {
    	$("#followerList").append("<li><a href='" + response[i].html_url + "'>" + response[i].login + "</a></li>");
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};