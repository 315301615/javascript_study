var canvas = document.getElementById("canvas"),
	readout = document.getElementById("readout"),
	context = canvas.getContext("2d"),
	spritsheet = new Image();
	isMouseDown = false;
//function area start ----------------------------------------
/**
 * 窗体至canvas坐标转换器
 */
function windowToCanvas(oCanvas, locX, locY) {
		var oBBox = oCanvas.getBoundingClientRect();
		return {
			locX: locX - oBBox.left * (oCanvas.width / oBBox.width),
			locY: locY - oBBox.top * (oCanvas.width / oBBox.width)
		};
	}
	//画背景

function drawBackground() {
	var iVERTICAL_LINE_SPACING = 12,
		iCanvasHeight = canvas.height;
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.strokeStyle = "darkgray";
		context.lineWidth = 0.5;
		while(iCanvasHeight > iVERTICAL_LINE_SPACING*4){
			context.beginPath();
			context.moveTo(0,iCanvasHeight);
			context.lineTo(canvas.width,iCanvasHeight);
			context.stroke();
			iCanvasHeight -= iVERTICAL_LINE_SPACING; 
		}
	}
	//画精灵

function drawSpritSheet(locX, locY) {
		if(locX == undefined){
			context.drawImage(spritsheet, 0, 0);
		}else if(isMouseDown == true){
			context.drawImage(spritsheet, locX, locY);
		}else{
			context.drawImage(spritsheet, 0, 0);
		}
	
	}
	//画鼠标辅助线

function drawGuideLines(locX, locY) {
		//画X放方向的线
		context.strokeStyle = "rgba(0,0,230,0.8)";
		context.lineWidth = 0.5;
		drawVerticalLine(locX);
		drawHorizontalLine(locY);
	}
function drawVerticalLine(locX){
	context.beginPath();
	context.moveTo(locX, 0);
	context.lineTo(locX, canvas.height);
	context.stroke()
}
function drawHorizontalLine(locY){
	context.beginPath();
	context.moveTo(0, locY);
	context.lineTo(canvas.width, locY);
	context.stroke();
}
	//更新坐标展示数字

function updateReadOutText(locX, locY) {
	readout.innerText = "坐标为 X："+locX.toFixed(0)+", Y："+locY.toFixed(0);
	}
	//添加鼠标事件，同时是程序入口
canvas.onmousemove = function(e) {
		var oLoc = windowToCanvas(canvas, e.clientX, e.clientY);
		//画背景 
		drawBackground();
		//画精灵
		drawSpritSheet(oLoc.locX, oLoc.locY);
		//画鼠标辅助线
		drawGuideLines(oLoc.locX, oLoc.locY);
		//更新坐标展示数字
		updateReadOutText(oLoc.locX, oLoc.locY);
	}
canvas.onmousedown = function (e){
	isMouseDown = true;
}
canvas.onmouseup = function (e){
	isMouseDown = false;
}
canvas.onmouseout = function (e){
	isMouseDown = false;
}
canvas.onfocusout = function (e){
	isMouseDown = false;
}
	//加载图片
spritsheet.src = "images/running-sprite-sheet.png"
	//当图片加载到对象后，则展示到画布上
spritsheet.onload = function(e) {
		drawSpritSheet();
	}
	//绘制默认背景
drawBackground();