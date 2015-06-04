var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	oRNoRepeat = document.getElementById("noRepeatRadio"),
	oRRepeat = document.getElementById("repeatRadio"),
	oRRepeatX = document.getElementById("repeatXRadio"),
	oRRepeatY = document.getElementById("repeatYRadio"),
	image = new Image();

function fillCanvasWithPattern(repeatString) {
	var pattern = context.createPattern(image, repeatString);
	context.clearRect(0,0,canvas.width,canvas.height);
	context.fillStyle = pattern;
	context.fillRect(0,0,canvas.width,canvas.height)
}
oRNoRepeat.onclick = function(e) {
	fillCanvasWithPattern("no-repeat");
}
oRRepeat.onclick = function(e) {
	fillCanvasWithPattern("repeat");
}
oRRepeatX.onclick = function(e) {
	fillCanvasWithPattern("repeat-x");
}
oRRepeatY.onclick = function(e) {
	fillCanvasWithPattern("repeat-y");
}
//initialization
image.src = "./20.jpg";
image.onload = function(){
	oRNoRepeat.click();
}
