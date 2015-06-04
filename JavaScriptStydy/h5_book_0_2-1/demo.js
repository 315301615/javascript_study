//初始化画布相关
var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d");
//配置常量
var iCanvasPadding = 10,
	sTitle = "click to erase";

/**
 * 画背景
 */
function drawBackground(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	//画底色
	context.setFillColor("#EEEEEE");
	context.fillRect(0,0,canvas.width, canvas.height);
	//画canvas边框
	context.strokeStyle = "burlywood";

	context.lineWidth = 10;
	context.strokeRect(0,0,canvas.width, canvas.height);
	//写文字
	context.setFillColor("#000000");
	context.font="24px helvetica";
	context.measureText(sTitle);
	context.fillText(sTitle, (canvas.width-iCanvasPadding*2)/2,20+iCanvasPadding);
}

function drawContent(){
    context.lineJoin = "round";
    context.lineWidth = 10;
    context.fillStyle="rgba(0,0,255,0.5)"
    context.strokeRect(canvas.width/4,canvas.height/4+iCanvasPadding, canvas.width/4, canvas.height/4);
    context.fillRect(canvas.width/2+iCanvasPadding,canvas.height/4+iCanvasPadding, canvas.width/4, canvas.height/4)
}
drawBackground();
drawContent();
canvas.addEventListener("click",function(e){
	drawBackground();
});

	
