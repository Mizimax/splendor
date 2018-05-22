var game = new Phaser.Game(
  window.innerWidth,
  window.innerHeight,
<<<<<<< HEAD:project/javas/main.js
  Phaser.CANVAS,
  "phaser-example"
);
// var resizeGame = function () {

=======
  Phaser.AUTO,
  "phaser-example"
);
// var resizeGame = function () {
Phaser.Device.whenReady(function() {
  game.plugins.add(PhaserInput.Plugin);
});
>>>>>>> 18ea4c3a0c01828e1268b87bfa30b3aa0240906f:project/web/javas/main.js
//   var height = window.innerHeight;
//   var width = window.innerWidth;

//   game.width = width;
//   game.height = height;
//   game.stage.bounds.width = width;
//   game.stage.bounds.height = height;

//   if (game.renderType === 1) {
//     game.renderer.resize(width, height);
//     Phaser.Canvas.setSmoothingEnabled(game.context, false);
//   }
// }
// window.addEventListener('resize', function () {
//   resizeGame();
// })
game.state.add("lobby", lobbystate);
game.state.add("game", gamestate);
<<<<<<< HEAD:project/javas/main.js
=======
game.state.add("room", roomheadache);
>>>>>>> 18ea4c3a0c01828e1268b87bfa30b3aa0240906f:project/web/javas/main.js
game.state.start("lobby");
