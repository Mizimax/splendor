var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-example');
console.log(window.innerWidth * window.devicePixelRatio + ' ' + window.innerHeight)
game.state.add('lobby', lobbystate);
game.state.add('room', roomheadache);
game.state.start('lobby');