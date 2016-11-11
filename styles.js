

// 	elements = { 
// 	window: function(){
// 		return window;
// 	},
// 	wrapper: function(){
// 		var wrapper = document.getElementById('wrapper');
// 		return wrapper;
// 	}
// }

// function resizeToWindow(element){
// 	//element.styles.height = ;
// 	console.log(element);
// 	console.log(document.getElementById('wrapper'));
// }

let wrapper = document.getElementById('wrapper');
let input = document.getElementById('shiritori-input');

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
	centerChildWithinParent(input,wrapper);
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