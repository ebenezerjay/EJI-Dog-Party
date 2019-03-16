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




dogNameButton.addEventListener("click", changeTitle);
howButton.addEventListener("click", howChangeDisplay);
whatButton.addEventListener("click", whatChangeDisplay);
factsButton.addEventListener("click", factsChangeDisplay);


function changeTitle(e) {
	dogNameTitle.innerText = `${dogNameInput.value}`;
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





// Extension 1:
//   - Add functionality to each of the buttons in each column.  
//   When the user clicks on the button, it should hide the content
//   in that specific column (still having the picture and button be displayed). 
//    When the user clicks the button again, the text should display once more.  
//   - Bonus: add a nice animation to this to give a better transition 

// Extension 2:
//   - Add a tooltip to each of the elements in the navigation bar.  When a user 
//   hovers over one of them, a tool tip should appear giving more information as
//    to what that page is about.

// Extension 3:
//   - Add another input and textarea to the form that can update the text in each column.
//     The input should either be a dropdown or radio/checkboxes to specify which
//      column's text is being updated.

//   