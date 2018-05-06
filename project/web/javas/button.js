var reg = {};

var lobbystate = {
    preload: function () {
        game.load.image('button', 'assets/yw-sapphirebutton.png');
        game.load.image('navBg', 'assets/nav-wood.png');
        game.load.image('logo', 'assets/splendor.png');
        game.load.image('chat', 'assets/chat.png');
        game.load.image('ruby', 'assets/ruby.png');
        game.load.image('emerald', 'assets/emerald.png');
        game.load.image('bg', 'assets/BG.jpg');
        game.load.image('modal', 'assets/464885029.jpg');
        game.load.image('modal_bg', 'assets/modal_bg.png')
    },
    create: function () {

        var bg = game.add.sprite(0, 0, 'bg');
        bg.width = window.innerWidth;

        navbar.create();
  
        var button = [];
        game.stage.backgroundColor = '#182d3b';
     //   logo.scale.setTo(0.15);
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
        button[2] = game.add.button(1200, 75, 'emerald', profileClick, this);
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
  // profile modal
    modal.create(window.innerWidth*0.5, window.innerHeight*0.66, true, function() {
      var x = game.world.centerX - ((window.innerWidth*0.5)/2);
      var y = game.world.centerY - ((window.innerHeight*0.66)/2);
      var title = game.add.text(x + 90, y + 55, 'Profile', { fill: '#000000', font: '24pt Arial' });
      var name = game.add.text(x + 90, y + 55, 'Profile', { fill: '#000000', font: '24pt Arial' });
      var stat = game.add.text(x + 90, y + 55, 'Profile', { fill: '#000000', font: '24pt Arial' });
      title.anchor.setTo(0.5)
      var profile_img = game.add.sprite(x + 145, y + 188, 'bg');
      profile_img.width = 200;
      profile_img.height = 200;
      profile_img.anchor.setTo(0.5)
      modal.modalGroup.add(title);
      modal.modalGroup.add(name);
      modal.modalGroup.add(stat);
      modal.modalGroup.add(profile_img);
    });
    modal.show();
    game.world.bringToTop(modal.modalGroup);
}

function profileClick() {
    modal.create(window.innerWidth*0.5, window.innerHeight*0.66, true, function() {
      
    });
    modal.show();
    game.world.bringToTop(modal.modalGroup);
}
