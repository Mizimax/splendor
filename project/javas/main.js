var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, 'phaser-example');
game.state.add('lobby', lobbystate);
// game.state.add('star', starstate);
game.state.start('lobby');