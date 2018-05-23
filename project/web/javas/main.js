var game = new Phaser.Game(
  window.innerWidth,
  window.innerHeight,
  Phaser.AUTO,
  "phaser-example"
);
// var resizeGame = function () {
Phaser.Device.whenReady(function() {
  game.plugins.add(PhaserInput.Plugin);
});
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
game.state.add("room", roomheadache);
game.state.start("lobby");
