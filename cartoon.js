const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
ctx.fillStyle = "black";
ctx.font = "30px Arial";
ctx.fillText("Sania's Cartoon",200,40);
ctx.fillStyle = "LightCyan";
ctx.fillRect(0,0,myCanvas.width,myCanvas.height);
ctx.fillStyle = "Gold";
ctx.arc(0,0,30,0,100);

