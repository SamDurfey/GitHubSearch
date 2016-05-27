var apiKey = require("./../.env").apiKey;
exports.printRepoList = function(userName) {
	$.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
		console.log(response);
    for (var i = 0; i < response.length; i++) {
    	$("#repoList").append("<li><a href='" + response[i].html_url + "'>" + response[i].name + "</a></li>");
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};