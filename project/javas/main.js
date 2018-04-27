var game = new Phaser.Game(window.outerWidth, window.outerHeight, Phaser.AUTO, 'phaser-example');
game.state.add('lobby', lobbystate);
// game.state.add('star', starstate);
game.state.start('lobby');