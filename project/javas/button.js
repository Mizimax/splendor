
var lobbystate = {
    preload: function () {
        game.load.image('button', 'assets/yw-sapphirebutton.png');
        game.load.image('logo', 'assets/splendor.png');
        game.load.image('chat', 'assets/chat.png');
        game.load.image('ruby', 'assets/ruby.png');
        game.load.image('emerald', 'assets/emerald.png');
    },
    create: function () {
        var button = [];
        game.stage.backgroundColor = '#182d3b';
        var logo = game.add.sprite(0, 0, 'logo');
        logo.scale.setTo(1.2, 1);

        /*   bmd = game.make.bitmapData(800, 200);
           bmd.context.font = '64px Arial';
           bmd.context.fillStyle = '#ffffff';
           bmd.context.fillText(word, 64, 64);
           bmd.addToWorld();
       */

        //button 1
        button1 = game.add.button(1200, window.outerHeight - 150, 'button', actionOnClick, this);
        button1.inputEnabled = true;
        button1.anchor.setTo(0.5, 0.5);
        button1.scale.setTo(0.6, 0.6)
        button1.onInputOver.add(function () { this.game.canvas.style.cursor = "pointer"; game.add.tween(button1.scale).to({ x: 0.7, y: 0.7 }, 400, Phaser.Easing.Back.Out, true, 0); });
        button1.onInputOut.add(function () { this.game.canvas.style.cursor = "default"; game.add.tween(button1.scale).to({ x: 0.6, y: 0.6 }, 400, Phaser.Easing.Back.Out, true, 0) });


        //button 2
        button[0] = game.add.button(1000, window.outerHeight - 150, 'chat', ChatClick, this);
        button[0].inputEnabled = true;
        button[0].anchor.setTo(0.5, 0.5);
        button[0].scale.setTo(0.3, 0.3);
        button[0].onInputOver.add(function () { this.game.canvas.style.cursor = "pointer"; game.add.tween(button[0].scale).to({ x: 0.4, y: 0.4 }, 400, Phaser.Easing.Back.Out, true, 0); });
        button[0].onInputOut.add(function () { this.game.canvas.style.cursor = "default"; game.add.tween(button[0].scale).to({ x: 0.3, y: 0.3 }, 200, Phaser.Easing.Back.In, true, 0); });

        //button 3
        button[1] = game.add.button(1000, 75, 'ruby', rubyClick, this);
        button[1].inputEnabled = true;
        button[1].anchor.setTo(0.5, 0.5);
        button[1].scale.setTo(0.2, 0.2);
        button[1].onInputOver.add(function () { this.game.canvas.style.cursor = "pointer"; game.add.tween(button[1].scale).to({ x: 0.25, y: 0.25 }, 400, Phaser.Easing.Back.Out, true, 0); });
        button[1].onInputOut.add(function () { this.game.canvas.style.cursor = "default"; game.add.tween(button[1].scale).to({ x: 0.2, y: 0.2 }, 400, Phaser.Easing.Back.In, true, 0); });

        //button 4
        button[2] = game.add.button(1200, 75, 'emerald', rubyClick, this);
        button[2].inputEnabled = true;
        button[2].anchor.setTo(0.5, 0.5);
        button[2].scale.setTo(0.3, 0.3);
        button[2].onInputOver.add(function () { this.game.canvas.style.cursor = "pointer"; game.add.tween(button[2].scale).to({ x: 0.4, y: 0.4 }, 400, Phaser.Easing.Back.Out, true, 0); });
        button[2].onInputOut.add(function () { this.game.canvas.style.cursor = "default"; game.add.tween(button[2].scale).to({ x: 0.3, y: 0.3 }, 400, Phaser.Easing.Back.In, true, 0); });


    },
    render: function(){
    },
};

// button
function up() {
    console.log('button up', arguments);
}
function over() {
    this.game.canvas.style.cursor = "pointer";
    game.add.tween(button.scale).to({ x: 0.7, y: 0.7 }, 400, Phaser.Easing.Back.Out, true, 0);
    console.log(button);
}
function out() {
    this.game.canvas.style.cursor = "default";
    game.add.tween(button.scale).to({ x: 0.6, y: 0.6 }, 200, Phaser.Easing.Back.In, true, 0);
}
function actionOnClick() {
    console.log(button[0]);
}
//button
// button[1]
function ChatClick() {
    var person = prompt("chat", "... message ...");
}
// button[2]
function rubyClick() {
    game.state.start('room');
}
