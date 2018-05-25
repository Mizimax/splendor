const db = require("./mysql").connect();
const socket = require("./io.connect").socket;

const room = function(socket, io) {
  // socket.on("GAME_START", async function(data) {
  //   try {
  //     let [resCreatePlayer] = await db.query(
  //       "INSERT INTO match_player VALUES (?,?,?)",
  //       [resCreate.insertId, socket.handshake.session.userdata.user_id, 0]
  //     );
  //     if (resCreatePlayer.affectedRows != 0) {
  //       socket.join(resCreate.insertId);
  //       socket.to(resCreate.insertId).on("PLAYER_READY", function(data) {
  //         console.log(data);
  //       });
  //       socket.emit("ROOM_MESSAGE", {
  //         status: "success",
  //         action: "JOIN_ROOM",
  //         message: "Room Joined",
  //         match_id: resCreate.insertId
  //       });
  //     }
  //   } catch (error) {
  //     if (error.code === "ER_DUP_ENTRY") {
  //       socket.emit("ROOM_MESSAGE", {
  //         status: "error",
  //         action: "JOIN_ROOM",
  //         message: "Already Joined",
  //         match_id: resCreate.insertId
  //       });
  //     }
  //   }
  // });

  socket.on("ROOM_CREATE", async function(data) {
    var date = new Date();
    var dateTime =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
    let [resUniqueCreate] = await db.query(
      "SELECT * FROM game_match WHERE host_id = ? AND match_status = 'WAITING'",
      [socket.handshake.session.userdata.user_id]
    );
    if (resUniqueCreate.length == 0) {
      let [resCreate] = await db.query(
        "INSERT INTO game_match(host_id,match_name,match_status,match_type,match_password,match_start,match_player_no) VALUES (?,?,?,?,?,?,?)",
        [
          socket.handshake.session.userdata.user_id,
          data.roomName,
          "WAITING",
          "NORMAL",
          data.password,
          dateTime,
          4
        ]
      );
      if (resCreate.length != 0) {
        socket.emit("ROOM_MESSAGE", {
          status: "success",
          action: "CREATE_ROOM",
          message: "Room" + resCreate.insertId + "Created",
          match_id: resCreate.insertId
        });
        try {
          let [resCreatePlayer] = await db.query(
            "INSERT INTO match_player VALUES (?,?,?)",
            [resCreate.insertId, socket.handshake.session.userdata.user_id, 0]
          );
          if (resCreatePlayer.affectedRows != 0) {
            socket.join(resCreate.insertId);
            socket.room = resCreate.insertId;
            socket.emit("ROOM_MESSAGE", {
              status: "success",
              action: "JOIN_ROOM",
              message: "Room Joined",
              match_id: resCreate.insertId
            });
          }
        } catch (error) {
          if (error.code === "ER_DUP_ENTRY") {
            socket.join(resCreate.insertId);
            socket.room = resCreate.insertId;
            socket.emit("ROOM_MESSAGE", {
              status: "error",
              action: "JOIN_ROOM",
              message: "Already Joined",
              match_id: resCreate.insertId
            });
          }
        }
      }
    } else {
      socket.emit("ROOM_MESSAGE", {
        status: "error",
        action: "CREATE_ROOM",
        message: "Room Exist ! Join exist room !"
      });
      try {
        let [resCreatePlayer] = await db.query(
          "INSERT INTO match_player VALUES (?,?,?)",
          [
            resUniqueCreate[0].match_id,
            socket.handshake.session.userdata.user_id,
            0
          ]
        );
        if (resCreatePlayer.affectedRows != 0) {
          socket.join(resUniqueCreate[0].match_id);
          socket.room = resUniqueCreate[0].match_id;
          socket.emit("ROOM_MESSAGE", {
            status: "success",
            action: "JOIN_ROOM",
            message: "Room" + resUniqueCreate[0].match_id + "Joined",
            match_id: resUniqueCreate[0].match_id
          });
        }
      } catch (error) {
        if (error.code === "ER_DUP_ENTRY") {
          socket.join(resUniqueCreate[0].match_id);
          socket.room = resUniqueCreate[0].match_id;
          socket.emit("ROOM_MESSAGE", {
            status: "error",
            action: "JOIN_ROOM",
            message: "Already Join",
            match_id: resUniqueCreate[0].match_id
          });
        }
      }
    }
  });

  socket.on("ROOM_JOIN_PLAYING", async function() {
    // socket.broadcast.emit("chat", msg);
    let [res] = await db.query(
      "SELECT match_id FROM match_player mp JOIN game_match gm ON mp.match_id = gm.match_id WHERE mp.user_id = ? AND gm.match_status = ?",
      [socket.handshake.session.userdata.user_id, "PLAYING"]
    );

    if (res.length != 0) {
      socket.join(res[0].match_id);
      socket.room = res[0].match_id;
      socket.emit("ROOM_MESSAGE", {
        status: "success",
        action: "JOIN_ROOM",
        message: "Join room " + res[0].match_id,
        match_id: res[0].match_id
      });
    } else {
      socket.emit("ROOM_MESSAGE", {
        status: "error",
        action: "JOIN_ROOM",
        message: "You aren't playing on game",
        match_id: res[0].match_id
      });
    }

    // socket.join('')
    // so
  });

  socket.on("ROOM_JOIN", async function(data) {
    // socket.broadcast.emit("chat", msg);

    try {
      let [res] = await db.query("INSERT INTO match_player VALUES (?,?,?,0)", [
        data.match_id,
        socket.handshake.session.userdata.user_id,
        0
      ]);
      console.log(res);
      if (res.affectedRows != 0) {
        socket.join(res[0].match_id);
        socket.room = res[0].match_id;
        socket.emit("ROOM_MESSAGE", {
          status: "success",
          action: "JOIN_ROOM",
          message: "Join room " + res[0].match_id,
          match_id: res[0].match_id
        });
      } else {
        socket.emit("ROOM_MESSAGE", {
          status: "error",
          action: "JOIN_ROOM",
          message: "Can't Join"
        });
      }
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        socket.join(data.match_id);
        socket.room = data.match_id;
        socket.emit("ROOM_MESSAGE", {
          status: "error",
          action: "JOIN_ROOM",
          message: "Already Join",
          match_id: data.match_id
        });
      }
    }

    socket.on("PLAYER_READY", async function(data) {
      if (socket.room) {
        let [resUpdateReady] = await db.query(
          "UPDATE match_player SET ready = ? WHERE match_id = ? AND user_id = ?",
          [!data.ready, socket.room, socket.handshake.session.userdata.user_id]
        );
        if (resUpdateReady.affectedRows != 0)
          io.sockets.in(socket.room).emit("ROOM_MESSAGE", {
            status: 'success',
            action: 'PLAYER_READY',
            match_id: socket.room,
            user_id: socket.handshake.session.userdata.user_id,
            ready: !data.ready
          });
      }
    });

    socket.on("GAME_START", async function() {
      if (socket.room) {
        try {
          let [resPlayer] = await db.query(
            "SELECT ready FROM match_player WHERE match_id = ?",
            [socket.room]
          );

          let status = 0;
          resPlayer.forEach(function(item) {
            status += item.ready;
          });
          //if (status === 4) {
          let [resSelect] = await db.query(
            "SELECT c.card_id, c.card_image, c.card_level, c.card_score, ccc.color_name as card_color_name, ccc.color_code, cc.color_name, cr.amount FROM coin_requirement cr " +
              "JOIN card c ON c.card_id = cr.card_id " +
              "JOIN coin co ON co.coin_id = cr.coin_requirement " +
              "JOIN coin_color cc ON cc.color_id = co.coin_color_id " +
              "JOIN coin_color ccc ON ccc.color_id = c.coin_color_id",
            [socket.room]
          );
          let result = [];
          if (resSelect.length != 0) {
            resSelect.forEach(function(item, index) {
              // console.log(item["card_id"]);
              result[item["card_id"]] = {
                ...result[item["card_id"]],
                card_id: item["card_id"],
                color_code: item["color_code"],
                card_level: item["card_level"],
                card_score: item["card_score"],
                card_image: item["card_image"],
                ["add" + item["card_color_name"]]: 1,
                ["req" + item["color_name"]]: item["amount"]
              };
            });
            io.sockets.in(socket.room).emit("ROOM_MESSAGE", {
              status: "success",
              action: "LOAD_CARD",
              cards: result
            });
            io.sockets.in(socket.room).emit("ROOM_MESSAGE", {
              status: "success",
              action: "GAME_START",
              match_id: socket.room,
              start: true
            });
          }

          // } else
          //   io.sockets.in(socket.room).emit("ROOM_MESSAGE", {
          //     match_id: socket.room,
          //     start: false
          //   });
        } catch (error) {
          console.log(error);
        }
      }
    });
  });
};

exports.room = room;
