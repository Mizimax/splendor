var loadCard = false;
var server = {
  joined: false,
  match_id: "",
  user_id: "",
  ready: false,
  game: {
    takeCoin: function(coinArr, card, destroy, button, score) {
      console.log(destroy);
      console.log(button);
      socket.emit("TAKE_COIN", {
        coinArr: coinArr,
        cardValue: [
          card.cardblack,
          card.cardblue,
          card.cardgreen,
          card.cardred,
          card.cardwhite
        ],
        card: card,
        destroy: destroy,
        button: button,
        score: score
      });
    }
  },
  room: {
    joinRoom: function(match_id) {
      socket.emit("ROOM_JOIN", { match_id: match_id });
    },
    joinPlayingRoom: function() {
      socket.emit("ROOM_JOIN_WAITING");
    },
    createRoom: function(roomName, password, players) {
      socket.emit("ROOM_CREATE", {
        roomName: roomName,
        password: password,
        players: players
      });
    },
    playerReady: function() {
      socket.emit("PLAYER_READY", { ready: this.ready });
    },
    playerStart: function() {
      socket.emit("GAME_START");
    },
    getPlayerDetail: function() {
      //ดึงข้อมูล
      socket.emit("PLAYER_DETAIL");
    },
    loadCard: function() {
      socket.emit("LOAD_CARD");
    },
    getRoomMessage: function() {
      var self = this;
      socket.on("ROOM_MESSAGE", function(data) {
        console.log(data);
        if (data.action === "JOIN_ROOM") {
          self.playerReady();
          self.playerStart();
          if (data.status === "success") {
            this.match_id = data.match_id;
            this.joined = true;
          } else {
          }
        } else if (data.action === "CREATE_ROOM") {
        } else if (data.action === "LOAD_CARD") {
          window.DBcards = data.cards;
            DBrand = data.random;
           //window.DBplayer=data.user;
            //checkPlayerDetail();
            cardadd();
            turnAdd();
            
        } else if (data.action === "GAME_START") {
          if (data.status === "success") {
            console.log(111);
            self.getPlayerDetail();
            turn = data.turn;
            window.hostUser = data.user_id;
            text[21].setText("Turn : " + turn);
            modal.hide();
          }
        } else if (data.action === "PLAYER_DETAIL") {
          if (data.status === "st.atus") 
          console.log(222);
          window.DBplayer = data.user;
          checkPlayerDetail();
        } else if (data.action === "MY_USER") {
          name=data.myuser;
          
        } else if (data.action === "TAKE_COIN") {
          console.log(data.destroy);
          InfoPlayer[modedTurn].blueCoin =
            data.coin.BlueCoin;
          InfoPlayer[modedTurn].whiteCoin =
            data.coin.WhiteCoin;
          InfoPlayer[modedTurn].redCoin = data.coin.RedCoin;
          InfoPlayer[modedTurn].greenCoin =
            data.coin.GreenCoin;
          InfoPlayer[modedTurn].blackCoin =
            data.coin.BlackCoin;
          InfoPlayer[modedTurn].cardblue =
            data.card.cardblue;console.log(data.destroy);
          InfoPlayer[modedTurn].cardwhite =
            data.card.cardwhite;
          InfoPlayer[modedTurn].cardred = data.card.cardred;
          InfoPlayer[modedTurn].cardgreen =
            data.card.cardgreen;
          InfoPlayer[modedTurn].cardblack =
            data.card.cardblack;
          InfoPlayer[modedTurn].score = data.score;
          if(data.turn%4 != 0){
            modedTurn=data.turn%4;
          }
          else{
            modedTurn = 4;
          }
          console.log(modedTurn);
          //modedTurn = 1;
          turn = data.turn;
          serverTemp[0]=InfoPlayer[1].blueCoin+InfoPlayer[2].blueCoin+InfoPlayer[3].blueCoin+InfoPlayer[4].blueCoin;
          serverTemp[1]=InfoPlayer[1].whiteCoin+InfoPlayer[2].whiteCoin+InfoPlayer[3].whiteCoin+InfoPlayer[4].whiteCoin;
          serverTemp[2]=InfoPlayer[1].redCoin+InfoPlayer[2].redCoin+InfoPlayer[3].redCoin+InfoPlayer[4].redCoin;
          serverTemp[3]=InfoPlayer[1].greenCoin+InfoPlayer[2].greenCoin+InfoPlayer[3].greenCoin+InfoPlayer[4].greenCoin;
          serverTemp[4]=InfoPlayer[1].blackCoin+InfoPlayer[2].blackCoin+InfoPlayer[3].blackCoin+InfoPlayer[4].blackCoin;
          coinLeft[0]= 7 - serverTemp[0];
          coinLeft[1]= 7 - serverTemp[1];
          coinLeft[2]= 7 - serverTemp[2];
          coinLeft[3]= 7 - serverTemp[3];
          coinLeft[4]= 7 - serverTemp[4];
          upd();
          console.log(data.destroy);
          if (data.destroy==1){
            console.log(1234);
            serverButton = data.button;
            changeCard();

          }
          console.log(data.destroy);
          changeTurn();
          console.log(data.destroy);
        }
      });
    }
  }
};
