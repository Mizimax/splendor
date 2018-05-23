var server = {
  joined: false,
  roomName: "",
  room: {
    joinPlayingRoom: function() {
      socket.emit("ROOM_JOIN");
    },
    createRoom: function(roomName, password, players) {
      socket.emit("ROOM_CREATE", {
        roomName: roomName,
        password: password,
        players: players
      });
    },
    getDetail: function() {
      //ดึงข้อมูล
      socket.to(this.roomName).on("ROOM_DETAIL", function(data) {
        console.log(data);
      });
    },
    getRoomMessage: function() {
      socket.on("ROOM_MESSAGE", function(data) {
        if (data.action === "JOIN_ROOM") {
          if (data.status === "success") {
            console.log(data.message);
            this.joined = true;
          } else {
            alert(data.message);
            // window.location.href = "/";
          }
        } else {
        }
        console.log(data);
      });
    }
  }
};
