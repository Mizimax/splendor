var game = new Phaser.Game(window.outerWidth, window.outerHeight, Phaser.AUTO, 'phaser-example');
game.state.add('lobby', lobbystate);
game.state.add('game', gamestate);
game.state.start('lobby');