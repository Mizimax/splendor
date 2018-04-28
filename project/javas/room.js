var roomheadache = {
    preload: function () {
        game.load.image('background','assets/roombg2.jpg');
        game.load.image('exit','assets/exit.png');
        game.load.image('go','assets/go.png');
        game.load.image('playerbox','assets/playerbox.png');
        game.load.image('playerOne','assets/player.jpg');
        game.load.image('info','assets/roominfo.png');
    },
    create: function (){
        game.stage.backgroundcolor = '#182d3b';
        game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.5);
        var go = game.add.button(window.outerWidth-350,window.outerHeight-200,'go',goclick,this);
        var exit = game.add.button(window.outerWidth-200,window.outerHeight-200,'exit',exitclick,this);
        var playerBox = [];
        playerBox[0] = game.add.sprite(window.outerWidth-1500,window.outerHeight-800,'playerbox');
        playerBox[1] = game.add.sprite(window.outerWidth-900,window.outerHeight-800,'playerbox');
        playerBox[2] = game.add.sprite(window.outerWidth-1500,window.outerHeight-500,'playerbox');
        playerBox[3] = game.add.sprite(window.outerWidth-900,window.outerHeight-500,'playerbox');
        playerBox[0].scale.setTo(1,0.8);
        playerBox[1].scale.setTo(1,0.8);
        playerBox[2].scale.setTo(1,0.8);
        playerBox[3].scale.setTo(1,0.8);
        var player = [];
        player[0] = game.add.sprite(window.outerWidth-1400,window.outerHeight-700,'playerOne');
        player[1] = game.add.sprite(window.outerWidth-800,window.outerHeight-700,'playerOne');
        player[2] = game.add.sprite(window.outerWidth-1400,window.outerHeight-400,'playerOne');
        player[3] = game.add.sprite(window.outerWidth-800,window.outerHeight-400,'playerOne');
        player[0].width=150;
        player[0].height=150;
        player[1].width=150;
        player[1].height=150;
        player[2].width=150;
        player[2].height=150;
        player[3].width=150;
        player[3].height=150;
        var info = game.add.sprite(window.outerWidth-350,window.outerHeight-800,'info');
        info.width=300;
        info.height=625;
    }


}
function goclick(){
    var go = prompt("peter"," SHUT UP ");
}
function exitclick(){
    var go = prompt("peter"," SHUT UP ");
}