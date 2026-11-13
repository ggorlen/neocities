import {rand} from "./utils.js";

export default (canvas, ctx) => {
  ctx.lineWidth = 1;
  let gridSize = 10;
  const visited = {};
  const inBounds = e => 
    e.x >= 0 && e.x <= canvas.width && 
    e.y >= 0 && e.y <= canvas.height
  ;
  const actions = [
    {x: gridSize, y: 0},
    {x: -gridSize, y: 0},
    {x: 0, y: -gridSize},
    //{x: 0, y: gridSize},
    {x: -gridSize / 2, y: gridSize / 2},
    {x: gridSize / 2, y: -gridSize / 2},
    //{x: gridSize / 2, y: -gridSize / 2},
    //{x: gridSize / 2, y: gridSize / 2},
  ];
  let walker = {x: 0, y: 0};
  
  (function update() {
    for (let i = 0; i < 1000; i++) {
      //if (Math.random() > 0.98) {
      //  gridSize *= 2;
      //}
      //else if (Math.random() > 0.9 && gridSize > 10) {
      //  gridSize /= 2;
      //}
  
      if (rand(10) > 1) {
        visited[walker.x+" "+walker.y] = 1;
      }
      
      ctx.beginPath();
      ctx.moveTo(walker.x - 0.5, walker.y - 0.5);
      let proposedX = walker.x;
      let proposedY = walker.y;

      for (let tries = 0;
           (visited[proposedX+" "+proposedY] || 
            !inBounds({x: proposedX, y: proposedY})) && tries < 5;
           tries++) {

        const action = actions[rand(actions.length)];
        proposedX = walker.x + action.x;
        proposedY = walker.y + action.y;
      }

      walker.x = proposedX;
      walker.y = proposedY;
      ctx.lineTo(walker.x - 0.5, walker.y - 0.5);
      ctx.stroke();
      
      for (let tries = 0;
           visited[walker.x+" "+walker.y] || !inBounds(walker);
           tries++) {
      
        if (tries === 10) return;
      
        walker.x = ~~(rand(canvas.width) / gridSize) * gridSize;
        walker.y = ~~(rand(canvas.height) / gridSize) * gridSize;
      }
    }
  
    requestAnimationFrame(update);
  })();
};
