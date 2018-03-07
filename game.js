var wins = 0;
var losses = 0;
var userTotal = 0;
// Declare global variables

function setValues (){
	userTotal = 0;
var targetNumber = Math.floor(Math.random() * 120 + 19);
var pinkCrystal= Math.floor(Math.random() * 12 + 1);
var greenCrystal= Math.floor(Math.random() * 12 + 1);
var blueCrystal= Math.floor(Math.random() * 12 + 1);
var yellowCrystal= Math.floor(Math.random() * 12 + 1);
}

// Document.ready thing

setValues()

$(".button").on("click", function() {
	if ($(this).hasClass("pinkGem")){
	userTotal = userTotal + pinkCrystal;
	$("#userTotal").text(userTotal);
   	} else if ( $(this).hasClass("greenGem") ){
		userTotal = userTotal + greenCrystal; 
    $("#userTotal").text(userTotal);}
	// } etc.
});



If ( userTotal > targetNumber) {
	Losses ++;
	$("#losses").text(losses);
	setValues()
} else if (userTotal === targetNumber) {
	Wins ++;
	$("#wins").text(wins);
	setValues()
}
