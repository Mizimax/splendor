var roomheadache = {
    preload: function () {
<<<<<<< HEAD
        game.load.image('background','assets/roombg2.jpg');
        game.load.image('exit','assets/exit2.png');
        game.load.image('go','assets/go2.png');
=======
        game.load.image('background','assets/roombg.jpg');
        game.load.image('exit','assets/exit.png');
        game.load.image('go','assets/go.png');
>>>>>>> 4c5796b1618f6c186bac28d45fb0ece3e7abc0b4
        game.load.image('playerbox','assets/playerbox.png');
        game.load.image('playerOne','assets/player.jpg');
        game.load.image('info','assets/roominfo.png');
        game.load.image('send','assets/send.png');
        game.load.image('invite','assets/invite.png');
        var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

    },
    create: function (){
        game.stage.backgroundcolor = '#182d3b';
        game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.5);
        
<<<<<<< HEAD
        var playerBox = game.add.sprite(window.outerWidth-1225,window.outerHeight-800,'info')
        playerBox.scale.setTo(1);
        var player = [];
        player[0] = game.add.sprite(window.outerWidth-1211,window.outerHeight-761,'playerOne');
        player[1] = game.add.sprite(window.outerWidth-1211,window.outerHeight-687,'playerOne');
        player[2] = game.add.sprite(window.outerWidth-1211,window.outerHeight-605,'playerOne');
        player[3] = game.add.sprite(window.outerWidth-1211,window.outerHeight-526,'playerOne');
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
        text[0] = game.add.text(window.outerWidth-1205,window.outerHeight-308, "Chat", { font: "16px Arial", fill: "#ffffffff", align: "center" });
        text[1] = game.add.text(window.outerWidth-1205,window.outerHeight-790, "Game Room", { font: "16px Arial", fill: "#ffffffff", align: "center" });
        text[2] = game.add.text(window.outerWidth-600,window.outerHeight-790, "Game Info", { font: "16px Arial", fill: "#ffffffff", align: "center" });
        text[3] = game.add.text(window.outerWidth-600,window.outerHeight-526, "Invite", { font: "16px Arial", fill: "#ffffffff", align: "center" });
        text[4] = game.add.text(window.outerWidth-1125,window.outerHeight-736, "Name1", { font: "16px Arial", fill: "#ffffffff", align: "center" });
        text[5] = game.add.text(window.outerWidth-1125,window.outerHeight-657, "Name2", { font: "16px Arial", fill: "#ffffffff", align: "center" });
        text[6] = game.add.text(window.outerWidth-1125,window.outerHeight-578, "Name3", { font: "16px Arial", fill: "#ffffffff", align: "center" });
        text[7] = game.add.text(window.outerWidth-1125,window.outerHeight-499, "Name4", { font: "16px Arial", fill: "#ffffffff", align: "center" });
        text[8] = game.add.text(window.outerWidth-600,window.outerHeight-736, "Room Name : Palum", { font: "14px Arial", fill: "#ffffffff", align: "center" });
        text[9] = game.add.text(window.outerWidth-600,window.outerHeight-710, "Status : Locked Room", { font: "14px Arial", fill: "#ffffffff", align: "center" });
=======
        var go = game.add.button(window.outerWidth-325,window.outerHeight-250,'go',goclick,this);
        var exit = game.add.button(window.outerWidth-175,window.outerHeight-250,'exit',exitclick,this);
        var playerBox = [];
        playerBox[0] = game.add.sprite(window.outerWidth-1525,window.outerHeight-800,'playerbox');
        playerBox[1] = game.add.sprite(window.outerWidth-925,window.outerHeight-800,'playerbox');
        playerBox[2] = game.add.sprite(window.outerWidth-1525,window.outerHeight-500,'playerbox');
        playerBox[3] = game.add.sprite(window.outerWidth-925,window.outerHeight-500,'playerbox');
        playerBox[0].scale.setTo(1,0.8);
        playerBox[1].scale.setTo(1,0.8);
        playerBox[2].scale.setTo(1,0.8);
        playerBox[3].scale.setTo(1,0.8);
        var player = [];
        player[0] = game.add.sprite(window.outerWidth-1425,window.outerHeight-700,'playerOne');
        player[1] = game.add.sprite(window.outerWidth-825,window.outerHeight-700,'playerOne');
        player[2] = game.add.sprite(window.outerWidth-1425,window.outerHeight-400,'playerOne');
        player[3] = game.add.sprite(window.outerWidth-825,window.outerHeight-400,'playerOne');
        player[0].width=150;
        player[0].height=150;
        player[1].width=150;
        player[1].height=150;
        player[2].width=150;
        player[2].height=150;
        player[3].width=150;
        player[3].height=150;
        var info = game.add.sprite(window.outerWidth-350,window.outerHeight-850,'info');
        info.width=350;
        info.height=625;
        var style = { font: "30px Arial", fill: "#ff0044", align: "center" };
        var t =[];
        t[0]= game.add.text(window.outerWidth-1225,window.outerHeight-700, "player1name", style);
        t[1]= game.add.text(window.outerWidth-625,window.outerHeight-700, "player2name", style);
        t[2]= game.add.text(window.outerWidth-1225,window.outerHeight-400, "player3name", style);
        t[3]= game.add.text(window.outerWidth-625,window.outerHeight-400, "player4name", style);
        var style2 = { font:"20px Arial", fill:"000000",align: "center"};
        t[4]= game.add.text(window.outerWidth-230,window.outerHeight-650, "Room Name", style2);
        t[5]= game.add.text(window.outerWidth-230,window.outerHeight-600, "locked", style2);
        t[6]= game.add.text(window.outerWidth-230,window.outerHeight-550, "Friend 1", style2);
        t[7]= game.add.text(window.outerWidth-230,window.outerHeight-500, "Friend 2", style2);
>>>>>>> 4c5796b1618f6c186bac28d45fb0ece3e7abc0b4
    }


}
function goclick(){
    var go = prompt("peter"," SHUT UP ");
}
function exitclick(){
    game.state.start('lobby');
}