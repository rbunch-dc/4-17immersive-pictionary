var canvas = document.getElementById('canvas');
console.dir(canvas);
// console.log(document);
var context = canvas.getContext('2d');

// Set up the base options for the pictionary board
var color = "#000";
var thickness = 10;
var colorPicker = document.getElementById('color-picker');
var thicknessPicker = document.getElementById('thickness');
// console.dir(colorPicker);
var mouseDown = false;
var mousePosition = {};
var lastMousePosition = null;

colorPicker.addEventListener('change', function(event){
	console.dir(event.target)
	color = colorPicker.value
	// color = event.target.value
	console.log(color);
});

thicknessPicker.addEventListener('change', function(event){
	thickness = thicknessPicker.value
});

canvas.addEventListener('mousedown',function(event){
	mouseDown = true;
});

canvas.addEventListener('mouseup',function(event){
	mouseDown = false;
	lastMousePosition = null;
});

canvas.addEventListener('mousemove',function(event){
	if(mouseDown){
		// console.log(event)
		// console.log("User has pressed the mouse down and is moving!!")

		// The user has either just shown up and we don't have a lastMousePosition
		// OR, the user let go of the mouse and we reset the lastMousePosition
		if(lastMousePosition == null){
			lastMousePosition = {
				x: event.pageX,
				y: event.pageY
			}
		}

		mousePosition.x = event.pageX;
		mousePosition.y = event.pageY;
		// console.log(mousePosition.x);

		context.strokeStyle = color;
		context.lineJoin = 'bevel';
		context.lineWidth = thickness;
		context.beginPath();
		context.moveTo(lastMousePosition.x, lastMousePosition.y);
		context.lineTo(mousePosition.x, mousePosition.y);
		context.stroke();
		context.closePath();

		lastMousePosition = {
			x: mousePosition.x,
			y: mousePosition.y
		}
	}
});

