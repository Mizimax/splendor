var server = {
  joined: false,
  match_id: "",
  user_id: "",
  ready: false,
  game: {
    loadCard: function() {
      socket.on("LOAD_CARD");
    },
    loadPlayerInfo: function() {
      //สุ่มในนี้
      socket.on("LOAD_PLAYER");
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
    getPlayerReady: function() {
      socket.on("PLAYER_READY", function(data) {
        console.log(data);
      });
    },
    getDetail: function() {
      //ดึงข้อมูล
      socket.to(this.roomName).on("ROOM_DETAIL", function(data) {
        console.log(data);
      });
    },
    getRoomMessage: function() {
      var self = this;
      socket.on("ROOM_MESSAGE", function(data) {
        console.log(data);
        if (data.action === "JOIN_ROOM") {
          self.getPlayerReady();
          self.playerReady();
          self.playerStart();
          if (data.status === "success") {
            console.log(data.message);
            this.match_id = data.match_id;
            this.joined = true;
          } else {
            alert(data.message);
            // window.location.href = "/";
          }
        } else {
        }
      });
    }
  }
};
