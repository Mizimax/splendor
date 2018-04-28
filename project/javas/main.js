var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, 'phaser-example');
game.state.add('lobby', lobbystate);
game.state.add('game', gamestate);
game.state.start('lobby');