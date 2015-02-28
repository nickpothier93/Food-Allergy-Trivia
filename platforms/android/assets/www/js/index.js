
$( document ).ready(function() {
	$("#index").fadeIn("slow");
	if(!localStorage.highscore){
		var highscoreDefault = [];
		localStorage.highscore1Name = "[Insert your name]";
		localStorage.highscore1Score = 0;
		localStorage.highscore = true;
	}
	$("#inNext").click(function(){
    	window.location.href = "game.html";
	});
});
