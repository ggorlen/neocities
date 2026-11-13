export default (canvas, ctx) => {
const grid = [];
ctx.save();
ctx.translate(0.5, 0.5);
ctx.translate(0, -200);
let verticalGap = 5;
const rands = [];

for (let x = 0; x < 145; x++) {
    const xx = x * 20;
    const row = [];
    grid.push(row);

    for (let y = 0; y < 300; y++) {
        const yy = y * 30 + verticalGap + Math.random() * 5;

        if (Math.random() > 0.6) {
          verticalGap += Math.random() * 2;
        }
        if (Math.random() < 0.4) {
          verticalGap -= Math.random() * 2;
        }

        //ctx.beginPath();
        //ctx.arc(xx, yy, 2, 0, Math.PI);
        //ctx.fill();
        row.push({x: xx, y: yy});
    }
}

for (let z = 0; z < 5; z++) {
  for (let i = 0; i < grid[0].length; i++) {
    ctx.beginPath();
    ctx.moveTo(grid[0][i].x, grid[0][i].y);
  
    for (let j = 0; j < grid.length; j++) {
      ctx.lineTo(grid[j][i].x, grid[j][i].y);
    }
  
  
    //ctx.globalCompositeOperation = "hue";
    //ctx.strokeStyle = `hsl(0, 0%, ${z * 10}%)`
    ctx.stroke();
  }
  
  const r = Math.random() * 3;
  ctx.translate(0, 4 + r);
  rands.push(r);
}

ctx.restore();
ctx.save();
ctx.translate(0.5, 0.5);
//ctx.rotate(-0.5);
ctx.translate(0, -200);

ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(250, 180);
ctx.lineTo(650, 380);
ctx.lineTo(450, 400);
ctx.lineTo(150, 290);
ctx.closePath();

ctx.clip(); // Restrict future drawing to polygon

ctx.fillStyle="transparent";
ctx.strokeStyle="pink";
ctx.fillRect(0, 0, canvas.width, canvas.height);
let randsI = 0;
for (let z = 0; z < 5; z++) {
  for (let i = 0; i < grid[0].length; i++) {
    ctx.beginPath();
    ctx.moveTo(grid[0][i].x, grid[0][i].y);
  
    for (let j = 0; j < grid.length; j++) {
      ctx.lineTo(grid[j][i].x, grid[j][i].y);
    }
  
    //ctx.globalCompositeOperation = "hue";
    ctx.stroke();
  }
  
  ctx.translate(0, 4 + Math.random() * 3);
  //ctx.translate(0, 4 + rands[randsI++]);
}

ctx.restore(); // remove clipping
};
