var apiKey = require("./../.env").apiKey;
var printUserStuff = require("./../js/search.js").printUserStuff;
var printRepoList = require("./../js/search.js").printRepoList;

$(document).ready(function() {


	// As a user, when I search for a user name, I want to be able to see a list of their repos,
	// populated inside of a list...
	$("#userSearchForm").submit(function(event){
		event.preventDefault();
		$("#repoList").empty();
		$("#followerList").empty();
		var userName = $("#searchUser").val();
		printUserStuff(userName);

		// populate list with results
		$("#resultsContainer").slideDown();
	});

	// debugger;

});

