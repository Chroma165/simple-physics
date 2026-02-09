const screen = document.querySelector("#screen");
const ctx = screen.getContext("2d");
const physObjects = [];
const environment = [
  [20,20], [20,980], [500,500], [980,980],[980,20]
]; // Array of dots counter clockwise

const ball1 = new Ball([780, 200], [-350,100], 20, 1, 0.9, "#8800ff", ctx);
const ball2 = new Ball([780, 300], [-200,200], 40, 2, 0.9, "#0000ff", ctx);



// // // DRAW SCREEN // // //
let lastTime;
function drawScreen(time) {
  if (lastTime != null) {
    const deltaTime = (time - lastTime)/1000;
    update(deltaTime);
  }

  lastTime = time;
  window.requestAnimationFrame(drawScreen);
}
window.requestAnimationFrame(drawScreen);



function update(deltaTime) {
  ctx.clearRect(0, 0, screen.width, screen.height);

  ctx.beginPath();
  for(let i=0; i<environment.length; i++){
    ctx.lineTo(environment[i][0], environment[i][1]);
  }
  ctx.lineTo(environment[0][0], environment[0][1]);
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();

	physObjects.forEach((physObject) => {
    physObject.update(physObjects, environment);
  });
  physObjects.forEach((physObject) => {
    physObject.move(deltaTime);
    physObject.draw();
  });
}
