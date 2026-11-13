import {dist, rand} from "./utils.js";

export default (canvas, ctx) => {
  ctx.lineWidth = 1;
  const walkers = [];

  for (let x = -canvas.width / 2; x < canvas.width * 1.3; x += 36.8) {
    for (let y = -canvas.height / 2; y < canvas.height * 1.3; y += 25.285) {
      walkers.push({
        x: x + (y & 1 ? 1 : -1) * rand(25),
        y: y + (x & 1 ? -1 : 1) * rand(25),
      });
    }
  }

  walkers.forEach((e, i) => {
    e.links = walkers.filter(f =>
      dist(e, f) < 43 && e.x !== f.x && e.y !== f.y
    );
  });
  
  walkers.sort((a, b) => Math.random() - 0.5);
  let i = 0;
  (function update() {
    for (let ii = 0; ii < 100; ii++) {
      if (i >= walkers.length) return;
      
      const e = walkers[i++];
      e.links.forEach(f => {
        for (let i = -2; i < 3; i += 2) {
          ctx.beginPath();
          ctx.moveTo(e.x + i, e.y - i);
          ctx.lineTo(f.x - i, f.y + i);
          ctx.stroke();
        }
      
        f.links = f.links.filter(g => g.x !== e.x || g.y !== e.y);
      });
    }
    requestAnimationFrame(update);
  })();
};
