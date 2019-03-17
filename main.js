var dogNameTitle = document.querySelector("#title-id");
var dogNameInput = document.querySelector("#dog-name-input");
var dogNameButton = document.querySelector("#name-button");
var howButton = document.querySelector("#how-button");
var whatButton = document.querySelector("#what-button");
var factsButton = document.querySelector("#facts-button");
var paragraph1Id = document.querySelector("#p1-id");
var paragraph2Id = document.querySelector("#p2-id");
var paragraph3Id = document.querySelector("#p3-id");
var paragraph1Change = document.querySelector("#p1-id");
var paragraph2Change = document.querySelector("#p2-id");
var paragraph3Change = document.querySelector("#p3-id");
var dogPartyMp3 = document.querySelector("#dog-party-mp3");


dogNameButton.addEventListener("click", changeTitle);
howButton.addEventListener("click", howChangeDisplay);
whatButton.addEventListener("click", whatChangeDisplay);
factsButton.addEventListener("click", factsChangeDisplay);


function changeTitle(e) {
	dogNameTitle.innerText = `${dogNameInput.value}`;
	if (dogNameInput.value === "Dog Party") {
		playMp3();
	}
	e.preventDefault();
}

function howChangeDisplay(e) {
	if (paragraph1Change.style.display === "none"){
		paragraph1Change.style.display = "inline-block";
	} else {
		paragraph1Change.style.display = "none";
	}
	e.preventDefault();
}

function whatChangeDisplay(e) {
	if (paragraph2Change.style.display === "none"){
		paragraph2Change.style.display = "inline-block";
	} else {
		paragraph2Change.style.display = "none";
	}
	e.preventDefault();
}

function factsChangeDisplay(e) {
	if (paragraph3Change.style.display === "none"){
		paragraph3Change.style.display = "inline-block";
	} else {
		paragraph3Change.style.display = "none";
	}
	e.preventDefault();
}

function playMp3() { 
  dogPartyMp3.play(); 
}

