var server = {
  room: {
    joinPlayingRoom: function() {
      socket.emit("ROOM_JOIN");
    },
    getRoomMessage: function() {
      socket.on("ROOM_MESSAGE", function(data) {
        if (data.action === "JOIN_ROOM") {
          if (data.status === "success") {
            console.log(data.message);
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
