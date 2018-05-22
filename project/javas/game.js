var button = [];
var checkcoin = [];
var turn = 1;
var InfoPlayer = [];
InfoPlayer[1] = {
  coin: 0,
  cardblack: 0,
  cardblue: 0,
  cardred: 0,
  cardgreen: 0,
  cardwhite: 0,
  cardgold: 0
};
InfoPlayer[2] = {
  coin: 0,
  cardblack: 0,
  cardblue: 0,
  cardred: 0,
  cardgreen: 0,
  cardwhite: 0,
  cardgold: 0
};
InfoPlayer[3] = {
  coin: 0,
  cardblack: 0,
  cardblue: 0,
  cardred: 0,
  cardgreen: 0,
  cardwhite: 0,
  cardgold: 0
};
InfoPlayer[4] = {
  coin: 0,
  cardblack: 0,
  cardblue: 0,
  cardred: 0,
  cardgreen: 0,
  cardwhite: 0,
  cardgold: 0
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

    this.load.image("popup", "image/exit.png");
    //profile
    this.load.image("player1", "image/profile/music.png");
    this.load.image("player2", "image/profile/satchan.png");
    this.load.image("player3", "image/profile/noey.png");
    this.load.image("player4", "image/profile/pun.png");
    //level 1-3
    for (i = 1; i <= 40; i++) {
      this.load.image("level1_" + i, "image/Level1/" + i + ".png");
    }
    for (i = 1; i <= 30; i++) {
      this.load.image("level2_" + i, "image/Level2/" + i + ".png");
    }
    for (i = 1; i <= 20; i++) {
      this.load.image("level3_" + i, "image/Level3/" + i + ".png");
    }
    //Noble
    for (i = 0; i < 4; i++) {
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
      console.log(aImageFiles2);
    }
    //level1
    for (i = 0; i < 4; i++) {
      var randIndex = Math.floor(Math.random() * aImageFiles.length);
      var randImage = aImageFiles[randIndex];
      rand[i] = "level1_" + randImage;
      aImageFiles.splice(randIndex, 1);
      console.log(aImageFiles);
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

    this.BG = this.game.add.sprite(0, 0, "BG").scale.setTo(1.5, 1);

    this.player1 = this.game.add.sprite(0, y - 50, "player1");
    this.player2 = this.game.add.sprite(0, 1.5 * y - 25, "player2");
    this.player3 = this.game.add.sprite(0, 2 * y, "player3");

    this.player4 = this.game.add.sprite(3 * x, 3 * y - 25, "player4");
    this.gray = this.game.add
      .sprite(4 * x - 6, 3 * y - 25, "gray")
      .scale.setTo(5.35, 1.22);
    this.blue = this.game.add.sprite(4 * x + 10, 3 * y - 15, "blue");
    this.white = this.game.add.sprite(4.5 * x + 46, 3 * y - 15, "white");
    this.red = this.game.add.sprite(5.5 * x + 18, 3 * y - 15, "red");
    this.green = this.game.add.sprite(6.5 * x - 10, 3 * y - 15, "green");
    this.black = this.game.add.sprite(7 * x + 27, 3 * y - 15, "black");
    this.cardblackmini = this.game.add.sprite(20, 20, "popup");

    this.level1_BG = this.game.add.sprite(3 * x - 20, 2 * y - 20, "level1_BG");
    this.level2_BG = this.game.add.sprite(3 * x - 20, y, "level2_BG");
    this.level3_BG = this.game.add.sprite(3 * x - 20, 0 * y + 20, "level3_BG");

    //level1
    button[0] = game.add.button(4 * x, 2 * y - 20, rand[0]);
    button[0].events.onInputDown.add(function() {
      cardlevel_1(button[0], 4 * x, 2 * y - 20);
    });
    button[0].inputEnabled = true;
    button[1] = game.add.button(4 * x + 140, 2 * y - 20, rand[1]);
    button[1].events.onInputDown.add(function() {
      cardlevel_1(button[1], 4 * x + 140, 2 * y - 20);
    });
    button[1].inputEnabled = true;
    button[2] = game.add.button(4 * x + 280, 2 * y - 20, rand[2]);
    button[2].events.onInputDown.add(function() {
      cardlevel_1(button[2], 4 * x + 280, 2 * y - 20);
    });
    button[2].inputEnabled = true;
    button[3] = game.add.button(4 * x + 420, 2 * y - 20, rand[3]);
    button[3].events.onInputDown.add(function() {
      cardlevel_1(button[3], 4 * x + 420, 2 * y - 20);
    });
    button[3].inputEnabled = true;

    //level2
    button[4] = game.add.button(4 * x, y, rand2[0]);
    button[4].events.onInputDown.add(function() {
      cardlevel_2(button[4], 4 * x, y);
    });
    button[4].inputEnabled = true;
    button[5] = game.add.button(4 * x + 140, y, rand2[1]);
    button[5].events.onInputDown.add(function() {
      cardlevel_2(button[5], 4 * x + 140, y);
    });
    button[5].inputEnabled = true;
    button[6] = game.add.button(4 * x + 280, y, rand2[2]);
    button[6].events.onInputDown.add(function() {
      cardlevel_2(button[6], 4 * x + 280, y);
    });
    button[6].inputEnabled = true;
    button[7] = game.add.button(4 * x + 420, y, rand2[3]);
    button[7].events.onInputDown.add(function() {
      cardlevel_2(button[7], 4 * x + 420, y);
    });
    button[7].inputEnabled = true;

    //level3
    button[8] = game.add.button(4 * x, 20, rand3[0]);
    button[8].events.onInputDown.add(function() {
      cardlevel_3(button[8], 4 * x, 20);
    });
    button[8].inputEnabled = true;
    button[9] = game.add.button(4 * x + 140, 20, rand3[1]);
    button[9].events.onInputDown.add(function() {
      cardlevel_3(button[9], 4 * x + 140, 20);
    });
    button[9].inputEnabled = true;
    button[10] = game.add.button(4 * x + 280, 20, rand3[2]);
    button[10].events.onInputDown.add(function() {
      cardlevel_3(button[10], 4 * x + 280, 20);
    });
    button[10].inputEnabled = true;
    button[11] = game.add.button(4 * x + 420, 20, rand3[3]);
    button[11].events.onInputDown.add(function() {
      cardlevel_3(button[11], 4 * x + 420, 20);
    });
    button[11].inputEnabled = true;
    //coin
    button[12] = game.add.button(8 * x + 50, 20, "coinBlack");
    button[12].events.onInputDown.add(function() {
      click_coin(button[12], 8 * x + 50, 20, "black");
    });
    button[12].inputEnabled = true;
    button[13] = game.add.button(
      8 * x + 50,
      0.5 * y,
      "coinRed",
      click_coin,
      this
    );
    button[13].inputEnabled = true;
    button[14] = game.add.button(
      8 * x + 50,
      y - 15,
      "coinBlue",
      click_coin,
      this
    );
    button[14].inputEnabled = true;
    button[15] = game.add.button(
      8 * x + 50,
      y + 70,
      "coinGreen",
      click_coin,
      this
    );
    button[15].inputEnabled = true;
    button[16] = game.add.button(
      8 * x + 50,
      1.5 * y + 50,
      "coinWhite",
      click_coin,
      this
    );
    button[16].inputEnabled = true;
    button[17] = game.add.button(
      8 * x + 50,
      2 * y + 35,
      "coinGold",
      click_coin,
      this
    );
    button[17].inputEnabled = true;

    //Noble
    button[18] = game.add.button(10 * x - 100, 20, rand4[0]);
    button[18].events.onInputDown.add(function() {
      click_Noble(button[18]);
    });
    button[18].inputEnabled = true;
    button[19] = game.add.button(10 * x - 100, 150, rand4[1]);
    button[19].events.onInputDown.add(function() {
      click_Noble(button[19]);
    });
    button[19].inputEnabled = true;
    button[20] = game.add.button(10 * x - 100, 280, rand4[2]);
    button[20].events.onInputDown.add(function() {
      click_Noble(button[20]);
    });
    button[20].inputEnabled = true;
    button[21] = game.add.button(10 * x - 100, 410, rand4[3]);
    button[21].events.onInputDown.add(function() {
      click_Noble(button[21]);
    });
    button[21].inputEnabled = true;
    //showscore
    button[22] = game.add.button(x + 50, 3 * y - 75, "score", show);
    button[22].inputEnabled = true;
  },
  render: function() {}
};
function show() {
  var person = prompt("Show Score", "บราๆๆๆๆๆ");
}

