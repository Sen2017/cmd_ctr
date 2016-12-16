console.log('Sanity Check');

function color1() {
	
	console.log("cinnamon_is_blushing");
	var changeDiv = document.getElementById("cinnamon");
	changeDiv.style.backgroundColor = "pink";
	changeDiv.innerHTML = "huehuehue ^-^ STAHP";

}

function color2() {

	console.log("cinnamon_is_not_blushing");
	var changeDiv = document.getElementById("cinnamon");
	changeDiv.style.backgroundColor = "tan";
	changeDiv.innerHTML = "hi, i'm cinnamon. tickles make me blush";

}

function color3() {

	console.log("bobo_is_angry");
	var changeDiv = document.getElementById("bobo");
	changeDiv.style.backgroundColor = "red";
	changeDiv.innerHTML = "WHAT DID I SAY?!";


}

function color4() {

	console.log("bobo_is_not_angry")
	var changeDiv = document.getElementById("bobo");
	changeDiv.style.backgroundColor = "tan";
	changeDiv.innerHTML = "i'm bobo... i said don't touch me >.>"

}