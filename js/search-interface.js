var apiKey = require("./../.env").apiKey;
var getRepoList = require("./../js/search.js").getRepoList;

$(document).ready(function() {
	// As a user, when I search for a user name, I want to be able to see a list of their repos,
	// populated inside of a list...
	$("#userSearchForm").submit(function(event){
		event.preventDefault();
		var userName = $("#searchUser").val();
		getRepoList(userName);

		// populate populate list with results

		$("#resultsContainer").slideDown(); // reveal results div.
	});

	var repolist = getRepoList("samdurfey");
	console.log("hello " + repolist);

});