function cardlevel_1(card, x, y) {
  var person = confirm("Are you sure in this card level 1?");
  if (person == true) {
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
        cardlevel_1(card, x, y);
      });
      aImageFiles.splice(randIndex, 1);
    }
    console.log(aImageFiles);
  }
}
function cardlevel_2(card, x, y) {
  var person = confirm("Are you sure in this card level 2?");
  if (person == true) {
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
        cardlevel_2(card, x, y);
      });
      aImageFiles2.splice(randIndex2, 1);
    }
    console.log(aImageFiles2);
  }
}
function cardlevel_3(card, x, y) {
  var person = confirm("Are you sure in this card level 3?");
  if (person == true) {
    card.destroy(card);
    randIndex3 = Math.floor(Math.random() * aImageFiles3.length);
    if (aImageFiles3.length == 0) {
      aImageFiles3.splice(randIndex3, 0);
    } else {
      randImage3 = aImageFiles3[randIndex3];
      game.load.image(
        "level3_" + randImage3,
        "image/Level3/" + randImage3 + ".png"
      );
      rand3[0] = "level3_" + randImage3;
      card = game.add.button(x, y, rand3[0]);
      card.events.onInputDown.add(function() {
        cardlevel_3(card, x, y);
      });
      aImageFiles3.splice(randIndex3, 1);
    }
    console.log(aImageFiles3);
  }
}
function click_Noble(card) {
  var person = confirm("Are you sure in this card Noble?");
  if (person == true) {
    card.destroy(card);
  }
}
function click_coin(coin, x, y, color) {
  if (count == 0) {
    coin.events.onInputDown.add(function() {
      count += 1;
      if (color == "black") {
        console.log(color);
      }
      // click_coin(coin, x, y, color);
    });
  } else if (count >= 3) {
    var person = prompt("Error", "... Maxumum ...");
  }
}
function summit() {
  var person = prompt("มันใจหรอ", "... summit ...");
}
