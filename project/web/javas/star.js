
var sprite ;
var counter = 0 ;
var step = Math.PI * 2 / 360 ;

starstate = {
    
preload:function () {

    // Load images to use as the game sprites
    game.load.image('sprite', 'assets/Pun.png');
    game.load.image('emerald', 'assets/emerald.png');

    //button 4
    button = game.add.button(1200, 75, 'emerald', backClick, this);
    button.inputEnabled = true;
    button.anchor.setTo(0.5, 0.5);
    button.scale.setTo(0.3, 0.3);
    button.onInputOver.add(function () { this.game.canvas.style.cursor = "pointer"; game.add.tween(button.scale).to({ x: 0.4, y: 0.4 }, 400, Phaser.Easing.Back.Out, true, 0); });
    button.onInputOut.add(function () { this.game.canvas.style.cursor = "default"; game.add.tween(button.scale).to({ x: 0.3, y: 0.3 }, 400, Phaser.Easing.Back.In, true, 0); });

}
,
create:function () {

    // Create sprite and put it in the middle of the stage
    sprite = game.add.sprite(0, 0, 'sprite');
    sprite.alpha = 0.5 ;
    sprite.x = game.width / 2 ;
    sprite.anchor.x = sprite.anchor.y = 0.5 ;

}
,
update:function ()
{
    // Move sprite up and down smoothly for show
    var tStep = Math.sin( counter ) ;
    sprite.y = (game.height/2) + tStep * 30 ;
    sprite.rotation += Phaser.Math.degToRad( 0.1 * tStep ) ;
    counter += step ;
}
,
render:function () {

    // Display
    //game.debug.spriteBounds(sprite);
    //game.debug.spriteCorners(sprite, true, true);

},
}

function backClick() {
    game.state.start('lobby');
}