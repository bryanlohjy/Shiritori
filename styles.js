window.onload = function() {
	resizeWrapper();
	resizeInput();
}

window.onresize=function(){
	resizeWrapper();
	resizeInput();
}

function resizeWrapper(){
	wrapper.style.height = window.innerHeight + "px";
	wrapper.style.width = window.innerWidth + "px";
}

function resizeInput(){
	centerChildWithinParent(sInput,wrapper);
}

function centerChildWithinParent(childElement,parentElement){
	console.log(parentElement.clientHeight);
	let childHeight = childElement.clientHeight;
	let childWidth = childElement.clientWidth;
	let parentHeight = parentElement.clientHeight;
	let parentWidth = parentElement.clientWidth;

	childElement.style.marginTop = (parentHeight/2 - childHeight/2) + "px";
	childElement.style.marginLeft = (parentWidth/2 - childWidth/2) + "px";
	console.log(childWidth);

}