var apiKey = require("./../.env").apiKey;
exports.printRepoList = function(url) {
	$.get(url).then(function(response){
		console.log(response);
    for (var i = 0; i < response.length; i++) {
    	$("#repoList").append(
        '<li><div class="row">' + 
          '<div class="col-xs-4">' + 
            '<p><a href="' + response[i].html_url + '">' + response[i].name + '......</a></p>' +
          '</div>' +
          '<div class="col-xs-8">' +
            '<p>' + response[i].description + '</p>' + 
          '</div>'+
        '</div></li>'
        );
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};