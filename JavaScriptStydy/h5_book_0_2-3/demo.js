var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
	
	gradient.addColorStop(0,"blue");
	gradient.addColorStop(0.25,"white");
	gradient.addColorStop(0.5,"purple");
	gradient.addColorStop(0.75,"red");
	gradient.addColorStop(1,"yellow");
	
	context.fillStyle = gradient;
	context.fillRect(0,0,canvas.width,canvas.height);

var canvas = document.getElementById("canvas_0"),
	context = canvas.getContext("2d"),
	gradient = context.createRadialGradient(canvas.width/2, canvas.height,10,canvas.width/2,0, 100);
	
	gradient.addColorStop(0,"blue");
	gradient.addColorStop(0.25,"white");
	gradient.addColorStop(0.5,"purple");
	gradient.addColorStop(0.75,"red");
	gradient.addColorStop(1,"yellow");
	
	context.fillStyle = gradient;
	context.fillRect(0,0,canvas.width,canvas.height);