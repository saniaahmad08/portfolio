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
ctx.fillRect(450,150,365,150);

// ground
ctx.fillStyle = "LightGreen";
ctx.fillRect(0,275,myCanvas.width,275);
// caption
ctx.fillStyle = "black";
ctx.font = "30px Arial";
ctx.fillText("Sania's Cartoon",200,40);

