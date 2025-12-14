const screen = document.querySelector("#screen");
const ctx = screen.getContext("2d");



// // // DRAW SCREEN // // //
let lastTime;
function updateScreen(time) {
  if (lastTime != null) {
    const deltaTime = time - lastTime;
  }

  lastTime = time;
  window.requestAnimationFrame(updateScreen);
}
window.requestAnimationFrame(updateScreen);