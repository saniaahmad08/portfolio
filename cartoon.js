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
// ground
ctx.fillStyle = "LightGreen";
ctx.fillRect(0,250,myCanvas.width,250);
// caption
ctx.fillStyle = "black";
ctx.font = "30px Arial";
ctx.fillText("Sania's Cartoon",200,40);

