function appendSubmission(){
    let newInput = sInput.value;
    entries.push(newInput);
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

sForm.addEventListener("submit", function(event){
    event.preventDefault();
    appendSubmission();
    clearInput();
    updateLog();
    insertLastLetter();
});




// if (sForm.attachEvent) {
//     sForm.attachEvent("submit", appendSubmission);
// } else {
//     sForm.addEventListener("submit", appendSubmission);
// }