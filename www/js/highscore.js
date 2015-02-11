var storage = window.localStorage;
var highscores;

$(document).ready(function() {
	setupTable();
	$("#congrats").fadeIn("slow", function(){
		$("#score").fadeIn("slow", function(){
			$("#lets").fadeIn("slow", function(){
			});
		});
	});
});

function setupTable(){
		$("#congrats").html("Congratulations " + localStorage.highscore1Name +", your highscore is:");
		$("#score").html(localStorage.highscore1Score);

}
