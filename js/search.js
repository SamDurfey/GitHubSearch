var apiKey = require("./../.env").apiKey;

exports.getRepoList = function(userName) {
	return $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
		console.log(response);
    return response;
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};