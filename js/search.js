var apiKey = require("./../.env").apiKey;
var printFollowers = require("./../js/printFollowers.js").printFollowers;
var printRepoList = require("./../js/printRepoList.js").printRepoList;


exports.printUserStuff = function(userName) {
	$.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
		console.log(response);

		$("#user").text(response.login);
		$("#userName").text(response.name);
		$("#avatar").attr('src', response.avatar_url);
		printRepoList(response.repos_url);
		printFollowers(response.followers_url);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};