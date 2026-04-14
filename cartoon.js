const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
// background
ctx.fillStyle = "LightCyan";
ctx.fillRect(0,0,myCanvas.width,myCanvas.height);
// sun
ctx.fillStyle = "Gold";
ctx.beginPath();
ctx.arc(0,0,100,0,3.14159);
ctx.fill();
//sun rays
ctx.beginPath();
ctx.moveTo(10,105);
ctx.lineTo(10,140);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(25,101);
ctx.lineTo(30,120);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(40,97);
ctx.lineTo(55,130);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(110,5);
ctx.lineTo(110,9);
ctx.stroke();
// house
ctx.fillStyle = "LightPink";
ctx.fillRect(350,200,200,180);
// roof
ctx.fillStyle = "LightCoral";
ctx.beginPath();
ctx.moveTo(350,200);
ctx.lineTo(550,200);
ctx.lineTo(450,95);
ctx.closePath();
ctx.fill();
ctx.stroke();
// window 1
ctx.beginPath();
ctx.moveTo(375,230);
ctx.lineTo(375,290);
ctx.lineTo(425,290);
ctx.lineTo(425,230);
ctx.closePath();
ctx.stroke();
// window lines
ctx.beginPath();
ctx.moveTo(400, 230);
ctx.lineTo(400, 290);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(375, 260);
ctx.lineTo(425, 260);
ctx.stroke();
// window 2
ctx.beginPath();
ctx.moveTo(470,230);
ctx.lineTo(470,290);
ctx.lineTo(520,290);
ctx.lineTo(520,230);
ctx.closePath();
ctx.stroke();
//window lines 2
ctx.beginPath();
ctx.moveTo(495, 230);
ctx.lineTo(495, 290);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(470, 260);
ctx.lineTo(520, 260);
ctx.stroke();
//door
ctx.fillStyle = 'LightCoral';
ctx.fillRect(423,300 ,50 , 50);
// ground
ctx.fillStyle = "LightGreen";
ctx.fillRect(0,345,myCanvas.width,345);
// caption
ctx.fillStyle = "black";
ctx.font = "30px Arial";
ctx.fillText("Sania's Cartoon",200,40);

