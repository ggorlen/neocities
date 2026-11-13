// TODO 
// - resize listener
// - set/get location.hash for bookmarkable sketch index
// - do relative instead of absolute positioning so these look more or less the same on all screens
import a from "./sketches/1.js";
import b from "./sketches/2.js";
import c from "./sketches/3.js";
import d from "./sketches/4.js";
import e from "./sketches/5.js";
import f from "./sketches/6.js";

const sketchEl = document.querySelector("#sketch");
let sketchIdx = 0;

const sketches = [a,b,c,d,e,f];

const showSketch = () => {  
  const canvas = document.createElement("canvas");
  sketchEl.innerHTML = "";
  sketchEl.appendChild(canvas);
  canvas.width = document.body.scrollWidth;
  canvas.height = document.body.clientHeight;
  sketches[sketchIdx](canvas, canvas.getContext("2d"));
};

document.addEventListener("keydown", e => {
  // Need cleanup for long running animations
  if (e.keyCode === 37) {
    sketchIdx = (((sketchIdx - 1) % sketches.length) + sketches.length) % sketches.length;
    showSketch();
  }
  else if (e.keyCode === 39) {
    sketchIdx = (sketchIdx + 1) % sketches.length;
    showSketch();
  }
  else if (e.keyCode === 32) {
    showSketch();
  }
});

showSketch();

