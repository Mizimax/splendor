var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-example');
// var resizeGame = function () {
 
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
game.state.add('lobby', lobbystate);
game.state.add('game', gamestate);
game.state.start('lobby');
