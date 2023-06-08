canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
var color = ["blue", "black", "red", "yellow", "green"];
var pos_x = [200, 200+170, 200+170+170, 285, 456];
var pos_y = [200, 200, 200, 200+80, 200+80]
for(i=0; i<=4; i++){
    ctx.beginPath();
    ctx.strokeStyle = color[i];
    ctx.lineWidth = 20;
    ctx.arc(pos_x[i], pos_y[i], 70, 0, 2* Math.PI);
    ctx.stroke();  
}
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(100, 115, 550, 250);
ctx.stroke();






