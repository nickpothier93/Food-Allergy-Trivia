var questions;
$.getJSON( "data.json", function(data) {
	  console.log(data);
	  questions = data;
	  console.log( "success" );
	})
	  .done(function() {
		console.log( "second success" );

var answer;
var score = 0;
var remaining = 120;
var arrayofNumbers = [];
var questionNumber = randomNumber();
var lives = 3;
var go = false;

$(document).ready(function() {
    setQuestion(questions, questionNumber);
    $("#question").fadeIn(function(){
	    $("#questionCont").fadeIn(function(){
    	    });
    });
    var myVar=setInterval(function(){time()},1000);
	$("#answerA").click(function(){
		answer = "a";
		questionCheck();
	});
	$("#answerB").click(function(){
		answer = "b";
		questionCheck();
	});
	$("#answerC").click(function(){
		answer = "c";
		questionCheck();
	});
	$("#answerD").click(function(){
		answer = "d";
		questionCheck();
	});
	$("#ok").click(function(){
		if(highscore() == true){
				if(score > localStorage.highscore1Score){
					localStorage.highscore1Score = score;
					localStorage.highscore1Name = $("input").val();
				}
			}
		window.location.href = "highscore.html";
	});
	$("#go").click(function(){
		questionNumber = randomNumber();
		setQuestion(questions, questionNumber);
		go = false;
		$("#right").css("display", "none");
		$("#question").fadeIn(function(){
			$("#questionCont").fadeIn(function(){
			});
		});	
	});
});

function randomNumber(){
		if(arrayofNumbers.length == 30){
			arrayofNumbers = {};
		}
		var done = false;	
		var same = false;
		while(done == false){
			same = false;
			var random = Math.floor((Math.random() * 30) + 0);
			for ( var i = 0; i < arrayofNumbers.length; i = i + 1 ) {
				if(arrayofNumbers[i] == random){
					same = true;
				}
			}
			if(same == false){
				done = true;
			}
		}
		arrayofNumbers.push(random);
		console.log(arrayofNumbers);
		return random;
}

function setQuestion(questions, number){
	console.log(questions.questions[number]);
	$("#questionSpan").html(questions.questions[number].name);
	if(questions.questions[number].amount == "2"){
		$("#answerAtext").html("A: " +  questions.questions[number].a);
		$("#answerBtext").html("B: " +  questions.questions[number].b);
		$("#answerA").css("display", "block");
		$("#answerB").css("display", "block");
		$("#answerC").css("display", "none");
		$("#answerD").css("display", "none");
		$("#question").css("height", "270px");

	}
	else{
		$("#answerAtext").html("A: " +  questions.questions[number].a);
		$("#answerBtext").html("B: " +  questions.questions[number].b);
		$("#answerCtext").html("C: " +  questions.questions[number].c);
		$("#answerDtext").html("D: " +  questions.questions[number].d);
		$("#answerA").css("display", "block");
		$("#answerB").css("display", "block");
		$("#answerC").css("display", "block");
		$("#answerD").css("display", "block");
		$("#question").css("height", "220px");
	}
}

function questionCheck(){
		if(answer){
			if(answer == questions.questions[questionNumber].right){
				score = score + 1;
				$("#score").html("Score : " + score);
				$("#answer" + answer.toUpperCase()).css("background-color", "green");
				
			}
			else{
				lives--;
				$("#lives").html("Lives : " + lives);
				$("#answer" + answer.toUpperCase()).css("background-color", "red");
				$("#answer" + questions.questions[questionNumber].right.toUpperCase()).css("background-color", "green");
				go = true;
			}
			if(lives==0){
				remaining = 0;
			}
			else{
				answer = null;
				setTimeout(function() {
					$("#questionCont").css("display", "none");
					$("#question").css("display", "none");
					$("#wrong").css("background-color", "");
					$("#answerA").css("background-color", "");
					$("#answerB").css("background-color", "");
					$("#answerC").css("background-color", "");
					$("#answerD").css("background-color", "");
					if(go == true){
						$("#right").css("display", "block");
						console.log(questions.questions[questionNumber].right);
						if(questions.questions[questionNumber].right == "a"){
							console.log(questions.questions[questionNumber].name);
							$("#rightQuestion").html('The right answer for "<i>' + questions.questions[questionNumber].name +'</i>" is:');
							$("#rightAnswer").html("<b>" + questions.questions[questionNumber].a + "</b>");
						}
						if(questions.questions[questionNumber].right == "b"){
							console.log(questions.questions[questionNumber].name);
							$("#rightQuestion").html('The right answer for "<i>' + questions.questions[questionNumber].name +'</i>" is:');
							$("#rightAnswer").html("<b>" + questions.questions[questionNumber].b + "</b>");
						}
						if(questions.questions[questionNumber].right == "c"){
							console.log(questions.questions[questionNumber].name);
							$("#rightQuestion").html('The right answer for "<i>' + questions.questions[questionNumber].name +'</i>" is:');
							$("#rightAnswer").html("<b>" + questions.questions[questionNumber].c + "</b>");
						}
						if(questions.questions[questionNumber].right == "d"){
							console.log(questions.questions[questionNumber].name);
							$("#rightQuestion").html('The right answer for "<i>' + questions.questions[questionNumber].name +'</i>" is:');
							$("#rightAnswer").html("<b>" + questions.questions[questionNumber].d + "</b>");
						}
					}
					else{
						questionNumber = randomNumber();
						setQuestion(questions, questionNumber);
						$("#question").fadeIn(function(){
					    	$("#questionCont").fadeIn(function(){
				    	    });
				    	});	
					}
				}, 500);
			}
		}
}

function time(){
	console.log(remaining)
	if(remaining == 0){
		$("#questionCont").css("display", "none");
		$("#question").css("text-align", "center");
		$("#question").html("GAME OVER");
		$("#question").css("height", "220px");
		$("#question").css("font-size", "26pt");
		if(highscore() == true){
			$("#highscoreCont").css("display", "block");
		}
		$("#ok").css("display", "block");
	}

}
function highscore(){
		var high = false;
		if(score > localStorage.highscore1Score){
			high = true;
		}
		return high;
}
});
