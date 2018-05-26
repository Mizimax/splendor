var server = {
  joined: false,
  match_id: "",
  user_id: "",
  ready: false,
  game: {
    takeCoin: function(coinArr, card, destroy, button, score) {
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
          modal.hide();
        } else if (data.action === "TAKE_CARD") {
          // turn = data.turn;
        } else if (data.action === "TAKE_COIN") {
          // turn = data.turn;
        }
      });
    }
  }
};
