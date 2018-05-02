var roomheadache = {
    preload: function () {
        game.load.image('background','assets/roombg2.jpg');
        game.load.image('exit','assets/exit2.png');
        game.load.image('go','assets/go2.png');
        game.load.image('playerbox','assets/playerbox.png');
        game.load.image('playerOne','assets/player.jpg');
        game.load.image('playerTwo','assets/player2.jpg');
        game.load.image('playerThree','assets/player3.jpg')
        game.load.image('playerFour','assets/player4.jpg');
        game.load.image('info','assets/roominfo.png');
        game.load.image('send','assets/send.png');
        game.load.image('invite','assets/invite.png');
        var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

    },
    create: function (){
        game.stage.backgroundcolor = '#182d3b';
        game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.5);
        
        var playerBox = game.add.sprite(window.outerWidth-1225,window.outerHeight-800,'info')
        playerBox.scale.setTo(1);
        var player = [];
        player[0] = game.add.sprite(window.outerWidth-1211,window.outerHeight-761,'playerOne');
        player[1] = game.add.sprite(window.outerWidth-1211,window.outerHeight-687,'playerTwo');
        player[2] = game.add.sprite(window.outerWidth-1211,window.outerHeight-605,'playerThree');
        player[3] = game.add.sprite(window.outerWidth-1211,window.outerHeight-526,'playerFour');
        player[0].width=64;
        player[0].height=65;
        player[1].width=64;
        player[1].height=65;
        player[2].width=64;
        player[2].height=65;
        player[3].width=64;
        player[3].height=65;
        var go = game.add.button(window.outerWidth-810,window.outerHeight-354,'go',goclick,this);
        var exit = game.add.button(window.outerWidth-1215,window.outerHeight-354,'exit',exitclick,this);
        var invite = game.add.button(window.outerWidth-475,window.outerHeight-354,'invite',goclick,this);
        var send = game.add.button(window.outerWidth-400,window.outerHeight-163,'send',goclick,this);
        var text = []; 
        text[0] = game.add.text(window.outerWidth-1205,window.outerHeight-313, "Chat", { font: "16px Arial", fill: "#ffffffff", align: "center" });
        text[1] = game.add.text(window.outerWidth-1205,window.outerHeight-790, "Game Room", { font: "16px Arial", fill: "#ffffffff", align: "center" });
        text[2] = game.add.text(window.outerWidth-600,window.outerHeight-790, "Game Info", { font: "16px Arial", fill: "#ffffffff", align: "center" });
        text[3] = game.add.text(window.outerWidth-600,window.outerHeight-526, "Invite", { font: "16px Arial", fill: "#ffffffff", align: "center" });
        text[4] = game.add.text(window.outerWidth-1125,window.outerHeight-736, "Name1", { font: "16px Arial", fill: "#ffffffff", align: "center" });
        text[5] = game.add.text(window.outerWidth-1125,window.outerHeight-657, "Name2", { font: "16px Arial", fill: "#ffffffff", align: "center" });
        text[6] = game.add.text(window.outerWidth-1125,window.outerHeight-578, "Name3", { font: "16px Arial", fill: "#ffffffff", align: "center" });
        text[7] = game.add.text(window.outerWidth-1125,window.outerHeight-499, "Name4", { font: "16px Arial", fill: "#ffffffff", align: "center" });
        text[8] = game.add.text(window.outerWidth-600,window.outerHeight-736, "Room Name : Palum", { font: "14px Arial", fill: "#ffffffff", align: "center" });
        text[9] = game.add.text(window.outerWidth-600,window.outerHeight-710, "Status : Locked Room", { font: "14px Arial", fill: "#ffffffff", align: "center" });
    }


}
function goclick(){
    var go = prompt("peter"," SHUT UP ");
}
function exitclick(){
    game.state.start('lobby');
}