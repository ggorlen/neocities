import {rand} from "./utils.js";

export default (canvas, ctx) => {
  //const visited = new Set();
  //const ctx = canvas.getContext("2d");
  const r = (lo, hi) => ~~(Math.random() * (hi - lo)) + lo;
  const w = canvas.width;
  const h = canvas.height;
  var seeds = [...Array(6)].map((e) => ({
    x: r(w / 2 - 50, w / 2 + 50),
    y: r(w / 2 - 50, h / 2 + 50),
    color: [r(0, 256), r(0, 256), r(0, 256), Math.random()],
  }));
 let times = 0;
 
 var interval = setInterval(() => {
    if (++times > 1000) clearInterval(interval);

    for (let i = 0; i < 500; i++) {
      for (var s of seeds) {
        ctx.fillStyle = `rgba(${s.color.join()})`;
        ctx.beginPath();
        var distance = Math.sqrt((Math.pow(s.x,2))+(Math.pow(s.y,2)))

        ctx.arc(s.x, s.y, r(1,3), 0, Math.PI * 2);
        ctx.fill();
        s.x += r(-1, 2);
        s.y += r(-1, 2);

        // for (let i = 0; i < 1 && visited.has(`${s.x} ${s.y}`); i++) {
        //   s.x += r(-1, 2);
        //   s.y += r(-1, 2);
        // }

        //for (let i = -20; i < 20; i++) visited.add(`${s.x + i} ${s.y + i}`);

        if (s.y > h) {
          s.y = 0;
        }
        if (s.x > w) {
          s.x = 0;
        }
        if (s.y < 0) {
          s.y = h;
        }
        if (s.x < 0) {
          s.x = w;
        }

        for (const [i, c] of s.color.slice(0, -1).entries()) {
          s.color[i] = c + r(-1, 2);
          s.color[i] =
            s.color[i] < 0 ? 255 : s.color[i] > 255 ? 0 : s.color[i];
        }
      }
    }
  }, 4);
};




