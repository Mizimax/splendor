var button = [];
var text = [];
var coinNum = [];
coinNum[0] = 0;
coinNum[1] = 0;
coinNum[2] = 0;
coinNum[3] = 0;
coinNum[4] = 0;
var localNum =  0;
var serverTemp=[];
var name;
var detail = [];
var turn = 1;
var modedTurn = 1;
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
var coinLeft = [];
for (var i = 0; i < 6; i++) {
  if (i < 5) {
    coinLeft[i] = 7;
  } else {
    coinLeft[i] = 5;
  }
}
var check = [];
check[0] = 0;
check[1] = 0;
check[2] = 0;
check[3] = 0;

check[4] = 0;
check[5] = 0;
check[6] = 0;
check[7] = 0;

check[8] = 0;
check[9] = 0;
check[10] = 0;
check[11] = 0;
var rand = [];
var rand2 = [];
var rand3 = [];
var rand4 = [];
var temp;
var DBrand;
var count = 0;
var serverButton;
var intLv1 = 4;
var intLv2 = 4;
var intLv3 = 4;
var changeCardTemp=[];
var InfoPlayer = [];
var changeCard = function(){
  console.log(55555);
  if(serverButton == 0){
    button[serverButton].destroy();
    intLv1+=1;
    if(intLv1<=40){
      changeCardTemp[0]=DBrand[0][intLv1];
      game.load.image("level1_" +changeCardTemp[0],"image/Level1/" +changeCardTemp[0]+ ".png");
      rand[0] = "level1_" + changeCardTemp[0];
      button[serverButton] = game.add.button(4 * x,2 * y + 40, rand[0]);
      button[serverButton].events.onInputDown.add(function() {
      cardlevel_1(button[serverButton], changeCardTemp[0],0);
      });
    }
  }
  else if(serverButton == 1){
    button[serverButton].destroy();
    intLv1+=1;
    if(intLv1<=40){
      changeCardTemp[1]=DBrand[0][intLv1];
      game.load.image("level1_" +changeCardTemp[1],"image/Level1/" +changeCardTemp[1]+ ".png");
      rand[1] = "level1_" + changeCardTemp[1];
      button[serverButton] = game.add.button(4 * x + 140,  2 * y + 40, rand[1]);
      button[serverButton].events.onInputDown.add(function() {
      cardlevel_1(button[serverButton], changeCardTemp[1],1);
      });
    }
  }
  else if(serverButton == 2){
    button[serverButton].destroy();
    intLv1+=1;
    if(intLv1<=40){
      changeCardTemp[2]=DBrand[0][intLv1];
      game.load.image("level1_" +changeCardTemp[2],"image/Level1/" +changeCardTemp[1]+ ".png");
      rand[2] = "level1_" +changeCardTemp[2];
      button[serverButton] = game.add.button(4 * x + 280, 2 * y + 40, rand[2]);
      button[serverButton].events.onInputDown.add(function() {
      cardlevel_1(button[serverButton], changeCardTemp[2],2);
      });
    }
  }
  else if(serverButton == 3){
    button[serverButton].destroy();
    intLv1+=1;
    if(intLv1<=40){
      changeCardTemp[3]=DBrand[0][intLv1];
      game.load.image("level1_" +changeCardTemp[3],"image/Level1/" +changeCardTemp[3]+ ".png");
      rand[3] = "level1_" + changeCardTemp[3];
      button[serverButton] = game.add.button(4 * x + 420, 2 * y + 40, rand[3]);
      button[serverButton].events.onInputDown.add(function() {
      cardlevel_1(button[serverButton], changeCardTemp[3],3);
      });
    }
  }
  else if(serverButton == 4){
    button[serverButton].destroy();
    intLv2+=1;
    if(intLv2<=30){
      changeCardTemp[4]=DBrand[1][intLv2];
      game.load.image("level2_" +changeCardTemp[4],"image/Level2/" +changeCardTemp[4]+ ".png");
      rand2[0] = "level2_" + changeCardTemp[4];
      button[serverButton] = game.add.button(4 * x,  1.5 * y - 40, rand2[0]);
      button[serverButton].events.onInputDown.add(function() {
      cardlevel_2(button[serverButton], changeCardTemp[4],4);
      });
    }
  }
  else if(serverButton == 5){
    button[serverButton].destroy();
    intLv2+=1;
    if(intLv2<=30){
      changeCardTemp[5]=DBrand[1][intLv2];
      game.load.image("level2_" +changeCardTemp[5],"image/Level2/" +changeCardTemp[5]+ ".png");
      rand2[1] = "level2_" + changeCardTemp[5];
      button[serverButton] = game.add.button(4 * x + 140,1.5 * y - 40, rand2[1]);
      button[serverButton].events.onInputDown.add(function() {
      cardlevel_2(button[serverButton], changeCardTemp[5],5);
      });
    }
  }
  else if(serverButton == 6){
    button[serverButton].destroy();
    intLv2+=1;
    if(intLv2<=30){
      changeCardTemp[6]=DBrand[1][intLv2];
      game.load.image("level2_" +changeCardTemp[6],"image/Level2/" +changeCardTemp[6]+ ".png");
      rand2[2] = "level2_" + changeCardTemp[6];
      button[serverButton] = game.add.button(4 * x + 280,  1.5 * y - 40, rand2[2]);
      button[serverButton].events.onInputDown.add(function() {
      cardlevel_2(button[serverButton], changeCardTemp[6],6);
      });
    }
  }
  else if(serverButton == 7){
    serverButtonbutton[serverButton].destroy();
    intLv2+=1;
    if(intLv2<=30){
      changeCardTemp[7]=DBrand[1][intLv2];
      game.load.image("level2_" +changeCardTemp[7],"image/Level2/" +changeCardTemp[7]+ ".png");
      rand2[3] = "level2_" + changeCardTemp[7];
      button[serverButton] = game.add.button(4 * x + 420, 1.5 * y - 40, rand2[3]);
      button[serverButton].events.onInputDown.add(function() {
      cardlevel_2(button[serverButton], changeCardTemp[7],7);
      });
    }
  }
  else if(serverButton == 8){
    button[serverButton].destroy();
    intLv3+=1;
    if(intLv3<=20){
      changeCardTemp[8]=DBrand[2][intLv2];
      game.load.image("level3_" +changeCardTemp[8],"image/Level3/" +changeCardTemp[8]+ ".png");
      rand3[0] = "level3_" + changeCardTemp[8];
      button[serverButton] = game.add.button(4 * x, 0.5 * y - 25, rand3[0]);
      button[serverButton].events.onInputDown.add(function() {
      cardlevel_3(button[serverButton], changeCardTemp[8],8);
      });
    }
  }
  else if(serverButton == 9){
    button[serverButton].destroy();
    intLv3+=1;
    if(intLv3<=20){
      changeCardTemp[9]=DBrand[2][intLv2];
      game.load.image("level3_" +changeCardTemp[9],"image/Level3/" +changeCardTemp[9]+ ".png");
      rand3[1] = "level3_" + changeCardTemp[9];
      button[serverButton] = game.add.button(4 * x + 140,  0.5 * y - 25, rand3[1]);
      button[serverButton].events.onInputDown.add(function() {
      cardlevel_3(button[serverButton], changeCardTemp[9],9);
      });
    }
  }
  else if(serverButton == 10){
    button[serverButton].destroy();
    intLv3+=1;
    if(intLv3<=20){
      changeCardTemp[10]=DBrand[2][intLv2];
      game.load.image("level3_" + changeCardTemp[10],"image/Level3/" +changeCardTemp[10]+ ".png");
      rand3[2] = "level3_" + changeCardTemp[10];
      button[serverButton] = game.add.button(4 * x + 280, 0.5 * y - 25, rand3[2]);
      button[serverButton].events.onInputDown.add(function() {
      cardlevel_3(button[serverButton], changeCardTemp[10],10);
      });
    }
  }
  else if(serverButton == 11){
    button[serverButton].destroy();
    intLv3+=1;
    if(intLv3<=20){
      changeCardTemp[11]=DBrand[2][intLv2];
      game.load.image("level3_" +changeCardTemp[11],"image/Level3/" +changeCardTemp[11]+ ".png");
      rand3[3] = "level3_" + changeCardTemp[11];
      button[serverButton] = game.add.button(4 * x + 420,  0.5 * y - 25, rand3[3]);
      button[serverButton].events.onInputDown.add(function() {
      cardlevel_3(button[serverButton], changeCardTemp[11],11);
      });
    }
  }
  else if (erverButton == 18){
    button[serverButton].destroy();
  }
  else if (erverButton == 19){
    button[serverButton].destroy();
  }
  else if (erverButton == 20){
    button[serverButton].destroy();
  }
  else if (erverButton == 21){
    button[serverButton].destroy();
  }
  else if (erverButton == 22){
    button[serverButton].destroy();
  }

}
var changeTurn = function(){
  if(localNum==modedTurn){
    button[0].inputEnabled = true;
    button[1].inputEnabled = true;
    button[2].inputEnabled = true;
    button[3].inputEnabled = true;
    button[4].inputEnabled = true;
    button[5].inputEnabled = true;
    button[6].inputEnabled = true;
    button[7].inputEnabled = true;
    button[8].inputEnabled = true;
    button[9].inputEnabled = true;
    button[10].inputEnabled = true;
    button[11].inputEnabled = true;
    button[12].inputEnabled = true;
    button[13].inputEnabled = true;
    button[14].inputEnabled = true;
    button[15].inputEnabled = true;
    button[16].inputEnabled = true;
    button[18].inputEnabled = true;
    button[19].inputEnabled = true;
    button[20].inputEnabled = true;
    button[21].inputEnabled = true;
    button[22].inputEnabled = true;
    button[24].inputEnabled = true;
    button[25].inputEnabled = true;
  }
  else{
    button[0].inputEnabled = false;
    button[1].inputEnabled = false;
    button[2].inputEnabled = false;
    button[3].inputEnabled = false;
    button[4].inputEnabled = false;
    button[5].inputEnabled = false;
    button[6].inputEnabled = false;
    button[7].inputEnabled = false;
    button[8].inputEnabled = false;
    button[9].inputEnabled = false;
    button[10].inputEnabled = false;
    button[11].inputEnabled = false;
    button[12].inputEnabled = false;
    button[13].inputEnabled = false;
    button[14].inputEnabled = false;
    button[15].inputEnabled = false;
    button[16].inputEnabled = false;
    button[18].inputEnabled = false;
    button[19].inputEnabled = false;
    button[20].inputEnabled = false;
    button[21].inputEnabled = false;
    button[22].inputEnabled = false;
    button[24].inputEnabled = false;
    button[25].inputEnabled = false;
  }
}
var upd = function(){
  text[16].setText(coinLeft[0]+"/7");
  text[17].setText(coinLeft[1]+"/7");
  text[18].setText(coinLeft[2]+"/7");
  text[19].setText(coinLeft[3]+"/7");
  text[20].setText(coinLeft[4]+"/7");
  text[21].setText("Turn : " + turn);
  text[23].setText("Turn of : " + InfoPlayer[modedTurn].playerName);
}
var checkPlayerDetail = function() {
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
    score: 0
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
    score: 0
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
    score: 0
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
    score: 0
  };
  InfoPlayer[1].playerName = DBplayer[1].user_display_name;
  InfoPlayer[2].playerName = DBplayer[2].user_display_name;
  InfoPlayer[3].playerName = DBplayer[3].user_display_name;
  InfoPlayer[4].playerName = DBplayer[4].user_display_name;
};
var turnAdd = function(){
  if (name == InfoPlayer[1].playerName) {
    localNum = 1;
  } else if (name == InfoPlayer[2].playerName) {
    localNum = 2;
  } else if (name == InfoPlayer[3].playerName) {
    localNum = 3;
  } else if (name == InfoPlayer[4].playerName) {
    localNum = 4;
  }
  console.log(localNum);
  //PlayerInfo
  text[5] = game.add.text(
    4 * x + 55,
    3.5 * y - 15,
    ": " + InfoPlayer[localNum].blueCoin,
    {
      font: "30px Arial",
      fill: "#ff00ff",
      align: "center"
    }
  );
  text[6] = game.add.text(
    5 * x + 27,
    3.5 * y - 15,
    ": " + InfoPlayer[localNum].whiteCoin,
    {
      font: "30px Arial",
      fill: "#ff00ff",
      align: "center"
    }
  );
  text[7] = game.add.text(
    6 * x,
    3.5 * y - 15,
    ": " + InfoPlayer[localNum].redCoin,
    {
      font: "30px Arial",
      fill: "#ff00ff",
      align: "center"
    }
  );
  text[8] = game.add.text(
    7 * x - 30,
    3.5 * y - 15,
    ": " + InfoPlayer[localNum].greenCoin,
    {
      font: "30px Arial",
      fill: "#ff00ff",
      align: "center"
    }
  );
  text[9] = game.add.text(
    8 * x - 55,
    3.5 * y - 15,
    ": " + InfoPlayer[localNum].blackCoin,
    {
      font: "30px Arial",
      fill: "#ff00ff",
      align: "center"
    }
  );
  text[10] = game.add.text(
    4 * x + 55,
    3.5 * y + 25,
    ": " + InfoPlayer[localNum].cardblue,
    {
      font: "30px Arial",
      fill: "#ff00ff",
      align: "center"
    }
  );
  text[11] = game.add.text(
    5 * x + 27,
    3.5 * y + 25,
    ": " + InfoPlayer[localNum].cardwhite,
    {
      font: "30px Arial",
      fill: "#ff00ff",
      align: "center"
    }
  );
  text[12] = game.add.text(
    6 * x,
    3.5 * y + 25,
    ": " + InfoPlayer[localNum].cardred,
    {
      font: "30px Arial",
      fill: "#ff00ff",
      align: "center"
    }
  );
  text[13] = game.add.text(
    7 * x - 30,
    3.5 * y + 25,
    ": " + InfoPlayer[localNum].cardgreen,
    {
      font: "30px Arial",
      fill: "#ff00ff",
      align: "center"
    }
  );
  text[14] = game.add.text(
    8 * x - 55,
    3.5 * y + 25,
    ": " + InfoPlayer[localNum].cardblack,
    {
      font: "30px Arial",
      fill: "#ff00ff",
      align: "center"
    }
  );
  text[22] = game.add.text(0, 25, "Name : " + InfoPlayer[localNum].playerName, {
    font: "20px Arial",
    fill: "#ffffff",
    align: "center"
  });
  text[23] = game.add.text(0, 50, "Turn of : " + InfoPlayer[modedTurn].playerName, {
    font: "20px Arial",
    fill: "#ffffff",
    align: "center"
  });
  //add card datapath
  for (i = 0; i < 4; i++) {
    rand3[i] = "level3_" + DBrand[2][i+1];
  }
  //level2
  for (i = 0; i < 4; i++) {
    rand2[i] = "level2_" + DBrand[1][i+1];
  }
  //level1
  for (i = 0; i < 4; i++) {
    rand[i] = "level1_" + DBrand[0][i+1];
  }
  //level1
  button[0] = game.add.button(4 * x, 2 * y + 40, rand[0]);
  button[0].events.onInputDown.add(function() {
    cardlevel_1(button[0], DBrand[0][1], 0);
  });
  button[1] = game.add.button(4 * x + 140, 2 * y + 40, rand[1]);
  button[1].events.onInputDown.add(function() {
    cardlevel_1(button[1], DBrand[0][2], 1);
  });
  button[2] = game.add.button(4 * x + 280, 2 * y + 40, rand[2]);
  button[2].events.onInputDown.add(function() {
    cardlevel_1(button[2], DBrand[0][3], 2);
  });
  button[3] = game.add.button(4 * x + 420, 2 * y + 40, rand[3]);
  button[3].events.onInputDown.add(function() {
    cardlevel_1(button[3], DBrand[0][4], 3);
  });
  //level2
  button[4] = game.add.button(4 * x, 1.5 * y - 40, rand2[0]);
  button[4].events.onInputDown.add(function() {
    cardlevel_2(button[4], DBrand[1][1], 4);
  });
  button[5] = game.add.button(4 * x + 140, 1.5 * y - 40, rand2[1]);
  button[5].events.onInputDown.add(function() {
    cardlevel_2(button[5], DBrand[1][2], 5);
  });
  button[6] = game.add.button(4 * x + 280, 1.5 * y - 40, rand2[2]);
  button[6].events.onInputDown.add(function() {
    cardlevel_2(button[6], DBrand[1][3], 6);
  });
  button[7] = game.add.button(4 * x + 420, 1.5 * y - 40, rand2[3]);
  button[7].events.onInputDown.add(function() {
    cardlevel_2(button[7], DBrand[1][4], 7);
  });
  //level3
  button[8] = game.add.button(4 * x, 0.5 * y - 25, rand3[0]);
  button[8].events.onInputDown.add(function() {
    cardlevel_3(button[8], DBrand[2][1], 8);
  });
  button[9] = game.add.button(4 * x + 140, 0.5 * y - 25, rand3[1]);
  button[9].events.onInputDown.add(function() {
    cardlevel_3(button[9], DBrand[2][2], 9);
  });
  button[10] = game.add.button(4 * x + 280, 0.5 * y - 25, rand3[2]);
  button[10].events.onInputDown.add(function() {
    cardlevel_3(button[10], DBrand[2][3], 10);
  });
  button[11] = game.add.button(4 * x + 420, 0.5 * y - 25, rand3[3]);
  button[11].events.onInputDown.add(function() {
    cardlevel_3(button[11], DBrand[2][4], 11);
  });
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
  //Noble
  button[18] = game.add.button(10 * x - 25, 0.5 * y + 25, rand4[0]);
  button[18].events.onInputDown.add(function() {
    click_Noble(0,18);
  });
  button[19] = game.add.button(10 * x - 25, y + 75, rand4[1]);
  button[19].events.onInputDown.add(function() {
    click_Noble(1,19);
  });
  button[20] = game.add.button(10 * x - 25, 2 * y + 25, rand4[2]);
  button[20].events.onInputDown.add(function() {
    click_Noble(2,20);
  });
  button[21] = game.add.button(11 * x, y - 25, rand4[3]);
  button[21].events.onInputDown.add(function() {
    click_Noble(3,21);
  });
  button[22] = game.add.button(11 * x, 1.5 * y + 40, rand4[4]);
  button[22].events.onInputDown.add(function() {
    click_Noble(4,22);
  });
  changeTurn();
}
var cardadd = function() {
  for (var i = 1; i <= 40; i++) {
    InfoCardLv1[i] = {
      reqBlue: 0,
      reqWhite: 0,
      reqRed: 0,
      reqGreen: 0,
      reqBlack: 0,
      addBlue: 0,
      addWhite: 0,
      addRed: 0,
      addGreen: 0,
      addBlack: 0,
      score: 0
    };
  }
  for (var i = 1; i <= 30; i++) {
    InfoCardLv2[i] = {
      reqBlue: 0,
      reqWhite: 0,
      reqRed: 0,
      reqGreen: 0,
      reqBlack: 0,
      addBlue: 0,
      addWhite: 0,
      addRed: 0,
      addGreen: 0,
      addBlack: 0,
      score: 0
    };
  }
  for (var i = 1; i <= 20; i++) {
    InfoCardLv3[i] = {
      reqBlue: 0,
      reqWhite: 0,
      reqRed: 0,
      reqGreen: 0,
      reqBlack: 0,
      addBlue: 0,
      addWhite: 0,
      addRed: 0,
      addGreen: 0,
      addBlack: 0,
      score: 0
    };
  }
  //Noble
  for (var i = 0; i < 5; i++) {
    Noble[i] = {
      reqBlue: 0,
      reqWhite: 0,
      reqRed: 0,
      reqGreen: 0,
      reqBlack: 0,
      score: 0
    };
  }
  //Noble
  var randImage4;
  for (i = 0; i < 5; i++) {
    randImage4 = DBrand[3][i+1];
    if (randImage4 == 1) {
      Noble[i].reqBlack = 4;
      Noble[i].reqWhite = 4;
      Noble[i].score = 3;
    } else if (randImage4 == 2) {
      Noble[i].reqRed = 4;
      Noble[i].reqGreen = 4;
      Noble[i].score = 3;
    } else if (randImage4 == 3) {
      Noble[i].reqBlack = 4;
      Noble[i].reqqRed = 4;
      Noble[i].score = 3;
    } else if (randImage4 == 4) {
      Noble[i].reqBlue = 4;
      Noble[i].reqWhite = 4;
      Noble[i].score = 3;
    } else if (randImage4 == 5) {
      Noble[i].reqBlack = 3;
      Noble[i].reqRed = 3;
      Noble[i].reqWhite = 3;
      Noble[i].score = 3;
    } else if (randImage4 == 6) {
      Noble[i].reqGreen = 3;
      Noble[i].reqRed = 3;
      Noble[i].reqBlue = 3;
      Noble[i].score = 3;
    } else if (randImage4 == 7) {
      Noble[i].reqBlack = 3;
      Noble[i].reqRed = 3;
      Noble[i].reqGreen = 3;
      Noble[i].score = 3;
    } else if (randImage4 == 8) {
      Noble[i].reqBlue = 4;
      Noble[i].reqGreen = 4;
      Noble[i].score = 3;
    } else if (randImage4 == 9) {
      Noble[i].reqBlue = 3;
      Noble[i].reqWhite = 3;
      Noble[i].reqGreen = 3;
      Noble[i].score = 3;
    } else if (randImage4 == 10) {
      Noble[i].reqBlack = 3;
      Noble[i].reqBlue = 3;
      Noble[i].reqWhite = 3;
      Noble[i].score = 3;
    }
    game.load.image(
      "level4_" + randImage4,
      "image/Level4/" + randImage4 + ".png"
    );
    rand4[i] = "level4_" + randImage4;
  }
  for (var i = 1; i <= 40; i++) {
    if (DBcards[i].reqBlue) {
      InfoCardLv1[i].reqBlue = DBcards[i].reqBlue;
    }
    if (DBcards[i].reqWhite) {
      InfoCardLv1[i].reqWhite = DBcards[i].reqWhite;
    }
    if (DBcards[i].reqRed) {
      InfoCardLv1[i].reqRed = DBcards[i].reqRed;
    }
    if (DBcards[i].reqGreen) {
      InfoCardLv1[i].reqGreen = DBcards[i].reqGreen;
    }
    if (DBcards[i].reqBlack) {
      InfoCardLv1[i].reqBlack = DBcards[i].reqBlack;
    }
    InfoCardLv1[i].addBlack = DBcards[i].addBlack;
    InfoCardLv1[i].addBlue = DBcards[i].addBlue;
    InfoCardLv1[i].addWhite = DBcards[i].addWhite;
    InfoCardLv1[i].addGreen = DBcards[i].addGreen;
    InfoCardLv1[i].addRed = DBcards[i].addRed;
    InfoCardLv1[i].score = DBcards[i].card_score;
  }
  for (var i = 41; i <= 70; i++) {
    if (DBcards[i].reqBlue) {
      InfoCardLv2[i - 40].reqBlue = DBcards[i].reqBlue;
    }
    if (DBcards[i].reqWhite) {
      InfoCardLv2[i - 40].reqWhite = DBcards[i].reqWhite;
    }
    if (DBcards[i].reqRed) {
      InfoCardLv2[i - 40].reqRed = DBcards[i].reqRed;
    }
    if (DBcards[i].reqGreen) {
      InfoCardLv2[i - 40].reqGreen = DBcards[i].reqGreen;
    }
    if (DBcards[i].reqBlack) {
      InfoCardLv2[i - 40].reqBlack = DBcards[i].reqBlack;
    }
    InfoCardLv2[i - 40].addBlack = DBcards[i].addBlack;
    InfoCardLv2[i - 40].addBlue = DBcards[i].addBlue;
    InfoCardLv2[i - 40].addWhite = DBcards[i].addWhite;
    InfoCardLv2[i - 40].addGreen = DBcards[i].addGreen;
    InfoCardLv2[i - 40].addRed = DBcards[i].addRed;
    InfoCardLv2[i - 40].score = DBcards[i].card_score;
  }
  for (var i = 71; i <= 90; i++) {
    if (DBcards[i].reqBlue) {
      InfoCardLv3[i - 70].reqBlue = DBcards[i].reqBlue;
    }
    if (DBcards[i].reqWhite) {
      InfoCardLv3[i - 70].reqWhite = DBcards[i].reqWhite;
    }
    if (DBcards[i].reqRed) {
      InfoCardLv3[i - 70].reqRed = DBcards[i].reqRed;
    }
    if (DBcards[i].reqGreen) {
      InfoCardLv3[i - 70].reqGreen = DBcards[i].reqGreen;
    }
    if (DBcards[i].reqBlack) {
      InfoCardLv3[i - 70].reqBlack = DBcards[i].reqBlack;
    }
    InfoCardLv3[i - 70].addBlack = DBcards[i].addBlack;
    InfoCardLv3[i - 70].addBlue = DBcards[i].addBlue;
    InfoCardLv3[i - 70].addWhite = DBcards[i].addWhite;
    InfoCardLv3[i - 70].addGreen = DBcards[i].addGreen;
    InfoCardLv3[i - 70].addRed = DBcards[i].addRed;
    InfoCardLv3[i - 70].score = DBcards[i].card_score;
  }
};
/*

*/
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
    this.load.image("player3", "image/profile/pun.png");
    this.load.image("player4", "image/profile/cher.png");
    //level 1-3
    game.load.image("galaxy", "assets/galaxy.jpg");
    game.load.image("chat_head", "assets/chat_box.png");
    game.load.image("chat", "assets/send.png");

    game.load.image("modal", "assets/464885029.jpg");
    game.load.image("modal_bg", "assets/modal_bg.png");
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
    for(i=1;i<=10;i++){
      this.load.image("level4_" + i, "image/Level4/" + i + ".png");
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
    socket.emit("AUTH_ATTEMPT", "");
    socket.on("AUTH", function(res) {
      if (res.status === "error") {
        window.location.href = "/";
      }
    });
    server.room.getRoomMessage();
    socket.emit("MY_USER");
    server.room.joinRoom(870);
    // server.room.createRoom('jojojj2011', '1234', 4);
    //server.room.createRoom('jardet', '1234', 4);
    //jardet 1234
    //testza 1234
    //123456 123456
    // 147 258 369 741 123
    server.room.playerStart();
    /*
      server.room.geteRoomMessage();
    */
    x = window.outerWidth / 12; //row
    y = window.outerHeight / 4; //col
    //level3
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
    //coinNum
    text[0] = game.add.text(8 * x + 50, 2.5 * y + 20, "Blue:   " + coinNum[0], {
      font: "13px Arial",
      fill: "#ffffff",
      align: "center"
    });
    text[1] = game.add.text(8 * x + 50, 2.5 * y + 35, "White: " + coinNum[1], {
      font: "13px Arial",
      fill: "#ffffff",
      align: "center"
    });
    text[2] = game.add.text(8 * x + 50, 2.5 * y + 50, "Red:    " + coinNum[2], {
      font: "13px Arial",
      fill: "#ffffff",
      align: "center"
    });
    text[3] = game.add.text(8 * x + 50, 2.5 * y + 65, "Green: " + coinNum[3], {
      font: "13px Arial",
      fill: "#ffffff",
      align: "center"
    });
    text[4] = game.add.text(8 * x + 50, 2.5 * y + 80, "Black:  " + coinNum[4], {
      font: "13px Arial",
      fill: "#ffffff",
      align: "center"
    });
    //showscore
    button[23] = game.add.button(x + 50, 0.5 * y, "score", function() {
      showScore(5 * x, 2 * y);
    });
    button[23].inputEnabled = true;
    //RightWrong
    button[24] = game.add.button(8 * x + 95, 2.5 * y - 15, "right");
    button[24].width = 30;
    button[24].height = 30;
    button[24].events.onInputDown.add(function() {
      OhRight();
    });
    button[24].inputEnabled = true;
    button[25] = game.add.button(8 * x + 50, 2.5 * y - 15, "wrong");
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
    text[15] = game.add.text(8 * x + 80, 3.5 * y + 40, "Total 0/10", {
      font: "25px Arial",
      fill: "#ffffff",
      align: "center"
    });
    // 7/7
    text[16] = game.add.text(10 * x - 100, 0.5 * y, coinLeft[0] + "/7", {
      font: "25px Arial",
      fill: "#ffffff",
      align: "center"
    });
    text[17] = game.add.text(10 * x - 100, y - 20, coinLeft[1] + "/7", {
      font: "25px Arial",
      fill: "#ffffff",
      align: "center"
    });
    text[18] = game.add.text(10 * x - 100, y + 60, coinLeft[2] + "/7", {
      font: "25px Arial",
      fill: "#ffffff",
      align: "center"
    });
    text[19] = game.add.text(10 * x - 100, 1.5 * y + 40, coinLeft[3] + "/7", {
      font: "25px Arial",
      fill: "#ffffff",
      align: "center"
    });
    text[20] = game.add.text(10 * x - 100, 2 * y + 15, coinLeft[4] + "/7", {
      font: "25px Arial",
      fill: "#ffffff",
      align: "center"
    });
    text[21] = game.add.text(0, 0, "Turn : " + turn, {
      font: "25px Arial",
      fill: "#ffffff",
      align: "center"
    });
    //reservedCard
    button[26] = game.add.button(8 * x + 25, 3.5 * y + 30, "lilGold");
    button[26].inputEnabled=false;
  },
  render: function() {}
};

