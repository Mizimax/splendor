var button = [];
var text = [];
var coinNum = [];
coinNum[0] = 0;
coinNum[1] = 0;
coinNum[2] = 0;
coinNum[3] = 0;
coinNum[4] = 0;
var detail =[];
var turn = 1;
var InfoCard = [];
var InfoPlayer = [];
InfoPlayer[1] = {blueCoin: 0,whiteCoin: 0,redCoin: 0,greenCoin: 0,blackCoin: 0,cardblack: 0,cardblue: 0,cardred: 0,cardgreen: 0,cardwhite: 0,cardgold: 0};
InfoPlayer[2] = {blueCoin: 0,whiteCoin: 0,redCoin: 0,greenCoin: 0,blackCoin: 0,cardblack: 0,cardblue: 0,cardred: 0,cardgreen: 0,cardwhite: 0,cardgold: 0};
InfoPlayer[3] = {blueCoin: 0,whiteCoin: 0,redCoin: 0,greenCoin: 0,blackCoin: 0,cardblack: 0,cardblue: 0,cardred: 0,cardgreen: 0,cardwhite: 0,cardgold: 0};
InfoPlayer[4] = {blueCoin: 0,whiteCoin: 0,redCoin: 0,greenCoin: 0,blackCoin: 0,cardblack: 0,cardblue: 0,cardred: 0,cardgreen: 0,cardwhite: 0,cardgold: 0};
var aImageFiles = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40"];
var aImageFiles2 = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
var aImageFiles3 = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
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
    this.load.image("lilBlue","image/misc/blue.png");
    this.load.image("lilGold","image/misc/Eflower.png");
    this.load.image("popup","image/misc/popup.png");
    this.load.image("exitpopup","image/misc/exit.png")
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

    this.BG = this.game.add.sprite(0, 0, "BG").scale.setTo(1.5, 1);
    
    this.player1 = this.game.add.sprite(0, y - 50, "player1");
    this.player2 = this.game.add.sprite(0, 1.5 * y - 25, "player2");
    this.player3 = this.game.add.sprite(0, 2 * y, "player3");

    this.player4 = this.game.add.sprite(3 * x, 3 * y - 25, "player4");
    this.gray = this.game.add.sprite(4 * x - 6, 3 * y - 25, "gray").scale.setTo(5.35, 1.22);
    this.blue = this.game.add.sprite(4 * x + 10, 3 * y - 15, "blue");
    this.white = this.game.add.sprite(4.5 * x + 46, 3 * y - 15, "white");
    this.red = this.game.add.sprite(5.5 * x + 18, 3 * y - 15, "red");
    this.green = this.game.add.sprite(6.5 * x - 10, 3 * y - 15, "green");
    this.black = this.game.add.sprite(7 * x + 27, 3 * y - 15, "black");

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
    button[12] = game.add.button(8 * x + 50, 20, "coinBlue",click_coin,this);
    button[12].events.onInputDown.add(function() {
      click_coin(button[12], "blue");
    });
    button[12].inputEnabled = true;
    button[13] = game.add.button(8 * x + 50,0.5 * y,"coinWhite",click_coin,this);
    button[13].events.onInputDown.add(function() {
      click_coin(button[13], "white");
    });
    button[13].inputEnabled = true;
    button[14] = game.add.button(8 * x + 50,y - 15,"coinRed",click_coin,this);
    button[14].events.onInputDown.add(function() {
      click_coin(button[14], "red");
    });
    button[14].inputEnabled = true;
    button[15] = game.add.button(8 * x + 50,y + 70,"coinGreen",click_coin,this);
    button[15].events.onInputDown.add(function() {
      click_coin(button[15], "green");
    });
    button[15].inputEnabled = true;
    button[16] = game.add.button(8 * x + 50,1.5 * y + 50,"coinBlack",click_coin,this);
    button[16].events.onInputDown.add(function() {
      click_coin(button[16], "black");
    });
    button[16].inputEnabled = true;
    button[17] = game.add.button(8 * x + 50,2 * y + 35,"coinGold",click_coin,this);
    button[17].events.onInputDown.add(function() {
      click_coin(button[17], "gold");
    });
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
    button[22] = game.add.button(x + 50, 3 * y - 75, "score", showScore);
    button[22].inputEnabled = true;
    //RightWrong
    button[23] = game.add.button(8*x+95,2*y+120,"right");
    button[23].width= 30;
    button[23].height= 30;
    button[23].events.onInputDown.add(function() {OhRight();});
    button[23].inputEnabled = true;
    button[24] = game.add.button(8*x+50,2*y+120,"wrong");
    button[24].width= 30;
    button[24].height= 30;
    button[24].events.onInputDown.add(function() {ohCancel();});
    button[24].inputEnabled = true;
    //playerInfo
    detail[0] = this.game.add.sprite(4 * x+15 , 3 * y, "coinBlue");
    detail[0].width=35;
    detail[0].height=35;
    detail[1] = this.game.add.sprite(5 * x-13 , 3 * y, "coinWhite");
    detail[1].width=35;
    detail[1].height=35;
    detail[2] = this.game.add.sprite(6 *x -40 , 3 * y, "coinRed");
    detail[2].width=35;
    detail[2].height=35;
    detail[3] = this.game.add.sprite(7 * x-70 , 3 * y, "coinGreen");
    detail[3].width=35;
    detail[3].height=35;
    detail[4] = this.game.add.sprite(8 * x-95 , 3 * y, "coinBlack");
    detail[4].width=35;
    detail[4].height=35;
    detail[5] = this.game.add.sprite(4 * x+15 , 3 * y+40, "lilBlue");
    detail[5].width=35;
    detail[5].height=35;
    detail[6] = this.game.add.sprite(5 * x-13 , 3 * y+40, "lilBlue");
    detail[6].width=35;
    detail[6].height=35;
    detail[7] = this.game.add.sprite(6 *x -40 , 3 * y+40, "lilBlue");
    detail[7].width=35;
    detail[7].height=35;
    detail[8] = this.game.add.sprite(7 * x-70 , 3 * y+40, "lilBlue");
    detail[8].width=35;
    detail[8].height=35;
    detail[9] = this.game.add.sprite(8 * x-95 , 3 * y+40, "lilBlue");
    detail[9].width=35;
    detail[9].height=35;
    text [0] = game.add.text(8*x+50,2*y+153, "Blue:   "+coinNum[0], { font: "10px Arial", fill: "#ffffff", align: "center" });
    text [1] = game.add.text(8*x+50,2*y+164, "White: "+coinNum[1], { font: "10px Arial", fill: "#ffffff", align: "center" });
    text [2] = game.add.text(8*x+50,2*y+175, "Red:    "+coinNum[2], { font: "10px Arial", fill: "#ffffff", align: "center" });
    text [3] = game.add.text(8*x+50,2*y+186, "Green: "+coinNum[3], { font: "10px Arial", fill: "#ffffff", align: "center" });
    text [4] = game.add.text(8*x+50,2*y+197, "Black:  "+coinNum[4], { font: "10px Arial", fill: "#ffffff", align: "center" });
    text [5] = game.add.text(4*x+55,3*y, ": "+InfoPlayer[1].blueCoin, { font: "30px Arial", fill: "#ff00ff", align: "center" });
    text [6] = game.add.text(5*x+27,3*y, ": "+InfoPlayer[1].whiteCoin, { font: "30px Arial", fill: "#ff00ff", align: "center" });
    text [7] = game.add.text(6*x,3*y, ": "+InfoPlayer[1].redCoin, { font: "30px Arial", fill: "#ff00ff", align: "center" });
    text [8] = game.add.text(7*x-30,3*y, ": "+InfoPlayer[1].greenCoin, { font: "30px Arial", fill: "#ff00ff", align: "center" });
    text [9] = game.add.text(8*x-55,3*y, ": "+InfoPlayer[1].blackCoin, { font: "30px Arial", fill: "#ff00ff", align: "center" });
    text [10] = game.add.text(4*x+55,3*y+40, ": "+InfoPlayer[1].cardblue, { font: "30px Arial", fill: "#ff00ff", align: "center" });
    text [11] = game.add.text(5*x+27,3*y+40, ": "+InfoPlayer[1].cardwhite, { font: "30px Arial", fill: "#ff00ff", align: "center" });
    text [12] = game.add.text(6*x,3*y+40, ": "+InfoPlayer[1].cardred, { font: "30px Arial", fill: "#ff00ff", align: "center" });
    text [13] = game.add.text(7*x-30,3*y+40, ": "+InfoPlayer[1].cardgreen, { font: "30px Arial", fill: "#ff00ff", align: "center" });
    text [14] = game.add.text(8*x-55,3*y+40, ": "+InfoPlayer[1].cardblack, { font: "30px Arial", fill: "#ff00ff", align: "center" });
    text [15] = game.add.text(8*x+80,3*y+75, "Total 0/10", { font: "25px Arial", fill: "#ffffff", align: "center" });
    //reservedCard
    button[25] = game.add.button( 8 * x +25, 3*y+40, "lilGold");

  },
  render: function() {}
};

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
function click_coin(coin, color) {
  if(color=="blue"){
    coinNum[0]+=1;
    text[0].setText("Blue:   "+coinNum[0]);
  }
  else if(color=="white"){
    coinNum[1]+=1;
    text[1].setText("White: "+coinNum[1]);
  }
  else if(color=="red"){
    coinNum[2]+=1;
    text[2].setText("Red:    "+coinNum[2]);
  }
  else if(color=="green"){
    coinNum[3]+=1;
    text[3].setText("Green: "+coinNum[3]);
  }
  else if(color=="black"){
    coinNum[4]+=1;
    text[4].setText("Black:  "+coinNum[4]);
  }
}
function OhRight(){
  var total = InfoPlayer[1].blueCoin+InfoPlayer[1].whiteCoin+InfoPlayer[1].redCoin+InfoPlayer[1].greenCoin+InfoPlayer[1].blackCoin;
  if(total+coinNum[0]+coinNum[1]+coinNum[2]+coinNum[3]+coinNum[4] > 10){
    testMessageBox("toomuch");
    ohCancel();
  }
  else if(coinNum[0]+coinNum[1]+coinNum[2]+coinNum[3]+coinNum[4]<=3){
    if(coinNum[0]<=1&&coinNum[1]<=1&&coinNum[2]<=1&&coinNum[3]<=1&&coinNum[4]<=1){
      InfoPlayer[1].blueCoin+=coinNum[0];
      text[5].setText(": "+InfoPlayer[1].blueCoin);
      InfoPlayer[1].whiteCoin+=coinNum[1];
      text[6].setText(": "+InfoPlayer[1].whiteCoin);
      InfoPlayer[1].redCoin+=coinNum[2];
      text[7].setText(": "+InfoPlayer[1].redCoin);
      InfoPlayer[1].greenCoin+=coinNum[3];
      text[8].setText(": "+InfoPlayer[1].greenCoin);
      InfoPlayer[1].blackCoin+=coinNum[4];
      text[9].setText(": "+InfoPlayer[1].blackCoin);
      coinNum[0]=0;
      text[0].setText("Blue:   "+coinNum[0]);
      coinNum[1]=0;
      text[1].setText("White: "+coinNum[1]);
      coinNum[2]=0;
      text[2].setText("Red:    "+coinNum[2]);
      coinNum[3]=0;
      text[3].setText("Green: "+coinNum[3]);
      coinNum[4]=0;
      text[4].setText("Black:  "+coinNum[4]);
      total = InfoPlayer[1].blueCoin+InfoPlayer[1].whiteCoin+InfoPlayer[1].redCoin+InfoPlayer[1].greenCoin+InfoPlayer[1].blackCoin;
      text[15].setText("Total "+total+"/10");
    }
    else if(coinNum[0]+coinNum[1]+coinNum[2]+coinNum[3]+coinNum[4]<3&&(coinNum[0]==2||coinNum[1]==2||coinNum[2]==2||coinNum[3]==2||coinNum[4]==2)){
      InfoPlayer[1].blueCoin+=coinNum[0];
      text[5].setText(": "+InfoPlayer[1].blueCoin);
      InfoPlayer[1].whiteCoin+=coinNum[1];
      text[6].setText(": "+InfoPlayer[1].whiteCoin);
      InfoPlayer[1].redCoin+=coinNum[2];
      text[7].setText(": "+InfoPlayer[1].redCoin);
      InfoPlayer[1].greenCoin+=coinNum[3];
      text[8].setText(": "+InfoPlayer[1].greenCoin);
      InfoPlayer[1].blackCoin+=coinNum[4];
      text[9].setText(": "+InfoPlayer[1].blackCoin);
      coinNum[0]=0;
      text[0].setText("Blue:   "+coinNum[0]);
      coinNum[1]=0;
      text[1].setText("White: "+coinNum[1]);
      coinNum[2]=0;
      text[2].setText("Red:    "+coinNum[2]);
      coinNum[3]=0;
      text[3].setText("Green: "+coinNum[3]);
      coinNum[4]=0;
      text[4].setText("Black:  "+coinNum[4]);
      total = InfoPlayer[1].blueCoin+InfoPlayer[1].whiteCoin+InfoPlayer[1].redCoin+InfoPlayer[1].greenCoin+InfoPlayer[1].blackCoin;
      text[15].setText("Total "+total+"/10");
    }
    else{
      testMessageBox("format");
      ohCancel();
    }  
  }
  else{
    testMessageBox("numbe");
    ohCancel();
  }
  
}
function ohCancel(){
    coinNum[0]=0;
    text[0].setText("Blue:   "+coinNum[0]);
    coinNum[1]=0;
    text[1].setText("White: "+coinNum[1]);
    coinNum[2]=0;
    text[2].setText("Red:    "+coinNum[2]);
    coinNum[3]=0;
    text[3].setText("Green: "+coinNum[3]);
    coinNum[4]=0;
    text[4].setText("Black:  "+coinNum[4]);
}
function summit() {
  var person = prompt("มันใจหรอ", "... summit ...");
}
function testMessageBox(type) {
  if(type=="format"){
    this.showMessageBox("Wrong coin picking format!", 5*x,2*y);
  }
  else if(type=="toomuch"){
    this.showMessageBox("Your total coins exxceed 10!", 5*x,2*y);
  }
  else if(type=="numbe"){
    this.showMessageBox("You can't pick more than three coins!", 5*x,2*y);
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
  text1.wordWrapWidth = w * .9;
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
  text1.y = back.height / 2 - text1.height / 2 -100;
  this.msgBox = msgBox;
}
function hideBox() {
  this.msgBox.destroy();
}
function showScore(w = 300, h = 300) {
  if (this.scrBox) {
      this.scrBox.destroy();
  }
  var scrBox = game.add.group();
  var back = game.add.sprite(0, 0, "popup");
  var closeButton = game.add.sprite(0, 0, "exitpopup");
  var totalInScore =[];
  totalInScore[1] = InfoPlayer[1].blueCoin+InfoPlayer[1].whiteCoin+InfoPlayer[1].redCoin+InfoPlayer[1].greenCoin+InfoPlayer[1].blackCoin;
  totalInScore[2] = InfoPlayer[2].blueCoin+InfoPlayer[2].whiteCoin+InfoPlayer[2].redCoin+InfoPlayer[2].greenCoin+InfoPlayer[2].blackCoin;
  totalInScore[3] = InfoPlayer[3].blueCoin+InfoPlayer[3].whiteCoin+InfoPlayer[3].redCoin+InfoPlayer[3].greenCoin+InfoPlayer[3].blackCoin;
  totalInScore[4] = InfoPlayer[4].blueCoin+InfoPlayer[4].whiteCoin+InfoPlayer[4].redCoin+InfoPlayer[4].greenCoin+InfoPlayer[4].blackCoin;
  var scoreNum= [];
  scoreNum[0]= game.add.text(0, 0, InfoPlayer[1].blueCoin);
  scoreNum[1]= game.add.text(0, 0, InfoPlayer[1].whiteCoin);
  scoreNum[2]= game.add.text(0, 0, InfoPlayer[1].redCoin);
  scoreNum[3]= game.add.text(0, 0, InfoPlayer[1].greenCoin);
  scoreNum[4]= game.add.text(0, 0, InfoPlayer[1].blackCoin);
  scoreNum[5]= game.add.text(0, 0, InfoPlayer[2].blueCoin);
  scoreNum[6]= game.add.text(0, 0, InfoPlayer[2].whiteCoin);
  scoreNum[7]= game.add.text(0, 0, InfoPlayer[2].redCoin);
  scoreNum[8]= game.add.text(0, 0, InfoPlayer[2].greenCoin);
  scoreNum[9]= game.add.text(0, 0, InfoPlayer[2].blackCoin);
  scoreNum[10]= game.add.text(0, 0, InfoPlayer[3].blueCoin);
  scoreNum[11]= game.add.text(0, 0, InfoPlayer[3].whiteCoin);
  scoreNum[12]= game.add.text(0, 0, InfoPlayer[3].redCoin);
  scoreNum[13]= game.add.text(0, 0, InfoPlayer[3].greenCoin);
  scoreNum[14]= game.add.text(0, 0, InfoPlayer[3].blackCoin);
  scoreNum[15]= game.add.text(0, 0, InfoPlayer[4].blueCoin);
  scoreNum[16]= game.add.text(0, 0, InfoPlayer[4].whiteCoin);
  scoreNum[17]= game.add.text(0, 0, InfoPlayer[4].redCoin);
  scoreNum[18]= game.add.text(0, 0, InfoPlayer[4].greenCoin);
  scoreNum[19]= game.add.text(0, 0, InfoPlayer[4].blackCoin);
  scoreNum[20]= game.add.text(0, 0, InfoPlayer[1].cardblue);
  scoreNum[21]= game.add.text(0, 0, InfoPlayer[1].cardwhite);
  scoreNum[22]= game.add.text(0, 0, InfoPlayer[1].cardred);
  scoreNum[23]= game.add.text(0, 0, InfoPlayer[1].cardgreen);
  scoreNum[24]= game.add.text(0, 0, InfoPlayer[1].cardblack);
  scoreNum[25]= game.add.text(0, 0, InfoPlayer[2].cardblue);
  scoreNum[26]= game.add.text(0, 0, InfoPlayer[2].cardwhite);
  scoreNum[27]= game.add.text(0, 0, InfoPlayer[2].cardred);
  scoreNum[28]= game.add.text(0, 0, InfoPlayer[2].cardgreen);
  scoreNum[29]= game.add.text(0, 0, InfoPlayer[2].cardblack);
  scoreNum[30]= game.add.text(0, 0, InfoPlayer[3].cardblue);
  scoreNum[31]= game.add.text(0, 0, InfoPlayer[3].cardwhite);
  scoreNum[32]= game.add.text(0, 0, InfoPlayer[3].cardred);
  scoreNum[33]= game.add.text(0, 0, InfoPlayer[3].cardgreen);
  scoreNum[34]= game.add.text(0, 0, InfoPlayer[3].cardblack);
  scoreNum[35]= game.add.text(0, 0, InfoPlayer[4].cardblue);
  scoreNum[36]= game.add.text(0, 0, InfoPlayer[4].cardwhite);
  scoreNum[37]= game.add.text(0, 0, InfoPlayer[4].cardred);
  scoreNum[38]= game.add.text(0, 0, InfoPlayer[4].cardgreen);
  scoreNum[39]= game.add.text(0, 0, InfoPlayer[4].cardblack);
  scoreNum[40]= game.add.text(0, 0, totalInScore[1]);
  scoreNum[41]= game.add.text(0, 0, totalInScore[2]);
  scoreNum[42]= game.add.text(0, 0, totalInScore[3]);
  scoreNum[43]= game.add.text(0, 0, totalInScore[4]);
  back.width = w;
  back.height = h;
  scrBox.add(back);
  scrBox.add(closeButton);
  //scrBox.add(scoreNum[0]);
  closeButton.x = back.width / 2 - closeButton.width / 2;
  closeButton.y = back.height - closeButton.height;
  closeButton.inputEnabled = true;
  closeButton.events.onInputDown.add(this.hideBox2, this);
  scrBox.x = game.width / 2 - scrBox.width / 2;
  scrBox.y = game.height / 2 - scrBox.height / 2;
  /*scoreNum[0] = back.width / 2 - text1.width / 2;
  scoreNum[0] = back.height / 2 - text1.height / 2 -100;*/
  this.scrBox = scrBox;
}
function hideBox2() {
  this.scrBox.destroy();
}