var apiKey = require("./../.env").apiKey;
var getUserStuff = require("./../js/search.js").getUserStuff;
var printRepoList = require("./../js/search.js").printRepoList;

$(document).ready(function() {


	// As a user, when I search for a user name, I want to be able to see a list of their repos,
	// populated inside of a list...
	$("#userSearchForm").submit(function(event){
		event.preventDefault();
		$("#searchResults").empty();
		var userName = $("#searchUser").val();
		printRepoList(userName);
		// getUserStuff(userName);

		// populate populate list with results
		$("#resultsContainer").slideDown();
	});

	// debugger;

});