function cardlevel_1(card, cardID,index) {
  var person = confirm("Are you sure in this card level 1?");
  if (person == true) {
    if (
      InfoCardLv1[cardID].reqBlue <=
        InfoPlayer[localNum].blueCoin + InfoPlayer[localNum].cardblue &&
      InfoCardLv1[cardID].reqWhite <=
        InfoPlayer[localNum].whiteCoin + InfoPlayer[localNum].cardwhite &&
      InfoCardLv1[cardID].reqRed <=
        InfoPlayer[localNum].redCoin + InfoPlayer[localNum].cardred &&
      InfoCardLv1[cardID].reqGreen <=
        InfoPlayer[localNum].greenCoin + InfoPlayer[localNum].cardgreen &&
      InfoCardLv1[cardID].reqBlack <=
        InfoPlayer[localNum].blackCoin + InfoPlayer[localNum].cardblack
    ) {
      //updateInfo
      var unsign = [];
      unsign[0] = InfoCardLv1[cardID].reqBlue - InfoPlayer[localNum].cardblue;
      unsign[1] = InfoCardLv1[cardID].reqWhite - InfoPlayer[localNum].cardwhite;
      unsign[2] = InfoCardLv1[cardID].reqRed - InfoPlayer[localNum].cardred;
      unsign[3] = InfoCardLv1[cardID].reqGreen - InfoPlayer[localNum].cardgreen;
      unsign[4] = InfoCardLv1[cardID].reqBlack - InfoPlayer[localNum].cardblack;
      for (var j = 0; j < 5; j++) {
        if (unsign[j] < 0) {
          unsign[j] = 0;
        }
      }
      InfoPlayer[localNum].blueCoin -= unsign[0];
      InfoPlayer[localNum].whiteCoin -= unsign[1];
      InfoPlayer[localNum].redCoin -= unsign[2];
      InfoPlayer[localNum].greenCoin -= unsign[3];
      InfoPlayer[localNum].blackCoin -= unsign[4];
      if (InfoCardLv1[cardID].addBlue) {
        InfoPlayer[localNum].cardblue += InfoCardLv1[cardID].addBlue;
      } else if (InfoCardLv1[cardID].addWhite) {
        InfoPlayer[localNum].cardwhite += InfoCardLv1[cardID].addWhite;
      } else if (InfoCardLv1[cardID].addRed) {
        InfoPlayer[localNum].cardred += InfoCardLv1[cardID].addRed;
      } else if (InfoCardLv1[cardID].addGreen) {
        InfoPlayer[localNum].cardgreen += InfoCardLv1[cardID].addGreen;
      } else if (InfoCardLv1[cardID].addBlack) {
        InfoPlayer[localNum].cardblack += InfoCardLv1[cardID].addBlack;
      }
      InfoPlayer[localNum].score += InfoCardLv1[cardID].score;
      text[5].setText(": " + InfoPlayer[localNum].blueCoin);
      text[6].setText(": " + InfoPlayer[localNum].whiteCoin);
      text[7].setText(": " + InfoPlayer[localNum].redCoin);
      text[8].setText(": " + InfoPlayer[localNum].greenCoin);
      text[9].setText(": " + InfoPlayer[localNum].blackCoin);
      text[10].setText(": " + InfoPlayer[localNum].cardblue);
      text[11].setText(": " + InfoPlayer[localNum].cardwhite);
      text[12].setText(": " + InfoPlayer[localNum].cardred);
      text[13].setText(": " + InfoPlayer[localNum].cardgreen);
      text[14].setText(": " + InfoPlayer[localNum].cardblack);
      endTurn(1,index);
      checkEndGame();
    } else {
      //case not enough coin
      testMessageBox("insufficient");
    }
  }
  ohCancel();
}
function cardlevel_2(card, cardID,index) {
  var person = confirm("Are you sure in this card level 2?");
  if (person == true) {
    if (
      InfoCardLv2[cardID].reqBlue <=
        InfoPlayer[localNum].blueCoin + InfoPlayer[localNum].cardblue &&
      InfoCardLv2[cardID].reqWhite <=
        InfoPlayer[localNum].whiteCoin + InfoPlayer[localNum].cardwhite &&
      InfoCardLv2[cardID].reqRed <=
        InfoPlayer[localNum].redCoin + InfoPlayer[localNum].cardred &&
      InfoCardLv2[cardID].reqGreen <=
        InfoPlayer[localNum].greenCoin + InfoPlayer[localNum].cardgreen &&
      InfoCardLv2[cardID].reqBlack <=
        InfoPlayer[localNum].blackCoin + InfoPlayer[localNum].cardblack
    ) {
      //updateInfo
      var unsign = [];
      unsign[0] = InfoCardLv2[cardID].reqBlue - InfoPlayer[localNum].cardblue;
      unsign[1] = InfoCardLv2[cardID].reqWhite - InfoPlayer[localNum].cardwhite;
      unsign[2] = InfoCardLv2[cardID].reqRed - InfoPlayer[localNum].cardred;
      unsign[3] = InfoCardLv2[cardID].reqGreen - InfoPlayer[localNum].cardgreen;
      unsign[4] = InfoCardLv2[cardID].reqBlack - InfoPlayer[localNum].cardblack;
      for (var j = 0; j < 5; j++) {
        if (unsign[j] < 0) {
          unsign[j] = 0;
        }
      }
      InfoPlayer[localNum].blueCoin -= unsign[0];
      InfoPlayer[localNum].whiteCoin -= unsign[1];
      InfoPlayer[localNum].redCoin -= unsign[2];
      InfoPlayer[localNum].greenCoin -= unsign[3];
      InfoPlayer[localNum].blackCoin -= unsign[4];
      if (InfoCardLv2[cardID].addBlue) {
        InfoPlayer[localNum].cardblue += InfoCardLv2[cardID].addBlue;
      } else if (InfoCardLv2[cardID].addWhite) {
        InfoPlayer[localNum].cardwhite += InfoCardLv2[cardID].addWhite;
      } else if (InfoCardLv2[cardID].addRed) {
        InfoPlayer[localNum].cardred += InfoCardLv2[cardID].addRed;
      } else if (InfoCardLv2[cardID].addGreen) {
        InfoPlayer[localNum].cardgreen += InfoCardLv2[cardID].addGreen;
      } else if (InfoCardLv2[cardID].addBlack) {
        InfoPlayer[localNum].cardblack += InfoCardLv2[cardID].addBlack;
      }
      InfoPlayer[localNum].score += InfoCardLv2[cardID].score;
      text[5].setText(": " + InfoPlayer[localNum].blueCoin);
      text[6].setText(": " + InfoPlayer[localNum].whiteCoin);
      text[7].setText(": " + InfoPlayer[localNum].redCoin);
      text[8].setText(": " + InfoPlayer[localNum].greenCoin);
      text[9].setText(": " + InfoPlayer[localNum].blackCoin);
      text[10].setText(": " + InfoPlayer[localNum].cardblue);
      text[11].setText(": " + InfoPlayer[localNum].cardwhite);
      text[12].setText(": " + InfoPlayer[localNum].cardred);
      text[13].setText(": " + InfoPlayer[localNum].cardgreen);
      text[14].setText(": " + InfoPlayer[localNum].cardblack);
      endTurn(1,index);
      checkEndGame();
    } else {
      //case not enough coin
      testMessageBox("insufficient");
    }
  }
  ohCancel();
}
function cardlevel_3(card, cardID,index) {
  var person = confirm("Are you sure in this card level 3?");
  if (person == true) {
    if (
      InfoCardLv3[cardID].reqBlue <=
        InfoPlayer[localNum].blueCoin + InfoPlayer[localNum].cardblue &&
      InfoCardLv3[cardID].reqWhite <=
        InfoPlayer[localNum].whiteCoin + InfoPlayer[localNum].cardwhite &&
      InfoCardLv3[cardID].reqRed <=
        InfoPlayer[localNum].redCoin + InfoPlayer[localNum].cardred &&
      InfoCardLv3[cardID].reqGreen <=
        InfoPlayer[localNum].greenCoin + InfoPlayer[localNum].cardgreen &&
      InfoCardLv3[cardID].reqBlack <=
        InfoPlayer[localNum].blackCoin + InfoPlayer[localNum].cardblack
    ) {
      //updateInfo
      var unsign = [];
      unsign[0] = InfoCardLv3[cardID].reqBlue - InfoPlayer[localNum].cardblue;
      unsign[1] = InfoCardLv3[cardID].reqWhite - InfoPlayer[localNum].cardwhite;
      unsign[2] = InfoCardLv3[cardID].reqRed - InfoPlayer[localNum].cardred;
      unsign[3] = InfoCardLv3[cardID].reqGreen - InfoPlayer[localNum].cardgreen;
      unsign[4] = InfoCardLv3[cardID].reqBlack - InfoPlayer[localNum].cardblack;
      for (var j = 0; j < 5; j++) {
        if (unsign[j] < 0) {
          unsign[j] = 0;
        }
      }
      InfoPlayer[localNum].blueCoin -= unsign[0];
      InfoPlayer[localNum].whiteCoin -= unsign[1];
      InfoPlayer[localNum].redCoin -= unsign[2];
      InfoPlayer[localNum].greenCoin -= unsign[3];
      InfoPlayer[localNum].blackCoin -= unsign[4];
      if (InfoCardLv3[cardID].addBlue) {
        InfoPlayer[localNum].cardblue += InfoCardLv3[cardID].addBlue;
      } else if (InfoCardLv3[cardID].addWhite) {
        InfoPlayer[localNum].cardwhite += InfoCardLv3[cardID].addWhite;
      } else if (InfoCardLv3[cardID].addRed) {
        InfoPlayer[localNum].cardred += InfoCardLv3[cardID].addRed;
      } else if (InfoCardLv3[cardID].addGreen) {
        InfoPlayer[localNum].cardgreen += InfoCardLv3[cardID].addGreen;
      } else if (InfoCardLv3[cardID].addBlack) {
        InfoPlayer[localNum].cardblack += InfoCardLv3[cardID].addBlack;
      }
      InfoPlayer[localNum].score += InfoCardLv3[cardID].score;
      text[5].setText(": " + InfoPlayer[localNum].blueCoin);
      text[6].setText(": " + InfoPlayer[localNum].whiteCoin);
      text[7].setText(": " + InfoPlayer[localNum].redCoin);
      text[8].setText(": " + InfoPlayer[localNum].greenCoin);
      text[9].setText(": " + InfoPlayer[localNum].blackCoin);
      text[10].setText(": " + InfoPlayer[localNum].cardblue);
      text[11].setText(": " + InfoPlayer[localNum].cardwhite);
      text[12].setText(": " + InfoPlayer[localNum].cardred);
      text[13].setText(": " + InfoPlayer[localNum].cardgreen);
      text[14].setText(": " + InfoPlayer[localNum].cardblack);
      text[21].setText("Turn : " + turn);
      endTurn(1,index);
      checkEndGame();
    } else {
      //case not enough coin
      testMessageBox("insufficient");
    }
  }
  ohCancel();
}
function click_Noble(NobleID,index) {
  var person = confirm("Are you sure in this card Noble?");
  if (person == true) {
    if (
      InfoPlayer[localNum].cardblue >= Noble[NobleID].reqBlue &&
      InfoPlayer[localNum].cardwhite >= Noble[NobleID].reqWhite &&
      InfoPlayer[localNum].cardred >= Noble[NobleID].reqRed &&
      InfoPlayer[localNum].cardgreen >= Noble[NobleID].reqGreen &&
      InfoPlayer[localNum].cardblack >= Noble[NobleID].reqBlack
    ) {
      InfoPlayer[localNum].score += Noble[NobleID].score;
      endTurn(1,index);
    } else {
      testMessageBox("noCard");
    }
  }
}
function click_coin(color) {
  if (color == "blue") {
    if (coinLeft[0] > 0) {
      coinLeft[0] -= 1;
      coinNum[0] += 1;
    }
    text[0].setText("Blue:   " + coinNum[0]);
    text[16].setText(coinLeft[0] + "/7");
  } else if (color == "white") {
    if (coinLeft[1] > 0) {
      coinLeft[1] -= 1;
      coinNum[1] += 1;
    }
    text[1].setText("White: " + coinNum[1]);
    text[17].setText(coinLeft[1] + "/7");
  } else if (color == "red") {
    if (coinLeft[2] > 0) {
      coinLeft[2] -= 1;
      coinNum[2] += 1;
    }
    text[2].setText("Red:    " + coinNum[2]);
    text[18].setText(coinLeft[2] + "/7");
  } else if (color == "green") {
    if (coinLeft[3] > 0) {
      coinLeft[3] -= 1;
      coinNum[3] += 1;
    }
    text[3].setText("Green: " + coinNum[3]);
    text[19].setText(coinLeft[3] + "/7");
  } else if (color == "black") {
    if (coinLeft[4] > 0) {
      coinLeft[4] -= 1;
      coinNum[4] += 1;
    }
    text[4].setText("Black:  " + coinNum[4]);
    text[20].setText(coinLeft[4] + "/7");
  }
}

