const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// house
ctx.beginPath();
ctx.moveTo(10, 165);
ctx.lineTo(120, 20);
ctx.lineTo(300, 165);
ctx.fillStyle = "#8b0000";
ctx.fill();
ctx.closePath()
ctx.strokeRect(25, 165, 245, 130)

// house windows and door
ctx.beginPath();
ctx.fillRect(45, 175, 65, 50)
ctx.fillRect(205, 175, 65, 50)
ctx.fillRect(125, 175, 65, 115)
ctx.closePath();

// car
ctx.beginPath()
ctx.moveTo(360, 175)
ctx.lineTo(460, 175)
ctx.lineTo(510, 215)
ctx.lineTo(320, 215)
ctx.fillStyle = '#ff0000';
ctx.fill()
ctx.closePath()
ctx.fillRect(320, 215, 245, 60)

// car parts

// car behind tyer
ctx.beginPath()
ctx.arc(370, 275, 30, 0, Math.PI * 2, true);
ctx.fillStyle = "#000000";
ctx.fill()
ctx.strokeStyle = 	"#ffffff";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath()

// car front tyer
ctx.beginPath()
ctx.arc(500, 275, 30, 0, Math.PI * 2);
ctx.fillStyle = "#000000";
ctx.fill()
ctx.strokeStyle = 	"#ffffff";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath()

// car window
ctx.beginPath()
ctx.moveTo(364, 179)
ctx.lineTo(460, 179)
ctx.lineTo(499, 214)
ctx.lineTo(340, 214)
ctx.fillStyle = '#808080';
ctx.fill()
ctx.closePath()

// tree
ctx.beginPath();
ctx.moveTo(170, 80);
ctx.bezierCurveTo(130, 100, 130, 150, 230, 150);
ctx.bezierCurveTo(250, 180, 320, 180, 340, 150);
ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = '#00A300';
ctx.fill();
ctx.strokeStyle = '#007500';
ctx.stroke();
ctx.fillRect(270, 160, 30, 150)

// sun

// Create gradient
const grd = ctx.createRadialGradient(510,60,75,90,60,100);
grd.addColorStop(1,"red");
grd.addColorStop(0,"yellow");

ctx.beginPath()
ctx.arc(475, 75, 60, 0, Math.PI * 2, true);
ctx.fillStyle = grd;
ctx.fill()
ctx.closePath()