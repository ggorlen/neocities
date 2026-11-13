import {rand} from "./utils.js";

export default (canvas, ctx) => {
  ctx.lineWidth = 1;
  const gridSize = ~~(canvas.width / 100);
  const actions = [
    //{x: 1, y: 0},
    {x: gridSize, y: gridSize / 2},
    {x: gridSize, y: -gridSize / 2},
    //{x: gridSize, y: gridSize},
    //{x: gridSize, y: -gridSize},
  ];
  let walkers = [];

  for (let i = -canvas.height; i < canvas.height * 2; i += canvas.height / 5) {
    walkers.push({x: -canvas.width / 2, y: i, dx: gridSize, dy: gridSize});
  }

  (function update() {
    for (let i = 0; i < 50; i++) {
      if (rand(100) > 85) {
        const action = actions[rand(actions.length)];
        walkers.forEach((walker, i) => {
          walker.dx = action.x;
          walker.dy = action.y;
        });
      }
      
      walkers.forEach((walker, i) => {
        for (let i = 0; i < canvas.height / 6; i += canvas.height / 200) {
          ctx.beginPath();
          ctx.moveTo(walker.x + i / 10, walker.y - i);
          ctx.lineTo(walker.x + walker.dx + i / 10, walker.y + walker.dy - i);
          ctx.stroke();
        }

        walker.x += walker.dx;
        walker.y += walker.dy;
      });
      
      if (walkers.every(e => e.x > canvas.width)) {
        return;
      }
    }

    requestAnimationFrame(update);
  })();
};