function OhRight() {
  console.log(InfoPlayer);
  var total =
    InfoPlayer[localNum].blueCoin +
    InfoPlayer[localNum].whiteCoin +
    InfoPlayer[localNum].redCoin +
    InfoPlayer[localNum].greenCoin +
    InfoPlayer[localNum].blackCoin;
  if (
    total + coinNum[0] + coinNum[1] + coinNum[2] + coinNum[3] + coinNum[4] >
    10
  ) {
    testMessageBox("toomuch");
    ohCancel();
    if (coinNum[0] + coinNum[1] + coinNum[2] + coinNum[3] + coinNum[4] > 0) {
      testMessageBox("format");
      ohCancel();
    }
  } else if (
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
      InfoPlayer[localNum].blueCoin += coinNum[0];
      InfoPlayer[localNum].whiteCoin += coinNum[1];
      InfoPlayer[localNum].redCoin += coinNum[2];
      InfoPlayer[localNum].greenCoin += coinNum[3];
      InfoPlayer[localNum].blackCoin += coinNum[4];
      ohCancel();
      updatePlayerInfo();
      console.log(5);
      endTurn(0,0);
      text[21].setText("Turn : " + turn);

      //runturn(turn);
      if (InfoPlayer[1].score >= 15) {
        showFinalBox(
          "The Winner is Player 1 : " + InfoPlayer[1].score + " Point.",
          5 * x,
          2 * y
        );
      } else if (InfoPlayer[2].score >= 15) {
        showFinalBox(
          "The Winner is Player 2 : " + InfoPlayer[2].score + " Point.",
          5 * x,
          2 * y
        );
      } else if (InfoPlayer[3].score >= 15) {
        showFinalBox(
          "The Winner is Player 3 : " + InfoPlayer[3].score + " Point.",
          5 * x,
          2 * y
        );
      } else if (InfoPlayer[4].score >= 15) {
        showFinalBox(
          "The Winner is Player 4 : " + InfoPlayer[4].score + " Point.",
          5 * x,
          2 * y
        );
      }
    } else if (
      coinNum[0] + coinNum[1] + coinNum[2] + coinNum[3] + coinNum[4] < 3 &&
      (coinNum[0] == 2 ||
        coinNum[1] == 2 ||
        coinNum[2] == 2 ||
        coinNum[3] == 2 ||
        coinNum[4] == 2)
    ) {
      InfoPlayer[localNum].blueCoin += coinNum[0];
      InfoPlayer[localNum].whiteCoin += coinNum[1];
      InfoPlayer[localNum].redCoin += coinNum[2];
      InfoPlayer[localNum].greenCoin += coinNum[3];
      InfoPlayer[localNum].blackCoin += coinNum[4];
      ohCancel();
      updatePlayerInfo();
      endTurn(0,0);
      checkEndGame();
    } else {
      testMessageBox("format");
      ohCancel();
    }
  } else {
    testMessageBox("numbe");
    ohCancel();
  }
  function updatePlayerInfo() {
    text[5].setText(": " + InfoPlayer[localNum].blueCoin);
    text[6].setText(": " + InfoPlayer[localNum].whiteCoin);
    text[7].setText(": " + InfoPlayer[localNum].redCoin);
    text[8].setText(": " + InfoPlayer[localNum].greenCoin);
    text[9].setText(": " + InfoPlayer[localNum].blackCoin);
    text[0].setText("Blue:   " + coinNum[0]);
    text[1].setText("White: " + coinNum[1]);
    text[2].setText("Red:    " + coinNum[2]);
    text[3].setText("Green: " + coinNum[3]);
    text[4].setText("Black:  " + coinNum[4]);
    total =
      InfoPlayer[localNum].blueCoin +
      InfoPlayer[localNum].whiteCoin +
      InfoPlayer[localNum].redCoin +
      InfoPlayer[localNum].greenCoin +
      InfoPlayer[localNum].blackCoin;
    text[15].setText("Total " + total + "/10");
  }
}
function endTurn(dest,butt) {
  server.game.takeCoin(
    [
      null,
      InfoPlayer[localNum].blackCoin,
      InfoPlayer[localNum].blueCoin,
      InfoPlayer[localNum].greenCoin,
      InfoPlayer[localNum].redCoin,
      InfoPlayer[localNum].whiteCoin
    ],
    {
      cardblack: InfoPlayer[localNum].cardblack,
      cardblue: InfoPlayer[localNum].cardblue,
      cardgreen: InfoPlayer[localNum].cardgreen,
      cardred: InfoPlayer[localNum].cardred,
      cardwhite: InfoPlayer[localNum].cardwhite
    },
    dest,
    butt,
    InfoPlayer[localNum].score
  );
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

  coinLeft[0] =
    7 -
    InfoPlayer[1].blueCoin -
    InfoPlayer[2].blueCoin -
    InfoPlayer[3].blueCoin -
    InfoPlayer[4].blueCoin;
  coinLeft[1] =
    7 -
    InfoPlayer[1].whiteCoin -
    InfoPlayer[2].whiteCoin -
    InfoPlayer[3].whiteCoin -
    InfoPlayer[4].whiteCoin;
  coinLeft[2] =
    7 -
    InfoPlayer[1].redCoin -
    InfoPlayer[2].redCoin -
    InfoPlayer[3].redCoin -
    InfoPlayer[4].redCoin;
  coinLeft[3] =
    7 -
    InfoPlayer[1].greenCoin -
    InfoPlayer[2].greenCoin -
    InfoPlayer[3].greenCoin -
    InfoPlayer[4].greenCoin;
  coinLeft[4] =
    7 -
    InfoPlayer[1].blackCoin -
    InfoPlayer[2].blackCoin -
    InfoPlayer[3].blackCoin -
    InfoPlayer[4].blackCoin;

  text[16].setText(coinLeft[0] + "/7");
  text[17].setText(coinLeft[1] + "/7");
  text[18].setText(coinLeft[2] + "/7");
  text[19].setText(coinLeft[3] + "/7");
  text[20].setText(coinLeft[4] + "/7");

  total =
    InfoPlayer[localNum].blueCoin +
    InfoPlayer[localNum].whiteCoin +
    InfoPlayer[localNum].redCoin +
    InfoPlayer[localNum].greenCoin +
    InfoPlayer[localNum].blackCoin;

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
  } else if (type == "insufficient") {
    this.showMessageBox("You don't have enough coins!", 5 * x, 2 * y);
  } else if (type == "noCard") {
    this.showMessageBox("You don't have enough cards!", 5 * x, 2 * y);
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
    InfoPlayer[1].playerName.substring(0, 5) +
      "\n\n" +
      InfoPlayer[2].playerName.substring(0, 5) +
      "\n\n" +
      InfoPlayer[3].playerName.substring(0, 5) +
      "\n\n" +
      InfoPlayer[4].playerName.substring(0,5)+localNum
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

  closeButton2.x = back2.width - 40;
  closeButton2.y = 10;
  closeButton2.scale.setTo(0.5);
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
  scoreNum[10].x = back2.width / 2 - scoreNum[10].width / 2 + 265;
  scoreNum[10].y = back2.height / 2 - scoreNum[10].height / 2 + 10;
  scoreNum[11].x = 20;
  scoreNum[11].y = back2.height / 2 - scoreNum[11].height / 2 + 10;
  detail2[0].x = back2.width / 2 - scoreNum[0].width / 2 - 180;
  detail2[0].y = back2.height / 2 - scoreNum[0].height / 2 - 30;
  detail2[1].x = back2.width / 2 - scoreNum[1].width / 2 - 140;
  detail2[1].y = back2.height / 2 - scoreNum[1].height / 2 - 30;
  detail2[2].x = back2.width / 2 - scoreNum[2].width / 2 - 100;
  detail2[2].y = back2.height / 2 - scoreNum[2].height / 2 - 30;
  detail2[3].x = back2.width / 2 - scoreNum[3].width / 2 - 60;
  detail2[3].y = back2.height / 2 - scoreNum[3].height / 2 - 30;
  detail2[4].x = back2.width / 2 - scoreNum[4].width / 2 - 20;
  detail2[4].y = back2.height / 2 - scoreNum[4].height / 2 - 30;
  detail2[5].x = back2.width / 2 - scoreNum[5].width / 2 + 20;
  detail2[5].y = back2.height / 2 - scoreNum[5].height / 2 - 30;
  detail2[6].x = back2.width / 2 - scoreNum[6].width / 2 + 60;
  detail2[6].y = back2.height / 2 - scoreNum[6].height / 2 - 30;
  detail2[7].x = back2.width / 2 - scoreNum[7].width / 2 + 100;
  detail2[7].y = back2.height / 2 - scoreNum[7].height / 2 - 30;
  detail2[8].x = back2.width / 2 - scoreNum[8].width / 2 + 140;
  detail2[8].y = back2.height / 2 - scoreNum[8].height / 2 - 30;
  detail2[9].x = back2.width / 2 - scoreNum[9].width / 2 + 180;
  detail2[9].y = back2.height / 2 - scoreNum[9].height / 2 - 30;
  //  detail2[10].x = back2.width / 2 - scoreNum[10].width / 2 + 220;
  //  detail2[10].y = back2.height / 2 - scoreNum[10].height / 2 - 30;
  this.scrBox = scrBox;
}
function hideBox2() {
  this.scrBox.destroy();
}
function showFinalBox(text, w = 300, h = 300) {
  if (this.msgBox3) {
    this.msgBox3.destroy();
  }
  var msgBox3 = game.add.group();
  var back = game.add.sprite(0, 0, "popup");
  var closeButton = game.add.sprite(0, 0, "exitpopup");
  var text1 = game.add.text(0, 0, text);
  text1.wordWrap = true;
  text1.wordWrapWidth = w * 0.9;
  back.width = w;
  back.height = h;
  msgBox3.add(back);
  msgBox3.add(closeButton);
  msgBox3.add(text1);
  closeButton.x = back.width / 2 - closeButton.width / 2;
  closeButton.y = back.height - closeButton.height;
  closeButton.inputEnabled = true;
  closeButton.events.onInputDown.add(this.hideBox3, this);
  msgBox3.x = game.width / 2 - msgBox3.width / 2;
  msgBox3.y = game.height / 2 - msgBox3.height / 2;
  text1.x = back.width / 2 - text1.width / 2;
  text1.y = back.height / 2 - text1.height / 2 - 100;
  this.msgBox3 = msgBox3;
}
function hideBox3() {
  this.msgBox3.destroy();
  game.state.start("game");
}
function checkEndGame(){
  if (InfoPlayer[1].score >= 15) {
    showFinalBox(
      "The Winner is Player 1 : " + InfoPlayer[1].score + " Point.",
      5 * x,
      2 * y
    );
  } else if (InfoPlayer[2].score >= 15) {
    showFinalBox(
      "The Winner is Player 2 : " + InfoPlayer[2].score + " Point.",
      5 * x,
      2 * y
    );
  } else if (InfoPlayer[3].score >= 15) {
    showFinalBox(
      "The Winner is Player 3 : " + InfoPlayer[3].score + " Point.",
      5 * x,
      2 * y
    );
  } else if (InfoPlayer[4].score >= 15) {
    showFinalBox(
      "The Winner is Player 4 : " + InfoPlayer[4].score + " Point.",
      5 * x,
      2 * y
    );
  }
}
