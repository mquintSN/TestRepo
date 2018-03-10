var wins = 0;
var losses = 0;
var userTotal = 0;
var targetNumber = 0;
var pinkCrystal = 0;
var greenCrystal =0;
var yellowCrystal = 0;
var blueCrystal = 0;
// Declare global variables


$("button").mouseenter(function() {
    $(this).animate({opacity: .5}, 0);
});

$("button").mouseleave(function() {
    $(this).animate({opacity: 1.0}, 0);
});

function setValues (){
	userTotal = 0;
    targetNumber = Math.floor(Math.random() * 120 + 19);
    pinkCrystal= Math.floor(Math.random() * 12 + 1);
    greenCrystal= Math.floor(Math.random() * 12 + 1);
    blueCrystal= Math.floor(Math.random() * 12 + 1);
    yellowCrystal= Math.floor(Math.random() * 12 + 1);
    $("button").animate({opacity: '0.3'}, 100);
    $("button").animate({opacity: '1'}, 300);

    $("#goalNumber").text(targetNumber);
    $("#userTotal").text(userTotal);
    $("#losses").text(losses);
    $("#wins").text(wins);
    // $("button").effect("shake");
}

// Document.ready thing

setValues()

$("button").on("click", function() {
	if ($(this).hasClass("pinkGem")){
	    userTotal = userTotal + pinkCrystal;
	    $("#userTotal").text(userTotal);
   	} else if ( $(this).hasClass("greenGem") ){
		userTotal = userTotal + greenCrystal; 
    $("#userTotal").text(userTotal);
    } else if ( $(this).hasClass("yellowGem") ){
		userTotal = userTotal + yellowCrystal; 
     $("#userTotal").text(userTotal);
    } else if ( $(this).hasClass("blueGem") ){
		userTotal = userTotal + blueCrystal; 
        $("#userTotal").text(userTotal);
    }
    // } etc.
    if ( userTotal > targetNumber) {
        losses ++;
        setValues()
    } else if (userTotal === targetNumber) {
        wins ++;
        setValues()
    }
    
});



