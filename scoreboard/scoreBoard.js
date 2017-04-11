/*	Javascript code for the scoreboard
	This code operates the six buttons that either increment, decrement, or reset the score
	There are nearly identical functions for the left and right button groups
			This is because there are two separate score values and team names that must be manipulated
	
	Douglas Gerichten
	gerichten.douglas@gmail.com
*/

/*	NOTE:
	It is very simple to change the +10 and -10 buttons to any value you desire
	In order to do this:
		appropriately change the number in the equation of the functions below
		edit the text value of the button in the HTML code to read the correct value
	Functions do not need to be renamed to, for example, score1PlusThirty, as they will function perfectly regardless of their name
*/


var score1 = 0;
var score2 = 0;
var nameBoxDefault = "Enter team name";

//***Left hand side***
//click button to increase, decrease, or reset score
function score1PlusTen() {
	score1 = score1 + 10;
	document.getElementById('score1Number').innerHTML = score1;
	}
function score1MinusTen() {
	score1 = score1 - 10;
	document.getElementById('score1Number').innerHTML = score1;
	}
function score1Reset() {
    if (confirm("Are you sure you would like to reset?") == true) {
        score1 = 0;
		document.getElementById('score1Number').innerHTML = score1;
		document.getElementById('name').value = nameBoxDefault;
    } else {
		window.alert("Reset aborted.");
	}
}
	
//***Right hand side***
//click button to increase, decrease, or reset score
function score2PlusTen() {
	score2 = score2 + 10;
	document.getElementById('score2Number').innerHTML = score2;
	}
function score2MinusTen() {
	score2 = score2 - 10;
	document.getElementById('score2Number').innerHTML = score2;
	}
function score2Reset() {
	if (confirm("Are you sure you would like to reset?") == true) {
        score2 = 0;
		document.getElementById('score2Number').innerHTML = score2;
		document.getElementById('name2').value = nameBoxDefault;
    } else {
		window.alert("Reset aborted.");
	}
}
