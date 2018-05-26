var server = {
  joined: false,
  match_id: "",
  user_id: "",
  ready: false,
  game: {
    takeCoin: function(coinArr, card, destroy, button, score) {
      console.log(coinArr);
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
      socket.emit("ROOM_JOIN_PLAYING");
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
    getRoomMessage: function() {
      var self = this;
      socket.on("ROOM_MESSAGE", function(data) {
        console.log(data);
        if (data.action === "JOIN_ROOM") {
          self.playerReady();
          self.playerStart();
          self.getPlayerDetail();
          if (data.status === "success") {
            this.match_id = data.match_id;
            this.joined = true;
          } else {
            // window.location.href = "/";
          }
        } else if (data.action === "LOAD_CARD") {
          window.DBcards = data.cards;
          cardadd();
        } else if (data.action === "GAME_START") {
          // turn = data.turn;
          turn = data.turn;
          text[21].setText("Turn : " + turn);
          modal.hide();
        } else if (data.action === "PLAYER_DETAIL") {
          window.DBplayer = data.user;
          window.name = data.myuser;
          checkPlayerDetail();
        }
         else if (data.action === "TAKE_CARD") {
          
          turn = data.turn;
        } else if (data.action === "TAKE_COIN") {
          InfoPlayer[(turn%4)+1].blueCoin = data.coin.BlueCoin;
          InfoPlayer[(turn%4)+1].whiteCoin = data.coin.WhiteCoin;
          InfoPlayer[(turn%4)+1].redCoin = data.coin.RedCoin;
          InfoPlayer[(turn%4)+1].greenCoin = data.coin.GreenCoin;
          InfoPlayer[(turn%4)+1].blackCoin = data.coin.BlackCoin;
          InfoPlayer[(turn%4)+1].cardblue = data.card.cardblue;
          InfoPlayer[(turn%4)+1].cardwhite = data.card.cardwhite;
          InfoPlayer[(turn%4)+1].cardred = data.card.cardred;
          InfoPlayer[(turn%4)+1].cardgreen = data.card.cardgreen;
          InfoPlayer[(turn%4)+1].cardblack = data.card.cardblack;
          InfoPlayer[(turn%4)+1].score = data.score;
          window.upDestroy = data.destroy;
          window.upButton = data.button;
          //update();
          turn = data.turn;
          text[21].setText("Turn : " + turn);

        }
      });
    }
  }
};
