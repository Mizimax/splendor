var button = [];
var text = [];
var coinNum = [];
coinNum[0] = 0;
coinNum[1] = 0;
coinNum[2] = 0;
coinNum[3] = 0;
coinNum[4] = 0;
coinNum[5] = 0;
var detail = [];
var turn = 1;
var send;
var garlax2;
var chat2;
var chat_h;
var scroller2;
var text2 = [];
var message2 = [];
var block2;
var start_text = 0;
var InfoCardLv1 = [];
var InfoCardLv2 = [];
var InfoCardLv3 = [];
var Noble = [];
var coinLeft =[];
for (var i = 0; i<6;i++){
  if (i<5){
    coinLeft[i]=7;
  }
  else{
    coinLeft[i]=5
  }
}
var InfoPlayer = [];
InfoPlayer[1] = {
  playerName: "Player1",
  blueCoin: 0,
  whiteCoin: 0,
  redCoin: 0,
  greenCoin: 0,
  blackCoin: 0,
  cardblack: 0,
  cardblue: 0,
  cardred: 0,
  cardgreen: 0,
  cardwhite: 0,
  goldCoin: 0,
  score:0,
};
InfoPlayer[2] = {
  playerName: "Player2",
  blueCoin: 0,
  whiteCoin: 0,
  redCoin: 0,
  greenCoin: 0,
  blackCoin: 0,
  cardblack: 0,
  cardblue: 0,
  cardred: 0,
  cardgreen: 0,
  cardwhite: 0,
  goldCoin: 0,
  score:0
};
InfoPlayer[3] = {
  playerName: "Player3",
  blueCoin: 0,
  whiteCoin: 0,
  redCoin: 0,
  greenCoin: 0,
  blackCoin: 0,
  cardblack: 0,
  cardblue: 0,
  cardred: 0,
  cardgreen: 0,
  cardwhite: 0,
  goldCoin: 0,
  score:0
};
InfoPlayer[4] = {
  playerName: "Player4",
  blueCoin: 0,
  whiteCoin: 0,
  redCoin: 0,
  greenCoin: 0,
  blackCoin: 0,
  cardblack: 0,
  cardblue: 0,
  cardred: 0,
  cardgreen: 0,
  cardwhite: 0,
  goldCoin: 0,
  score:0
};
var aImageFiles = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40"
];
var aImageFiles2 = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30"
];
var aImageFiles3 = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20"
];
var aImageFiles4 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var rand = [];
var rand2 = [];
var rand3 = [];
var rand4 = [];
var count = 0;
var gamestate = {
  preload: function() {
    this.load.image("BG", "image/BG_game_test.jpg");
    this.load.image("score", "image/score.png");
    //color
    this.load.image("blue", "image/color/blue.gif");
    this.load.image("black", "image/color/black.jpg");
    this.load.image("red", "image/color/red.jpg");
    this.load.image("green", "image/color/green.png");
    this.load.image("white", "image/color/white.jpg");
    this.load.image("gray", "image/color/gray.png");
    //profile
    this.load.image("player1", "image/profile/music.png");
    this.load.image("player2", "image/profile/satchan.png");
    this.load.image("player3", "image/profile/noey.png");
    this.load.image("player4", "image/profile/pun.png");
    //level 1-3
    game.load.image("galaxy", "assets/galaxy.jpg");
    game.load.image("chat_head", "assets/chat_box.png");
    game.load.image("chat", "assets/send.png");
    //cardVar
    for (var i = 0; i < 40; i++) {
      InfoCardLv1[i] = {
        reqBlue: 1,
        reqWhite: 1,
        reqRed: 1,
        reqGreen: 1,
        reqBlack: 1,
        addBlue: 1,
        addWhite: 1,
        addRed: 1,
        addGreen: 1,
        addBlack: 1,
        score: 1
      };
    }
    for (var i = 0; i < 30; i++) {
      InfoCardLv2[i] = {
        reqBlue: 1,
        reqWhite: 1,
        reqRed: 1,
        reqGreen: 1,
        reqBlack: 1,
        addBlue: 1,
        addWhite: 1,
        addRed: 1,
        addGreen: 1,
        addBlack: 1,
        score: 1
      };
    }
    for (var i = 0; i < 20; i++) {
      InfoCardLv3[i] = {
        reqBlue: 1,
        reqWhite: 1,
        reqRed: 1,
        reqGreen: 1,
        reqBlack: 1,
        addBlue: 1,
        addWhite: 1,
        addRed: 1,
        addGreen: 1,
        addBlack: 1,
        score: 1
      };
    }
    for (var i = 0; i < 10; i++) {
      Noble[i] = {
        reqBlue: 1,
        reqWhite: 1,
        reqRed: 1,
        reqGreen: 1,
        reqBlack: 1,
        score: 1
      };
    }
    //chat
    for (i = 1; i <= 40; i++) {
      this.load.image("level1_" + i, "image/Level1/" + i + ".png");
    }
    for (i = 1; i <= 30; i++) {
      this.load.image("level2_" + i, "image/Level2/" + i + ".png");
    }
    for (i = 1; i <= 20; i++) {
      this.load.image("level3_" + i, "image/Level3/" + i + ".png");
    }
    //confirmCancel
    this.load.image("right", "image/right.png");
    this.load.image("wrong", "image/wrong.png");
    //misc
    this.load.image("lilBlue", "image/misc/blue.png");
    this.load.image("lilWhite", "image/misc/white.png");
    this.load.image("lilRed", "image/misc/red.png");
    this.load.image("lilGreen", "image/misc/green.png");
    this.load.image("lilBlack", "image/misc/black.png");
    this.load.image("lilGold", "image/misc/Eflower.png");
    this.load.image("popup", "image/misc/newpopup.png");
    this.load.image("exitpopup", "image/misc/exit.png");
    //Noble
    for (i = 0; i < 5; i++) {
      var randIndex4 = Math.floor(Math.random() * aImageFiles4.length);
      var randImage4 = aImageFiles4[randIndex4];
      this.load.image(
        "level4_" + randImage4,
        "image/Level4/" + randImage4 + ".png"
      );
      rand4[i] = "level4_" + randImage4;
      aImageFiles4.splice(randIndex4, 1);
    }
    //level3
    for (i = 0; i < 4; i++) {
      var randIndex3 = Math.floor(Math.random() * aImageFiles3.length);
      var randImage3 = aImageFiles3[randIndex3];
      rand3[i] = "level3_" + randImage3;
      aImageFiles3.splice(randIndex3, 1);
     console.log(aImageFiles3);
    }
    //level2
    for (i = 0; i < 4; i++) {
      var randIndex2 = Math.floor(Math.random() * aImageFiles2.length);
      var randImage2 = aImageFiles2[randIndex2];
      rand2[i] = "level2_" + randImage2;
      aImageFiles2.splice(randIndex2, 1);
    }
    //level1
    for (i = 0; i < 4; i++) {
      var randIndex = Math.floor(Math.random() * aImageFiles.length);
      var randImage = aImageFiles[randIndex];
      rand[i] = "level1_" + randImage;
      aImageFiles.splice(randIndex, 1);
    }

    //deck_level1-3
    this.load.image("level1_BG", "image/level1/BG_1.png");
    this.load.image("level2_BG", "image/level2/BG_2.png");
    this.load.image("level3_BG", "image/level3/BG_3.png");
    //coin
    this.load.image("coinBlack", "image/coin/Coin_black.png");
    this.load.image("coinGold", "image/coin/Coin_gold.png");
    this.load.image("coinBlue", "image/coin/Coin_blue.png");
    this.load.image("coinGreen", "image/coin/Coin_green.png");
    this.load.image("coinRed", "image/coin/Coin_red.png");
    this.load.image("coinWhite", "image/coin/Coin_white.png");
  },
  create: function() {
    x = window.outerWidth / 12; //row
    y = window.outerHeight / 4; //col

    turn = turn % 4;
    /*if (turn == 0) {
      turn += 4;
    }*/
    this.BG = this.game.add.sprite(0, 0, "BG").scale.setTo(1.5);

    this.player1 = this.game.add.sprite(0, 0.5 * y - 25, "player1");
    this.player2 = this.game.add.sprite(0, y, "player2");
    this.player3 = this.game.add.sprite(0, 1.5 * y + 25, "player3");

    this.player4 = this.game.add.sprite(3 * x, 3.5 * y - 35, "player4");
    this.gray = this.game.add
      .sprite(4 * x - 6, 3.5 * y - 35, "gray")
      .scale.setTo(5.35, 1.22);
    this.blue = this.game.add.sprite(4 * x + 10, 3.5 * y - 25, "blue");
    this.white = this.game.add.sprite(4.5 * x + 46, 3.5 * y - 25, "white");
    this.red = this.game.add.sprite(5.5 * x + 18, 3.5 * y - 25, "red");
    this.green = this.game.add.sprite(6.5 * x - 10, 3.5 * y - 25, "green");
    this.black = this.game.add.sprite(7 * x + 27, 3.5 * y - 25, "black");

    this.level1_BG = this.game.add.sprite(3 * x - 20, 2 * y + 40, "level1_BG");
    this.level2_BG = this.game.add.sprite(
      3 * x - 20,
      1.5 * y - 40,
      "level2_BG"
    );
    this.level3_BG = this.game.add.sprite(
      3 * x - 20,
      0.5 * y - 25,
      "level3_BG"
    );
    //level1
    button[0] = game.add.button(4 * x, 2 * y + 40, rand[0]);
    button[0].events.onInputDown.add(function() {
      cardlevel_1(button[0], 4 * x, 2 * y + 40,0);
    });
    button[0].inputEnabled = true;
    button[1] = game.add.button(4 * x + 140, 2 * y + 40, rand[1]);
    button[1].events.onInputDown.add(function() {
      cardlevel_1(button[1], 4 * x + 140, 2 * y + 40,0);
    });
    button[1].inputEnabled = true;
    button[2] = game.add.button(4 * x + 280, 2 * y + 40, rand[2]);
    button[2].events.onInputDown.add(function() {
      cardlevel_1(button[2], 4 * x + 280, 2 * y + 40,0);
    });
    button[2].inputEnabled = true;
    button[3] = game.add.button(4 * x + 420, 2 * y + 40, rand[3]);
    button[3].events.onInputDown.add(function() {
      cardlevel_1(button[3], 4 * x + 420, 2 * y + 40,0);
    });
    button[3].inputEnabled = true;

    //level2
    button[4] = game.add.button(4 * x, 1.5 * y - 40, rand2[0]);
    button[4].events.onInputDown.add(function() {
      cardlevel_2(button[4], 4 * x, 1.5 * y - 40,0);
    });
    button[4].inputEnabled = true;
    button[5] = game.add.button(4 * x + 140, 1.5 * y - 40, rand2[1]);
    button[5].events.onInputDown.add(function() {
      cardlevel_2(button[5], 4 * x + 140, 1.5 * y - 40,0);
    });
    button[5].inputEnabled = true;
    button[6] = game.add.button(4 * x + 280, 1.5 * y - 40, rand2[2]);
    button[6].events.onInputDown.add(function() {
      cardlevel_2(button[6], 4 * x + 280, 1.5 * y - 40,0);
    });
    button[6].inputEnabled = true;
    button[7] = game.add.button(4 * x + 420, 1.5 * y - 40, rand2[3]);
    button[7].events.onInputDown.add(function() {
      cardlevel_2(button[7], 4 * x + 420, 1.5 * y - 40,0);
    });
    button[7].inputEnabled = true;

    //level3
    button[8] = game.add.button(4 * x, 0.5 * y - 25, rand3[0]);
    button[8].events.onInputDown.add(function() {
      cardlevel_3(button[8], 4 * x, 0.5 * y - 25,0);
    });
    button[8].inputEnabled = true;
    button[9] = game.add.button(4 * x + 140, 0.5 * y - 25, rand3[1]);
    button[9].events.onInputDown.add(function() {
      cardlevel_3(button[9], 4 * x + 140, 0.5 * y - 25,0);
    });
    button[9].inputEnabled = true;
    button[10] = game.add.button(4 * x + 280, 0.5 * y - 25, rand3[2]);
    button[10].events.onInputDown.add(function() {
      cardlevel_3(button[10], 4 * x + 280, 0.5 * y - 25,0);
    });
    button[10].inputEnabled = true;
    button[11] = game.add.button(4 * x + 420, 0.5 * y - 25, rand3[3]);
    button[11].events.onInputDown.add(function() {
      cardlevel_3(button[11], 4 * x + 420, 0.5 * y - 25,0);
    });
    button[11].inputEnabled = true;
    //coin
    button[12] = game.add.button(
      8 * x + 50,
      0.5 * y - 25,
      "coinBlue",
      click_coin,
      this
    );
    button[12].events.onInputDown.add(function() {
      click_coin("blue");
    });
    button[12].inputEnabled = true;
    button[13] = game.add.button(
      8 * x + 50,
      y - 45,
      "coinWhite",
      click_coin,
      this
    );
    button[13].events.onInputDown.add(function() {
      click_coin("white");
    });
    button[13].inputEnabled = true;
    button[14] = game.add.button(
      8 * x + 50,
      y + 40,
      "coinRed",
      click_coin,
      this
    );
    button[14].events.onInputDown.add(function() {
      click_coin("red");
    });
    button[14].inputEnabled = true;
    button[15] = game.add.button(
      8 * x + 50,
      1.5 * y + 20,
      "coinGreen",
      click_coin,
      this
    );
    button[15].events.onInputDown.add(function() {
      click_coin("green");
    });
    button[15].inputEnabled = true;
    button[16] = game.add.button(
      8 * x + 50,
      2 * y - 5,
      "coinBlack",
      click_coin,
      this
    );
    button[16].events.onInputDown.add(function() {
      click_coin("black");
    });
    button[16].inputEnabled = true;
    button[17] = game.add.button(
      8 * x + 50,
      2.5 * y - 25,
      "coinGold",
      click_coin,
      this
    );
    button[17].events.onInputDown.add(function() {
      click_coin("gold");
    });
    button[17].inputEnabled = true;

    //Noble
    button[18] = game.add.button(10 * x - 25, 0.5 * y + 25, rand4[0]);
    button[18].events.onInputDown.add(function() {
      click_Noble(button[18],0);
    });
    button[18].inputEnabled = true;
    button[19] = game.add.button(10 * x - 25, y + 75, rand4[1]);
    button[19].events.onInputDown.add(function() {
      click_Noble(button[19],0);
    });
    button[19].inputEnabled = true;
    button[20] = game.add.button(10 * x - 25, 2 * y + 25, rand4[2]);
    button[20].events.onInputDown.add(function() {
      click_Noble(button[20],0);
    });
    button[20].inputEnabled = true;
    button[21] = game.add.button(11 * x, y - 25, rand4[3]);
    button[21].events.onInputDown.add(function() {
      click_Noble(button[21],0);
    });
    button[21].inputEnabled = true;
    button[22] = game.add.button(11 * x, 1.5 * y + 40, rand4[4]);
    button[22].events.onInputDown.add(function() {
      click_Noble(button[22],0);
    });
    button[22].inputEnabled = true;
    //showscore
    button[23] = game.add.button(x + 50, 0.5 * y, "score", function() {
      showScore(5 * x, 2 * y);
    });
    button[23].inputEnabled = true;
    //RightWrong
    button[24] = game.add.button(8 * x + 95, 3 * y - 35, "right");
    button[24].width = 30;
    button[24].height = 30;
    button[24].events.onInputDown.add(function() {
      OhRight();
    });
    button[24].inputEnabled = true;
    button[25] = game.add.button(8 * x + 50, 3 * y - 35, "wrong");
    button[25].width = 30;
    button[25].height = 30;
    button[25].events.onInputDown.add(function() {
      ohCancel();
    });
    button[25].inputEnabled = true;
    //playerInfo
    detail[0] = this.game.add.sprite(4 * x + 15, 3.5 * y - 15, "coinBlue");
    detail[0].scale.setTo(0.5);
    detail[1] = this.game.add.sprite(5 * x - 13, 3.5 * y - 15, "coinWhite");
    detail[1].scale.setTo(0.5);
    detail[2] = this.game.add.sprite(6 * x - 40, 3.5 * y - 15, "coinRed");
    detail[2].scale.setTo(0.5);
    detail[3] = this.game.add.sprite(7 * x - 70, 3.5 * y - 15, "coinGreen");
    detail[3].scale.setTo(0.5);
    detail[4] = this.game.add.sprite(8 * x - 95, 3.5 * y - 15, "coinBlack");
    detail[4].scale.setTo(0.5);
    detail[5] = this.game.add.sprite(4 * x + 20, 3.5 * y + 30, "lilBlue");
    detail[5].scale.setTo(0.8);
    detail[6] = this.game.add.sprite(5 * x - 8, 3.5 * y + 30, "lilBlue");
    detail[6].scale.setTo(0.8);
    detail[7] = this.game.add.sprite(6 * x - 35, 3.5 * y + 30, "lilBlue");
    detail[7].scale.setTo(0.8);
    detail[8] = this.game.add.sprite(7 * x - 65, 3.5 * y + 30, "lilBlue");
    detail[8].scale.setTo(0.8);
    detail[9] = this.game.add.sprite(8 * x - 90, 3.5 * y + 30, "lilBlue");
    detail[9].scale.setTo(0.8);
    //coinClickedCount
    text[0] = game.add.text(8 * x + 50, 3 * y, "Blue:   " + coinNum[0], {
      font: "10px Arial",
      fill: "#ffffff",
      align: "center"
    });
    text[1] = game.add.text(8 * x + 50, 3 * y + 11, "White: " + coinNum[1], {
      font: "10px Arial",
      fill: "#ffffff",
      align: "center"
    });
    text[2] = game.add.text(8 * x + 50, 3 * y + 22, "Red:    " + coinNum[2], {
      font: "10px Arial",
      fill: "#ffffff",
      align: "center"
    });
    text[3] = game.add.text(8 * x + 50, 3 * y + 33, "Green: " + coinNum[3], {
      font: "10px Arial",
      fill: "#ffffff",
      align: "center"
    });
    text[4] = game.add.text(8 * x + 50, 3 * y + 44, "Black:  " + coinNum[4], {
      font: "10px Arial",
      fill: "#ffffff",
      align: "center"
    });
    text[22] = game.add.text(8 * x + 50, 3 * y + 55, "Gold:   " + coinNum[5], {
      font: "10px Arial",
      fill: "#ffffff",
      align: "center"
    });
    //PlayerInfo
    text[5] = game.add.text(
      4 * x + 55,
      3.5 * y - 15,
      ": " + InfoPlayer[1].blueCoin,
      {
        font: "30px Arial",
        fill: "#ff00ff",
        align: "center"
      }
    );
    text[6] = game.add.text(
      5 * x + 27,
      3.5 * y - 15,
      ": " + InfoPlayer[1].whiteCoin,
      {
        font: "30px Arial",
        fill: "#ff00ff",
        align: "center"
      }
    );
    text[7] = game.add.text(6 * x, 3.5 * y - 15, ": " + InfoPlayer[1].redCoin, {
      font: "30px Arial",
      fill: "#ff00ff",
      align: "center"
    });
    text[8] = game.add.text(
      7 * x - 30,
      3.5 * y - 15,
      ": " + InfoPlayer[1].greenCoin,
      {
        font: "30px Arial",
        fill: "#ff00ff",
        align: "center"
      }
    );
    text[9] = game.add.text(
      8 * x - 55,
      3.5 * y - 15,
      ": " + InfoPlayer[1].blackCoin,
      {
        font: "30px Arial",
        fill: "#ff00ff",
        align: "center"
      }
    );
    text[10] = game.add.text(
      4 * x + 55,
      3.5 * y + 25,
      ": " + InfoPlayer[1].cardblue,
      {
        font: "30px Arial",
        fill: "#ff00ff",
        align: "center"
      }
    );
    text[11] = game.add.text(
      5 * x + 27,
      3.5 * y + 25,
      ": " + InfoPlayer[1].cardwhite,
      {
        font: "30px Arial",
        fill: "#ff00ff",
        align: "center"
      }
    );
    text[12] = game.add.text(
      6 * x,
      3.5 * y + 25,
      ": " + InfoPlayer[1].cardred,
      {
        font: "30px Arial",
        fill: "#ff00ff",
        align: "center"
      }
    );
    text[13] = game.add.text(
      7 * x - 30,
      3.5 * y + 25,
      ": " + InfoPlayer[1].cardgreen,
      {
        font: "30px Arial",
        fill: "#ff00ff",
        align: "center"
      }
    );
    text[14] = game.add.text(
      8 * x - 55,
      3.5 * y + 25,
      ": " + InfoPlayer[1].cardblack,
      {
        font: "30px Arial",
        fill: "#ff00ff",
        align: "center"
      }
    );
    text[15] = game.add.text(8 * x + 80, 3.5 * y + 40, "Total 0/10", {
      font: "25px Arial",
      fill: "#ffffff",
      align: "center"
    });
    // 7/7
    text[16] = game.add.text(10 * x - 100, 0.5 * y, coinLeft[0]+"/7", {
      font: "25px Arial",
      fill: "#ffffff",
      align: "center"
    });
    text[17] = game.add.text(10 * x - 100, y - 20, coinLeft[1]+"/7", {
      font: "25px Arial",
      fill: "#ffffff",
      align: "center"
    });
    text[18] = game.add.text(10 * x - 100, y + 60, coinLeft[2]+"/7", {
      font: "25px Arial",
      fill: "#ffffff",
      align: "center"
    });
    text[19] = game.add.text(10 * x - 100, 1.5 * y + 40, coinLeft[3]+"/7", {
      font: "25px Arial",
      fill: "#ffffff",
      align: "center"
    });
    text[20] = game.add.text(10 * x - 100, 2 * y + 15, coinLeft[4]+"/7", {
      font: "25px Arial",
      fill: "#ffffff",
      align: "center"
    });
    text[21] = game.add.text(10 * x - 100, 2.5 * y - 5, coinLeft[5]+"/5", {
      font: "25px Arial",
      fill: "#ffffff",
      align: "center"
    });
    //reservedCard
    button[26] = game.add.button(8 * x + 25, 3.5 * y + 30, "lilGold");

    //chat  input
    chat2 = game.add.inputField(game.width * 0.001, game.height * 0.95, {
      width: 200,
      height: 20,
      borderRadius: 6,
      zomm: true,
      placeHolder: "   Message......"
    });
    chat2.inputEnabled = true;
    chat2.focusOnenter = true;
    chat2.bringToTop();
    //chat bg
    galax2 = game.add.image(chat2.x, chat2.y - 205, "galaxy");
    galax2.scale.setTo(300 / galax2.width, 200 / galax2.height);
    galax2.alpha = 0.45;
    send = game.add.button(
      chat2.x + 200 + 50,
      chat2.y + 10,
      "chat",
      ChatClick2,
      this
    );
    //chat send button
    send.inputEnabled = true;
    send.anchor.setTo(0.5, 0.5);
    send.scale.setTo(1, 30 / 29);
    send.onInputOver.add(function() {
      this.game.canvas.style.cursor = "pointer";
      game.add
        .tween(send.scale)
        .to({ x: 100 / 80, y: 35 / 29 }, 400, Phaser.Easing.Back.Out, true, 0);
    });
    send.onInputOut.add(function() {
      this.game.canvas.style.cursor = "default";
      game.add
        .tween(send.scale)
        .to({ x: 80 / 80, y: 30 / 29 }, 200, Phaser.Easing.Back.In, true, 0);
    });
    //chat scroller
    scroller2 = game.add.existing(
      new ScrollableArea(chat2.x, chat2.y - 200, 300, 190)
    );
    chat_h = game.add.button(galax2.x, galax2.y, "chat_head", ChatDown2, this);
    chat_h.inputEnabled = true;
    chat_h.scale.setTo(300 / chat_h.width, 20 / chat_h.height);
    chat_h.onInputOver.add(function() {
      this.game.canvas.style.cursor = "pointer";
      chat_h.alpha = 0.3;
    });
    chat_h.onInputOut.add(function() {
      this.game.canvas.style.cursor = "default";
      chat_h.alpha = 1;
    });
    scroller2.start(); // scroller show
  },
  render: function() {}
};

