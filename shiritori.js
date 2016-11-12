function loadInitialWord(){
	let randomInt = getRandomInt(0,nouns.length);
	let firstWord = nouns[randomInt];
	sInput.value=firstWord;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function appendSubmission(){
    let newInput = sInput.value;
    entries.push(newInput);
	if(entries.length>0){
		hasStarted=true;
	}
}
function clearInput(){
	sInput.value = ""; //clears input value
}
function updateLog(){
	let newLogElement = document.createElement("li"); //creeates list item
	let newLogText = document.createTextNode(entries[entries.length-1]);
	newLogElement.appendChild(newLogText);
	sLog.appendChild(newLogElement);
}
function insertLastLetter(){
	let previousWord = entries[entries.length-1];
	let previousEndLetter = previousWord.charAt(previousWord.length-1);
	sInput.value = previousEndLetter;
}
// -------------------------------------
loadInitialWord();
sForm.addEventListener("submit", function(event){ //handling form submits
    event.preventDefault();
    appendSubmission();
    clearInput();
    updateLog();
    logScrollTop();
    insertLastLetter();
});
sForm.addEventListener("keydown", function(event){ //preventing certain key interactions
	if(hasStarted==true && sInput.value.length==1){ //if the user has started + only one character in the input field
		if(event.keyCode==8){ //prevent backspace
			event.preventDefault();
		}else if(event.keyCode==37){ //prevent left arrow
			event.preventDefault();
		}
	}
	if(event.keyCode==32){//prevent space key
		event.preventDefault();
	}
	if(event.keyCode>=48 && event.keyCode<=57){ //prevent numbers
		event.preventDefault();
	}
	if(event.keyCode>=96 && event.keyCode<=107){ //prevent numpad (stopping at hyphen)
		event.preventDefault();
	}
	if(event.keyCode>=110 && event.keyCode<=111){ //prevent numpad (cont.)
		event.preventDefault();
	}
	if(event.keyCode>=186 && event.keyCode<=188){ //prevent punctuations
		event.preventDefault();
	}
	if(event.keyCode>=190 && event.keyCode<=192){ 
		event.preventDefault();
	}
	if(event.keyCode>=219 && event.keyCode<=221){ 
		event.preventDefault();
	}
});

