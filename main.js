const screen = document.querySelector("#screen");
const ctx = screen.getContext("2d");
const instances = [];
const environment = [
  [0,0], [0,1000], [1000,1000],[1000,0]
]; // Array of dots counter clockwise

const ball1 = new Ball([200, 200], [5,5], 10, 1, "#8800ff");
const ball2 = new Ball([400, 600], [-4,-3], 20, 2, "#0000ff");


// // // DRAW SCREEN // // //
let lastTime;
function drawScreen(time) {
  if (lastTime != null) {
    const deltaTime = time - lastTime;
    update(deltaTime);
  }

  lastTime = time;
  window.requestAnimationFrame(drawScreen);
}
window.requestAnimationFrame(drawScreen);

function update(deltaTime) {
	
}