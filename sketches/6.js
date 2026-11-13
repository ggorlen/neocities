export default (canvas, ctx) => {
ctx.translate(0.5, 0.5);
ctx.save();

ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(250, 180);
ctx.lineTo(650, 380);
ctx.lineTo(450, 400);
ctx.lineTo(150, 290);
ctx.closePath();

ctx.clip();

//ctx.fillStyle = "red";
ctx.strokeStyle = "black";
//ctx.fillRect(0, 0, canvas.width, canvas.height);

for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.moveTo(0, i * 5) ;
  ctx.lineTo(800, i * 5 + 80);
  ctx.stroke();
}
ctx.restore();

////
ctx.save();

ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(0, 0);
ctx.lineTo(650, 0);
ctx.lineTo(450, 162);
ctx.closePath();

ctx.clip();

//ctx.fillStyle = "red";
ctx.strokeStyle = "black";
//ctx.fillRect(0, 0, canvas.width, canvas.height);

for (let i = -100; i < 100; i++) {
  ctx.beginPath();
  ctx.moveTo(0, i * 10) ;
  ctx.lineTo(800, i * 10 + 90)
  ctx.stroke();
}
ctx.restore();

////
ctx.save();

ctx.beginPath();
ctx.moveTo(650, 0);
ctx.lineTo(1000, 0);
ctx.lineTo(950, 60);
ctx.lineTo(450, 162);
ctx.closePath();

ctx.clip();

//ctx.fillStyle = "red";
ctx.strokeStyle = "black";
//ctx.fillRect(0, 0, canvas.width, canvas.height);

for (let i = -100; i < 100; i++) {
  ctx.beginPath();
  ctx.moveTo(0, i * 12) ;
  ctx.lineTo(800, i * 12 - 900)
  ctx.stroke();
}
ctx.restore();
};