function cardlevel_1(card, x, y,cardID) {
  console.log(turn);
  var person = confirm("Are you sure in this card level 1?");
  if (person == true) {
    if(InfoCardLv1[cardID].reqBlue<=InfoPlayer[1].blueCoin+InfoPlayer[1].cardblue&&InfoCardLv1[cardID].reqWhite<=InfoPlayer[1].whiteCoin+InfoPlayer[1].cardwhite&&InfoCardLv1[cardID].reqRed<=InfoPlayer[1].redCoin+InfoPlayer[1].cardred&&InfoCardLv1[cardID].reqGreen<=InfoPlayer[1].greenCoin+InfoPlayer[1].cardgreen&&InfoCardLv1[cardID].reqBlack<=InfoPlayer[1].blackCoin+InfoPlayer[1].cardblack){
      //updateInfo
      var unsign =[];
      unsign[0] = InfoCardLv1[cardID].reqBlue-InfoPlayer[1].cardblue
      unsign[1] = InfoCardLv1[cardID].reqWhite-InfoPlayer[1].cardwhite
      unsign[2] = InfoCardLv1[cardID].reqRed-InfoPlayer[1].cardred
      unsign[3] = InfoCardLv1[cardID].reqGreen-InfoPlayer[1].cardgreen
      unsign[4] = InfoCardLv1[cardID].reqBlack-InfoPlayer[1].cardblack
      for(var j = 0 ; j < 5 ; j++){
        if(unsign[j]<0){
          unsign[j]=0;
        }
      } 
      InfoPlayer[1].blueCoin-=unsign[0];
      InfoPlayer[1].whiteCoin-=unsign[1];
      InfoPlayer[1].redCoin-=unsign[2];
      InfoPlayer[1].greenCoin-=unsign[3];
      InfoPlayer[1].blackCoin-=unsign[4];
      InfoPlayer[1].cardblue+=InfoCardLv1[cardID].addBlue;
      InfoPlayer[1].cardwhite+=InfoCardLv1[cardID].addWhite;
      InfoPlayer[1].cardred+=InfoCardLv1[cardID].addRed;
      InfoPlayer[1].cardgreen+=InfoCardLv1[cardID].addGreen;
      InfoPlayer[1].cardblack+=InfoCardLv1[cardID].addBlack;
      InfoPlayer[1].score+=InfoCardLv1[cardID].score;
      text[5].setText(": " + InfoPlayer[1].blueCoin);
      text[6].setText(": " + InfoPlayer[1].whiteCoin);
      text[7].setText(": " + InfoPlayer[1].redCoin);
      text[8].setText(": " + InfoPlayer[1].greenCoin);
      text[9].setText(": " + InfoPlayer[1].blackCoin);
      text[10].setText(": "+ InfoPlayer[1].cardblue);
      text[11].setText(": "+ InfoPlayer[1].cardwhite);
      text[12].setText(": "+ InfoPlayer[1].cardred);
      text[13].setText(": "+ InfoPlayer[1].cardgreen);
      text[14].setText(": "+ InfoPlayer[1].cardblack);
      //randomCardPic
      card.destroy(card);
      randIndex = Math.floor(Math.random() * aImageFiles.length);
      if (aImageFiles.length == 0) {
        aImageFiles.splice(randIndex, 0);
      } else {
        randImage = aImageFiles[randIndex];
        game.load.image(
          "level1_" + randImage,
          "image/Level1/" + randImage + ".png"
        );
        rand[0] = "level1_" + randImage;
        card = game.add.button(x, y, rand[0]);
        card.events.onInputDown.add(function() {
          cardlevel_1(card, x, y,0);
        });
        aImageFiles.splice(randIndex, 1);
      }
      turn += 1;
      turn = turn % 4;
      if (turn % 4 == 0) {
        turn += 4;
      }
    }
    else{
      //case not enough coin
      testMessageBox("insufficient");
    }
  }
  ohCancel();
}
function cardlevel_2(card, x, y,cardID) {
  console.log(turn);
  var person = confirm("Are you sure in this card level 2?");
  if (person == true) {
    console.log(cardID)
    if(InfoCardLv2[cardID].reqBlue<=InfoPlayer[1].blueCoin+InfoPlayer[1].cardblue&&InfoCardLv2[cardID].reqWhite<=InfoPlayer[1].whiteCoin+InfoPlayer[1].cardwhite&&InfoCardLv2[cardID].reqRed<=InfoPlayer[1].redCoin+InfoPlayer[1].cardred&&InfoCardLv2[cardID].reqGreen<=InfoPlayer[1].greenCoin+InfoPlayer[1].cardgreen&&InfoCardLv2[cardID].reqBlack<=InfoPlayer[1].blackCoin+InfoPlayer[1].cardblack){
      //updateInfo
      var unsign =[];
      unsign[0] = InfoCardLv2[cardID].reqBlue-InfoPlayer[1].cardblue
      unsign[1] = InfoCardLv2[cardID].reqWhite-InfoPlayer[1].cardwhite
      unsign[2] = InfoCardLv2[cardID].reqRed-InfoPlayer[1].cardred
      unsign[3] = InfoCardLv2[cardID].reqGreen-InfoPlayer[1].cardgreen
      unsign[4] = InfoCardLv2[cardID].reqBlack-InfoPlayer[1].cardblack
      for(var j = 0 ; j < 5 ; j++){
        if(unsign[j]<0){
          unsign[j]=0;
        }
      } 
      InfoPlayer[1].blueCoin-=unsign[0];
      InfoPlayer[1].whiteCoin-=unsign[1];
      InfoPlayer[1].redCoin-=unsign[2];
      InfoPlayer[1].greenCoin-=unsign[3];
      InfoPlayer[1].blackCoin-=unsign[4];
      InfoPlayer[1].cardblue+=InfoCardLv2[cardID].addBlue;
      InfoPlayer[1].cardwhite+=InfoCardLv2[cardID].addWhite;
      InfoPlayer[1].cardred+=InfoCardLv2[cardID].addRed;
      InfoPlayer[1].cardgreen+=InfoCardLv2[cardID].addGreen;
      InfoPlayer[1].cardblack+=InfoCardLv2[cardID].addBlack;
      InfoPlayer[1].score+=InfoCardLv2[cardID].score;
      text[5].setText(": " + InfoPlayer[1].blueCoin);
      text[6].setText(": " + InfoPlayer[1].whiteCoin);
      text[7].setText(": " + InfoPlayer[1].redCoin);
      text[8].setText(": " + InfoPlayer[1].greenCoin);
      text[9].setText(": " + InfoPlayer[1].blackCoin);
      text[10].setText(": "+ InfoPlayer[1].cardblue);
      text[11].setText(": "+ InfoPlayer[1].cardwhite);
      text[12].setText(": "+ InfoPlayer[1].cardred);
      text[13].setText(": "+ InfoPlayer[1].cardgreen);
      text[14].setText(": "+ InfoPlayer[1].cardblack);
      //randomCardPic
      card.destroy(card);
      randIndex2 = Math.floor(Math.random() * aImageFiles2.length);
      if (aImageFiles2.length == 0) {
        aImageFiles2.splice(randIndex2, 0);
      } else {
        randImage2 = aImageFiles2[randIndex2];
        game.load.image(
          "level2_" + randImage2,
          "image/Level2/" + randImage2 + ".png"
        );
        rand2[0] = "level2_" + randImage2;
        card = game.add.button(x, y, rand2[0]);
        card.events.onInputDown.add(function() {
          cardlevel_2(card, x, y, 0);
        });
        aImageFiles2.splice(randIndex2, 1);
      }
      turn += 1;
      turn = turn % 4;
      if (turn % 4 == 0) {
        turn += 4;
      }
    }
    else{
      //case not enough coin
      testMessageBox("insufficient");
    }
  }
  ohCancel();
}
function cardlevel_3(card, x, y,cardID) {
  console.log(turn);
  var person = confirm("Are you sure in this card level 3?");
  if (person == true) {
    if(InfoCardLv3[cardID].reqBlue<=InfoPlayer[1].blueCoin+InfoPlayer[1].cardblue&&InfoCardLv3[cardID].reqWhite<=InfoPlayer[1].whiteCoin+InfoPlayer[1].cardwhite&&InfoCardLv3[cardID].reqRed<=InfoPlayer[1].redCoin+InfoPlayer[1].cardred&&InfoCardLv3[cardID].reqGreen<=InfoPlayer[1].greenCoin+InfoPlayer[1].cardgreen&&InfoCardLv3[cardID].reqBlack<=InfoPlayer[1].blackCoin+InfoPlayer[1].cardblack){
      //updateInfo
      var unsign =[];
      unsign[0] = InfoCardLv3[cardID].reqBlue-InfoPlayer[1].cardblue
      unsign[1] = InfoCardLv3[cardID].reqWhite-InfoPlayer[1].cardwhite
      unsign[2] = InfoCardLv3[cardID].reqRed-InfoPlayer[1].cardred
      unsign[3] = InfoCardLv3[cardID].reqGreen-InfoPlayer[1].cardgreen
      unsign[4] = InfoCardLv3[cardID].reqBlack-InfoPlayer[1].cardblack
      for(var j = 0 ; j < 5 ; j++){
        if(unsign[j]<0){
          unsign[j]=0;
        }
      } 
      InfoPlayer[1].blueCoin-=unsign[0];
      InfoPlayer[1].whiteCoin-=unsign[1];
      InfoPlayer[1].redCoin-=unsign[2];
      InfoPlayer[1].greenCoin-=unsign[3];
      InfoPlayer[1].blackCoin-=unsign[4];
      InfoPlayer[1].cardblue+=InfoCardLv3[cardID].addBlue;
      InfoPlayer[1].cardwhite+=InfoCardLv3[cardID].addWhite;
      InfoPlayer[1].cardred+=InfoCardLv3[cardID].addRed;
      InfoPlayer[1].cardgreen+=InfoCardLv3[cardID].addGreen;
      InfoPlayer[1].cardblack+=InfoCardLv3[cardID].addBlack;
      InfoPlayer[1].score+=InfoCardLv3[cardID].score;
      text[5].setText(": " + InfoPlayer[1].blueCoin);
      text[6].setText(": " + InfoPlayer[1].whiteCoin);
      text[7].setText(": " + InfoPlayer[1].redCoin);
      text[8].setText(": " + InfoPlayer[1].greenCoin);
      text[9].setText(": " + InfoPlayer[1].blackCoin);
      text[10].setText(": "+ InfoPlayer[1].cardblue);
      text[11].setText(": "+ InfoPlayer[1].cardwhite);
      text[12].setText(": "+ InfoPlayer[1].cardred);
      text[13].setText(": "+ InfoPlayer[1].cardgreen);
      text[14].setText(": "+ InfoPlayer[1].cardblack);
      //randomCardPic
      card.destroy(card);
      randIndex3 = Math.floor(Math.random() * aImageFiles3.length);
      if (aImageFiles3.length == 0) {
        aImageFiles3.splice(randIndex3, 0);
      } 
      else {
        randImage3 = aImageFiles3[randIndex3];
        game.load.image(
          "level3_" + randImage3,
          "image/Level3/" + randImage3 + ".png"
        );
        rand3[0] = "level3_" + randImage3;
        card = game.add.button(x, y, rand3[0]);
        card.events.onInputDown.add(function() {
          cardlevel_3(card, x, y,0);
        });
        aImageFiles3.splice(randIndex3, 1);
        console.log(aImageFiles3);
      }
      turn += 1;
      turn = turn % 4;
      if (turn % 4 == 0) {
        turn += 4;
      }
    }
    else{
      //case not enough coin
      testMessageBox("insufficient");
    }
  }
  ohCancel();
}
function click_Noble(card,NobleID) {
  var person = confirm("Are you sure in this card Noble?");
  if (person == true) {
    if(InfoPlayer[1].cardblue>=Noble[NobleID].reqBlue&&InfoPlayer[1].cardwhite>=Noble[NobleID].reqWhite&&InfoPlayer[1].cardred>=Noble[NobleID].reqRed&&InfoPlayer[1].cardgreen>=Noble[NobleID].reqGreen&&InfoPlayer[1].cardblack>=Noble[NobleID].reqBlack){
      InfoPlayer[1].score+=Noble[NobleID].score;
      card.destroy(card);
    }
    else{
      testMessageBox("noCard");
    }
    
  }
}
function click_coin(color) {
  if (color == "blue") {
    coinLeft[0]-=1;
    coinNum[0] += 1;
    text[0].setText("Blue:   " + coinNum[0]);
    text[16].setText(coinLeft[0]+"/7");
  } else if (color == "white") {
    coinLeft[1]-=1;
    coinNum[1] += 1;
    text[1].setText("White: " + coinNum[1]);
    text[17].setText(coinLeft[1]+"/7");
  } else if (color == "red") {
    coinLeft[2]-=1;
    coinNum[2] += 1;
    text[2].setText("Red:    " + coinNum[2]);
    text[18].setText(coinLeft[2]+"/7");
  } else if (color == "green") {
    coinLeft[3]-=1;
    coinNum[3] += 1;
    text[3].setText("Green: " + coinNum[3]);
    text[19].setText(coinLeft[3]+"/7");
  } else if (color == "black") {
    coinLeft[4]-=1;
    coinNum[4] += 1;
    text[4].setText("Black:  " + coinNum[4]);
    text[20].setText(coinLeft[4]+"/7");
  }
  else if(color == "gold"){
    coinLeft[5]-=1;
    coinNum[5] += 1;
    text[5].setText("Gold   " + coinNum[5]);
    text[21].setText(coinLeft[5]+"/5");
  }
}
function OhRight() {
  if (turn == 2) {
    InfoPlayer[1].inputEnabled = false;
  }
  var total =
    InfoPlayer[turn].blueCoin +
    InfoPlayer[turn].whiteCoin +
    InfoPlayer[turn].redCoin +
    InfoPlayer[turn].greenCoin +
    InfoPlayer[turn].blackCoin;
  if (
    total + coinNum[0] + coinNum[1] + coinNum[2] + coinNum[3] + coinNum[4] >
    10
  ) {
    testMessageBox("toomuch");
    ohCancel();
  }
  else if(coinNum[5]>0){
    if(coinNum[0]+coinNum[1]+coinNum[2]+coinNum[3]+coinNum[4]>0){
      testMessageBox("format");
      ohCancel();
    }
    else if(coinNum[5]!=1){
      testMessageBox("Gold");
      ohCancel();
    }
    else{
      //pick gold coin
      InfoPlayer[1].goldCoin+=coinNum[5];
      ohCancel();
      updatePlayerInfo();
      console.log(turn);
      turn += 1;
      turn = turn % 4;
      if (turn % 4 == 0) {
        turn += 4;
      }
    }
  } 
  else if (
    coinNum[0] + coinNum[1] + coinNum[2] + coinNum[3] + coinNum[4] <=
    3
  ) {
    if (
      coinNum[0] <= 1 &&
      coinNum[1] <= 1 &&
      coinNum[2] <= 1 &&
      coinNum[3] <= 1 &&
      coinNum[4] <= 1
    ) {
      InfoPlayer[1].blueCoin += coinNum[0];
      InfoPlayer[1].whiteCoin += coinNum[1];
      InfoPlayer[1].redCoin += coinNum[2];
      InfoPlayer[1].greenCoin += coinNum[3];
      InfoPlayer[1].blackCoin += coinNum[4];
      ohCancel();
      updatePlayerInfo();
      console.log(turn);
      turn += 1;
      turn = turn % 4;
      if (turn % 4 == 0) {
        turn += 4;
      }
    } else if (
      coinNum[0] + coinNum[1] + coinNum[2] + coinNum[3] + coinNum[4] < 3 &&
      (coinNum[0] == 2 ||
        coinNum[1] == 2 ||
        coinNum[2] == 2 ||
        coinNum[3] == 2 ||
        coinNum[4] == 2)
    ) {
      InfoPlayer[1].blueCoin += coinNum[0];
      InfoPlayer[1].whiteCoin += coinNum[1];
      InfoPlayer[1].redCoin += coinNum[2];
      InfoPlayer[1].greenCoin += coinNum[3];
      InfoPlayer[1].blackCoin += coinNum[4];
      ohCancel();
      updatePlayerInfo();
      console.log(turn);
      turn += 1;
      turn = turn % 4;
      if (turn % 4 == 0) {
        turn += 4;
      }
    } else {
      testMessageBox("format");
      ohCancel();
    }
  } else {
    testMessageBox("numbe");
    ohCancel();
  }
function updatePlayerInfo(){
  text[5].setText(": " + InfoPlayer[1].blueCoin);
  text[6].setText(": " + InfoPlayer[1].whiteCoin);
  text[7].setText(": " + InfoPlayer[1].redCoin);
  text[8].setText(": " + InfoPlayer[1].greenCoin);
  text[9].setText(": " + InfoPlayer[1].blackCoin);
  text[0].setText("Blue:   " + coinNum[0]);
      text[1].setText("White: " + coinNum[1]);
      text[2].setText("Red:    " + coinNum[2]);
      text[3].setText("Green: " + coinNum[3]);
      text[4].setText("Black:  " + coinNum[4]);
      total =
        InfoPlayer[1].blueCoin +
        InfoPlayer[1].whiteCoin +
        InfoPlayer[1].redCoin +
        InfoPlayer[1].greenCoin +
        InfoPlayer[1].blackCoin+
        InfoPlayer[1].goldCoin;
      text[15].setText("Total " + total + "/10");
}
}
function ohCancel() {
  coinNum[0] = 0;
  text[0].setText("Blue:   " + coinNum[0]);
  coinNum[1] = 0;
  text[1].setText("White: " + coinNum[1]);
  coinNum[2] = 0;
  text[2].setText("Red:    " + coinNum[2]);
  coinNum[3] = 0;
  text[3].setText("Green: " + coinNum[3]);
  coinNum[4] = 0;
  text[4].setText("Black:  " + coinNum[4]);
  coinNum[5] = 0;
  text[22].setText("Gold:   " + coinNum[5]);
  coinLeft[0]= 7-InfoPlayer[1].blueCoin-InfoPlayer[2].blueCoin-InfoPlayer[3].blueCoin-InfoPlayer[4].blueCoin;
  coinLeft[1]= 7-InfoPlayer[1].whiteCoin-InfoPlayer[2].whiteCoin-InfoPlayer[3].whiteCoin-InfoPlayer[4].whiteCoin;
  coinLeft[2]= 7-InfoPlayer[1].redCoin-InfoPlayer[2].redCoin-InfoPlayer[3].redCoin-InfoPlayer[4].redCoin;
  coinLeft[3]= 7-InfoPlayer[1].greenCoin-InfoPlayer[2].greenCoin-InfoPlayer[3].greenCoin-InfoPlayer[4].greenCoin;
  coinLeft[4]= 7-InfoPlayer[1].blackCoin-InfoPlayer[2].blackCoin-InfoPlayer[3].blackCoin-InfoPlayer[4].blackCoin;
  coinLeft[5]= 5-InfoPlayer[1].goldCoin-InfoPlayer[2].goldCoin-InfoPlayer[3].goldCoin-InfoPlayer[4].goldCoin;
  text[16].setText(coinLeft[0]+"/7");
  text[17].setText(coinLeft[1]+"/7");
  text[18].setText(coinLeft[2]+"/7");
  text[19].setText(coinLeft[3]+"/7");
  text[20].setText(coinLeft[4]+"/7");
  text[21].setText(coinLeft[5]+"/5");
  total =
        InfoPlayer[1].blueCoin +
        InfoPlayer[1].whiteCoin +
        InfoPlayer[1].redCoin +
        InfoPlayer[1].greenCoin +
        InfoPlayer[1].blackCoin+
        InfoPlayer[1].goldCoin;
      text[15].setText("Total " + total + "/10");
}
function summit() {
  var person = prompt("มันใจหรอ", "... summit ...");
}
function testMessageBox(type) {
  if (type == "format") {
    this.showMessageBox("Wrong coin picking format!", 5 * x, 2 * y);
  } else if (type == "toomuch") {
    this.showMessageBox("Your total coins exxceed 10!", 5 * x, 2 * y);
  } else if (type == "numbe") {
    this.showMessageBox("You can't pick more than three coins!", 5 * x, 2 * y);
  }
  else if(type=="insufficient"){
    this.showMessageBox("You don't have enough coins!", 5 * x, 2 * y);
  }
  else if(type=="noCard"){
    this.showMessageBox("You don't have enough cards!", 5 * x, 2 * y);
  }
  else if(type=="Gold"){
    this.showMessageBox("You can't pick more than one gold coin!", 5 * x, 2 * y);
  }
}
function showMessageBox(text, w = 300, h = 300) {
  if (this.msgBox) {
    this.msgBox.destroy();
  }
  var msgBox = game.add.group();
  var back = game.add.sprite(0, 0, "popup");
  var closeButton = game.add.sprite(0, 0, "exitpopup");
  var text1 = game.add.text(0, 0, text);
  text1.wordWrap = true;
  text1.wordWrapWidth = w * 0.9;
  back.width = w;
  back.height = h;
  msgBox.add(back);
  msgBox.add(closeButton);
  msgBox.add(text1);
  closeButton.x = back.width / 2 - closeButton.width / 2;
  closeButton.y = back.height - closeButton.height;
  closeButton.inputEnabled = true;
  closeButton.events.onInputDown.add(this.hideBox, this);
  msgBox.x = game.width / 2 - msgBox.width / 2;
  msgBox.y = game.height / 2 - msgBox.height / 2;
  text1.x = back.width / 2 - text1.width / 2;
  text1.y = back.height / 2 - text1.height / 2 - 100;
  this.msgBox = msgBox;
}
function hideBox() {
  this.msgBox.destroy();
}
function showScore(w = 500, h = 500) {
  if (this.scrBox) {
    this.scrBox.destroy();
  }
  var scrBox = game.add.group();
  var back2 = game.add.sprite(0, 0, "popup");
  var closeButton2 = game.add.sprite(0, 0, "exitpopup");
  var scoreNum = [];
  scoreNum[0] = game.add.text(
    0,
    0,
    InfoPlayer[1].blueCoin +
      "\n\n" +
      InfoPlayer[2].blueCoin +
      "\n\n" +
      InfoPlayer[3].blueCoin +
      "\n\n" +
      InfoPlayer[4].blueCoin
  );
  scoreNum[1] = game.add.text(
    0,
    0,
    InfoPlayer[1].whiteCoin +
      "\n\n" +
      InfoPlayer[2].whiteCoin +
      "\n\n" +
      InfoPlayer[3].whiteCoin +
      "\n\n" +
      InfoPlayer[4].whiteCoin
  );
  scoreNum[2] = game.add.text(
    0,
    0,
    InfoPlayer[1].redCoin +
      "\n\n" +
      InfoPlayer[2].redCoin +
      "\n\n" +
      InfoPlayer[3].redCoin +
      "\n\n" +
      InfoPlayer[4].redCoin
  );
  scoreNum[3] = game.add.text(
    0,
    0,
    InfoPlayer[1].greenCoin +
      "\n\n" +
      InfoPlayer[2].greenCoin +
      "\n\n" +
      InfoPlayer[3].greenCoin +
      "\n\n" +
      InfoPlayer[4].greenCoin
  );
  scoreNum[4] = game.add.text(
    0,
    0,
    InfoPlayer[1].blackCoin +
      "\n\n" +
      InfoPlayer[2].blackCoin +
      "\n\n" +
      InfoPlayer[3].blackCoin +
      "\n\n" +
      InfoPlayer[4].blackCoin
  );
  scoreNum[5] = game.add.text(
    0,
    0,
    InfoPlayer[1].cardblue +
      "\n\n" +
      InfoPlayer[2].cardblue +
      "\n\n" +
      InfoPlayer[3].cardblue +
      "\n\n" +
      InfoPlayer[4].cardblue
  );
  scoreNum[6] = game.add.text(
    0,
    0,
    InfoPlayer[1].cardwhite +
      "\n\n" +
      InfoPlayer[2].cardwhite +
      "\n\n" +
      InfoPlayer[3].cardwhite +
      "\n\n" +
      InfoPlayer[4].cardwhite
  );
  scoreNum[7] = game.add.text(
    0,
    0,
    InfoPlayer[1].cardred +
      "\n\n" +
      InfoPlayer[2].cardred +
      "\n\n" +
      InfoPlayer[3].cardred +
      "\n\n" +
      InfoPlayer[4].cardred
  );
  scoreNum[8] = game.add.text(
    0,
    0,
    InfoPlayer[1].cardgreen +
      "\n\n" +
      InfoPlayer[2].cardgreen +
      "\n\n" +
      InfoPlayer[3].cardgreen +
      "\n\n" +
      InfoPlayer[4].cardgreen
  );
  scoreNum[9] = game.add.text(
    0,
    0,
    InfoPlayer[1].cardblack +
      "\n\n" +
      InfoPlayer[2].cardblack +
      "\n\n" +
      InfoPlayer[3].cardblack +
      "\n\n" +
      InfoPlayer[4].cardblack
  );
  scoreNum[10] = game.add.text(
    0,
    0,
    InfoPlayer[1].score +
      "\n\n" +
      InfoPlayer[2].score +
      "\n\n" +
      InfoPlayer[3].score +
      "\n\n" +
      InfoPlayer[4].score
  );
  scoreNum[11] = game.add.text(
    0,
    0,
    InfoPlayer[1].playerName +
      "\n\n" +
      InfoPlayer[2].playerName +
      "\n\n" +
      InfoPlayer[3].playerName +
      "\n\n" +
      InfoPlayer[4].playerName
  );
  var detail2 = [];
  detail2[0] = this.game.add.sprite(0, 0, "coinBlue");
  detail2[0].scale.setTo(0.4);
  detail2[1] = this.game.add.sprite(0, 0, "coinWhite");
  detail2[1].scale.setTo(0.4);
  detail2[2] = this.game.add.sprite(0, 0, "coinRed");
  detail2[2].scale.setTo(0.4);
  detail2[3] = this.game.add.sprite(0, 0, "coinGreen");
  detail2[3].scale.setTo(0.4);
  detail2[4] = this.game.add.sprite(0, 0, "coinBlack");
  detail2[4].scale.setTo(0.4);
  detail2[5] = this.game.add.sprite(0, 0, "lilBlue");
  detail2[5].scale.setTo(0.7);
  detail2[6] = this.game.add.sprite(0, 0, "lilWhite");
  detail2[6].scale.setTo(0.7);
  detail2[7] = this.game.add.sprite(0, 0, "lilRed");
  detail2[7].scale.setTo(0.7);
  detail2[8] = this.game.add.sprite(0, 0, "lilGreen");
  detail2[8].scale.setTo(0.7);
  detail2[9] = this.game.add.sprite(0, 0, "lilBlack");
  detail2[9].scale.setTo(0.7);
  back2.width = w;
  back2.height = h;
  scrBox.add(back2);
  scrBox.add(closeButton2);
  scrBox.add(scoreNum[0]);
  scrBox.add(scoreNum[1]);
  scrBox.add(scoreNum[2]);
  scrBox.add(scoreNum[3]);
  scrBox.add(scoreNum[4]);
  scrBox.add(scoreNum[5]);
  scrBox.add(scoreNum[6]);
  scrBox.add(scoreNum[7]);
  scrBox.add(scoreNum[8]);
  scrBox.add(scoreNum[9]);
  scrBox.add(scoreNum[10]);
  scrBox.add(scoreNum[11]);
  scrBox.add(detail2[0]);
  scrBox.add(detail2[1]);
  scrBox.add(detail2[2]);
  scrBox.add(detail2[3]);
  scrBox.add(detail2[4]);
  scrBox.add(detail2[5]);
  scrBox.add(detail2[6]);
  scrBox.add(detail2[7]);
  scrBox.add(detail2[8]);
  scrBox.add(detail2[9]);
  closeButton2.x = back2.width - 70;
  closeButton2.y = 10;
  closeButton2.inputEnabled = true;
  closeButton2.events.onInputDown.add(this.hideBox2, this);
  scrBox.x = game.width / 2 - scrBox.width / 2;
  scrBox.y = game.height / 2 - scrBox.height / 2;
  scoreNum[0].x = back2.width / 2 - scoreNum[0].width / 2 - 175;
  scoreNum[0].y = back2.height / 2 - scoreNum[0].height / 2 + 10;
  scoreNum[1].x = back2.width / 2 - scoreNum[1].width / 2 - 135;
  scoreNum[1].y = back2.height / 2 - scoreNum[1].height / 2 + 10;
  scoreNum[2].x = back2.width / 2 - scoreNum[2].width / 2 - 95;
  scoreNum[2].y = back2.height / 2 - scoreNum[2].height / 2 + 10;
  scoreNum[3].x = back2.width / 2 - scoreNum[3].width / 2 - 55;
  scoreNum[3].y = back2.height / 2 - scoreNum[3].height / 2 + 10;
  scoreNum[4].x = back2.width / 2 - scoreNum[4].width / 2 - 15;
  scoreNum[4].y = back2.height / 2 - scoreNum[4].height / 2 + 10;
  scoreNum[5].x = back2.width / 2 - scoreNum[5].width / 2 + 25;
  scoreNum[5].y = back2.height / 2 - scoreNum[5].height / 2 + 10;
  scoreNum[6].x = back2.width / 2 - scoreNum[6].width / 2 + 65;
  scoreNum[6].y = back2.height / 2 - scoreNum[6].height / 2 + 10;
  scoreNum[7].x = back2.width / 2 - scoreNum[7].width / 2 + 105;
  scoreNum[7].y = back2.height / 2 - scoreNum[7].height / 2 + 10;
  scoreNum[8].x = back2.width / 2 - scoreNum[8].width / 2 + 145;
  scoreNum[8].y = back2.height / 2 - scoreNum[8].height / 2 + 10;
  scoreNum[9].x = back2.width / 2 - scoreNum[9].width / 2 + 185;
  scoreNum[9].y = back2.height / 2 - scoreNum[9].height / 2 + 10;
  scoreNum[10].x = back2.width / 2 - scoreNum[10].width / 2 + 225;
  scoreNum[10].y = back2.height / 2 - scoreNum[10].height / 2 + 10;
  scoreNum[11].x = 20;
  scoreNum[11].y = back2.height / 2 - scoreNum[10].height / 2 + 10;
  detail2[0].x = back2.width / 2 - scoreNum[0].width / 2 - 182;
  detail2[0].y = back2.height / 2 - scoreNum[0].height / 2 - 30;
  detail2[1].x = back2.width / 2 - scoreNum[1].width / 2 - 142;
  detail2[1].y = back2.height / 2 - scoreNum[1].height / 2 - 30;
  detail2[2].x = back2.width / 2 - scoreNum[2].width / 2 - 102;
  detail2[2].y = back2.height / 2 - scoreNum[2].height / 2 - 30;
  detail2[3].x = back2.width / 2 - scoreNum[3].width / 2 - 62;
  detail2[3].y = back2.height / 2 - scoreNum[3].height / 2 - 30;
  detail2[4].x = back2.width / 2 - scoreNum[4].width / 2 - 22;
  detail2[4].y = back2.height / 2 - scoreNum[4].height / 2 - 30;
  detail2[5].x = back2.width / 2 - scoreNum[5].width / 2 + 22;
  detail2[5].y = back2.height / 2 - scoreNum[5].height / 2 - 30;
  detail2[6].x = back2.width / 2 - scoreNum[6].width / 2 + 62;
  detail2[6].y = back2.height / 2 - scoreNum[6].height / 2 - 30;
  detail2[7].x = back2.width / 2 - scoreNum[7].width / 2 + 102;
  detail2[7].y = back2.height / 2 - scoreNum[7].height / 2 - 30;
  detail2[8].x = back2.width / 2 - scoreNum[8].width / 2 + 142;
  detail2[8].y = back2.height / 2 - scoreNum[8].height / 2 - 30;
  detail2[9].x = back2.width / 2 - scoreNum[9].width / 2 + 181;
  detail2[9].y = back2.height / 2 - scoreNum[9].height / 2 - 30;
  this.scrBox = scrBox;
}
function hideBox2() {
  this.scrBox.destroy();
}
function ChatClick2() {
  if (chat2.value.length > 2) {
    text2[start_text] = chat2.value;
    message2[start_text] = game.make.text(
      10,
      start_text * 22 + 20,
      "Pro : " + chat2.value,
      {
        font: "14px Arial",
        fill: "#000000",
        stroke: "#ffffff",
        strokeThickness: 2
      }
    );
    scroller2.addChild(message2[start_text]);
    block2 = game.make.text(0, start_text * 22 + 35, "", {
      font: "18px Arial"
    });
    scroller2.addChild(block2);
    scroller2.scrollTo(0, block2.y, 10, false);
    chat2.resetText();
    start_text++;
  }
}
function ChatDown2() {
  scroller2.visible = !scroller2.visible;
  galax.visible = !galax.visible;
  chat.visible = !chat.visible;
  send.visible = !send.visible;

  if (!scroller2.visible) {
    chat_h.y = chat.y;
  } else {
    chat_h.y = galax2.y;
  }
}
