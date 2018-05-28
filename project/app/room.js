const db = require("./mysql").connect();
const socket = require("./io.connect").socket;

const room = function(socket, io) {
  socket.on("GET_ROOM", async function(data) {
    let [resGetRoom] = await db.query(
      "SELECT gm.match_id, user.user_display_name, gm.match_name, gm.match_status, gm.match_type, gm.match_player_no, COUNT(user.user_id) as playerInRoom, (case when (!gm.match_password) THEN 0 ELSE 1 END) as pw_require " +
        "FROM match_player mp " +
        "RIGHT JOIN game_match gm ON gm.match_id = mp.match_id " +
        "JOIN user ON user.user_id = gm.host_id WHERE match_status IN(?,?) AND match_type = ? " +
        "GROUP BY match_id ORDER BY match_status DESC",
      ["WAITING", "PLAYING", data.match_type]
    );
    io.sockets.emit("GET_ROOM", {
      status: "success",
      action: "GET_ROOM",
      data: resGetRoom,
      match_type: data.match_type
    });
  });

  socket.on("GET_PLAYERS", async function() {
    let [resGetPlayers] = await db.query(
      "SELECT user_id, user_image, user_display_name FROM user WHERE user_online_status = 1"
    );
    io.sockets.emit("GET_PLAYERS", {
      status: "success",
      action: "GET_PLAYERS",
      data: resGetPlayers
    });
  });

  socket.on("GET_FRIEND", async function() {
    let [resGetFriend] = await db.query(
      "SELECT u.user_id, u.user_image, u.user_display_name, u.user_online_status FROM user_relation ur " +
        "JOIN user u ON u.user_id = ur.related_id " +
        // "WHERE user.user_id = ? AND user.user_online_status = 1",
        "WHERE ur.user_id = ? ORDER BY u.user_online_status DESC",
      [socket.handshake.session.userdata.user_id]
    );
    socket.emit("GET_FRIEND", {
      status: "success",
      action: "GET_FRIEND",
      data: resGetFriend
    });
  });

  socket.on("ADD_FRIEND", async function(data) {
    let [resGetFriend] = await db.query(
      "INSERT INTO user_relation VALUES(?,?,?)",
      [socket.handshake.session.userdata.user_id, data.user_id, "FRIEND"]
    );
    socket.emit("ADD_FRIEND", {
      status: "success",
      action: "ADD_FRIEND",
      user_id: data.user_id
    });
  });

  socket.on("GET_PLAYER_ROOM", async function() {
    let [resGetPlayerRoom] = await db.query(
      "SELECT mp.match_id, gm.host_id, gm.match_name, u.user_display_name, u.user_image, u.user_id, mp.ready FROM match_player mp " +
        "JOIN user u ON u.user_id = mp.user_id " +
        "JOIN game_match gm ON gm.match_id = mp.match_id " +
        "WHERE mp.match_id = ?",
      [socket.room]
    );
    console.log(resGetPlayerRoom);
    io.sockets.emit("ROOM_MESSAGE", {
      status: "success",
      action: "GET_PLAYER_ROOM",
      data: resGetPlayerRoom
    });
  });

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
    let [resCreate] = await db.query(
      "INSERT INTO game_match(host_id,match_name,match_status,match_type,match_password,match_start,match_player_no,match_turn) VALUES (?,?,?,?,?,?,?,?)",
      [
        socket.handshake.session.userdata.user_id,
        data.roomName,
        "WAITING",
        data.rank_type,
        data.password,
        dateTime,
        4,
        1
      ]
    );
    if (resCreate.length != 0) {
      socket.emit("ROOM_MESSAGE", {
        status: "success",
        action: "CREATE_ROOM",
        message: "Room " + resCreate.insertId + " Created",
        match_id: resCreate.insertId
      });

      let [resCreatePlayer] = await db.query(
        "INSERT INTO match_player VALUES (?,?,?,0)",
        [resCreate.insertId, socket.handshake.session.userdata.user_id, 0]
      );
      if (resCreatePlayer.affectedRows != 0) {
        socket.join(resCreate.insertId);
        socket.room = resCreate.insertId;
        io.sockets.to(socket.room).emit("ROOM_MESSAGE", {
          status: "success",
          action: "JOIN_ROOM",
          message: "Room Joined",
          match_id: resCreate.insertId,
          user_id: socket.handshake.session.userdata.user_id
        });
      }
    }
  });

  socket.on("ROOM_JOIN_WAITING", async function() {
    // socket.broadcast.emit("chat", msg);
    let [res] = await db.query(
      "SELECT mp.match_id FROM match_player mp JOIN game_match gm ON mp.match_id = gm.match_id WHERE mp.user_id = ? AND gm.match_status = ?",
      [socket.handshake.session.userdata.user_id, "WAITING"]
    );

    if (res.length != 0) {
      socket.join(res[0].match_id);
      socket.room = res[0].match_id;
      io.sockets.to(socket.room).emit("ROOM_MESSAGE", {
        status: "success",
        action: "JOIN_ROOM",
        message: "Join room " + res[0].match_id,
        match_id: res[0].match_id,
        user_id: socket.handshake.session.userdata.user_id
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

    let [resReady] = await db.query(
      "SELECT ready FROM match_player WHERE match_id = ?",
      [data.match_id]
    );
    if (resReady.length < 4) {
      try {
        let [res] = await db.query(
          "INSERT INTO match_player VALUES (?,?,?,0)",
          [data.match_id, socket.handshake.session.userdata.user_id, 0]
        );
        if (res.affectedRows != 0) {
          socket.join(data.match_id);
          socket.room = data.match_id;
          io.sockets.to(socket.room).emit("ROOM_MESSAGE", {
            status: "success",
            action: "JOIN_ROOM",
            message: "Join room " + data.match_id,
            ready: resReady,
            match_id: data.match_id,
            user_id: socket.handshake.session.userdata.user_id
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
            ready: resReady,
            match_id: data.match_id
          });
        }
      }
    } else {
      let [resReady] = await db.query(
        "SELECT ready FROM match_player WHERE match_id = ? AND user_id = ?",
        [data.match_id, socket.handshake.session.userdata.user_id]
      );
      if (resReady.length === 0) {
        socket.emit("ROOM_MESSAGE", {
          status: "error",
          action: "JOIN_ROOM",
          message: "Room Full",
          user_id: socket.handshake.session.userdata.user_id
        });
      } else {
        socket.join(data.match_id);
        socket.room = data.match_id;
        socket.emit("ROOM_MESSAGE", {
          status: "error",
          action: "JOIN_ROOM",
          message: "Already Join",
          ready: resReady,
          match_id: data.match_id
        });
      }
    }
  });

  socket.on("PLAYER_READY", async function(data) {
    try {
      if (socket.room) {
        let [resReady] = await db.query(
          "SELECT ready FROM match_player WHERE user_id = ? AND match_id = ?",
          [socket.handshake.session.userdata.user_id, socket.room]
        );
        let [resUpdateReady] = await db.query(
          "UPDATE match_player SET ready = ? WHERE match_id = ? AND user_id = ?",
          [
            !resReady[0].ready,
            socket.room,
            socket.handshake.session.userdata.user_id
          ]
        );
        if (resUpdateReady.affectedRows != 0)
          io.sockets.in(socket.room).emit("ROOM_MESSAGE", {
            status: "success",
            action: "PLAYER_READY",
            match_id: socket.room,
            user_id: socket.handshake.session.userdata.user_id,
            ready: !resReady[0].ready
          });
      }
    } catch (error) {
      console.log(error);
    }
  });

  socket.on("LOAD_CARD", async function() {
    if (socket.room) {
      let [resUserDisplay] = await db.query(
        "SELECT user_display_name FROM user WHERE user_id = ?",
        [socket.handshake.session.userdata.user_id]
      );
      let [resSelect] = await db.query(
        "SELECT c.card_id, c.card_image, c.card_level, c.card_score, ccc.color_name as card_color_name, ccc.color_code, cc.color_name, cr.amount FROM coin_requirement cr " +
          "JOIN card c ON c.card_id = cr.card_id " +
          "JOIN coin co ON co.coin_id = cr.coin_requirement " +
          "JOIN coin_color cc ON cc.color_id = co.coin_color_id " +
          "JOIN coin_color ccc ON ccc.color_id = c.coin_color_id"
      );

      let arr = [];
      let i = 1;
      let rand = [];
      for (i = 1; i <= 40; i++) {
        rand[i] = Math.floor(Math.random() * 40) + 1;
        if (!arr[0]) arr[0] = [];
        arr[0][i] = rand[i];
      }
      for (i = 41; i <= 70; i++) {
        rand[i - 40] = Math.floor(Math.random() * 30) + 1;
        if (!arr[1]) arr[1] = [];
        arr[1][i - 40] = rand[i - 40];
      }
      for (i = 71; i <= 90; i++) {
        rand[i - 70] = Math.floor(Math.random() * 20) + 1;
        if (!arr[2]) arr[2] = [];
        arr[2][i - 70] = rand[i - 70];
      }
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
        socket.emit("ROOM_MESSAGE", {
          status: "success",
          action: "MY_USER",
          myuser: resUserDisplay[0].user_display_name
        });
        io.sockets.to(socket.room).emit("ROOM_MESSAGE", {
          status: "success",
          action: "LOAD_CARD",
          cards: result,
          random: arr
        });
      } else {
        //cant start not host
        socket.emit("ROOM_MESSAGE", {
          status: "error",
          action: "GAME_START",
          match_id: socket.room,
          start: false,
          message: "Can't start you're not host"
        });
      }
    }
  });

  socket.on("GAME_START", async function() {
    if (socket.room) {
      try {
        let [resPlayer] = await db.query(
          "SELECT ready FROM match_player WHERE match_id = ? AND ready = ?",
          [socket.room, 1]
        );

        let status = 0;
        resPlayer.forEach(function(item) {
          status += item.ready;
        });
        if (status >= 4) {
          try {
            let [resUpdateUser] = await db.query(
              "UPDATE user SET user_online_status = 2 WHERE user_id = ?",
              [socket.handshake.session.userdata.user_id]
            );
            let [resUpdateMatch] = await db.query(
              "UPDATE game_match SET match_status = 'PLAYING' WHERE host_id = ? AND match_id = ?",
              [socket.handshake.session.userdata.user_id, socket.room]
            );
            if (resUpdateMatch.affectedRows != 0) {
              let [resGetTurn] = await db.query(
                "SELECT match_turn FROM game_match WHERE match_id = ?",
                [socket.room]
              );

              io.sockets.to(socket.room).emit("ROOM_MESSAGE", {
                status: "success",
                action: "GAME_START",
                match_id: socket.room,
                user_id: socket.handshake.session.userdata.user_id,
                start: true,
                turn: resGetTurn[0].match_turn
              });
              detail();
            }
          } catch (error) {
            console.log(error);
          }
        } else
          socket.emit("ROOM_MESSAGE", {
            status: "error",
            action: "GAME_START",
            match_id: socket.room,
            start: false,
            message: "Require 4 Player"
          });
      } catch (error) {
        console.log(error);
      }
    }
  });

  let detail = async function() {
    let [resUser] = await db.query(
      "SELECT user.user_id, user.user_display_name, user.user_image, mp.score FROM user " +
        "JOIN match_player mp ON mp.user_id = user.user_id WHERE mp.match_id = ?",
      [socket.room]
    );
    let [resCard] = await db.query(
      "SELECT pc.user_id, cc.color_name, pc.amount " +
        "FROM player_card pc " +
        "JOIN coin_color cc ON cc.color_id = pc.color_id " +
        "WHERE pc.match_id = ? AND pc.user_id = ?",
      [socket.room, socket.handshake.session.userdata.user_id]
    );
    let [resCoin] = await db.query(
      "SELECT pc.user_id, cc.color_name, pc.amount " +
        "FROM player_coin pc " +
        "JOIN coin ON coin.coin_id = pc.coin_id " +
        "JOIN coin_color cc ON cc.color_id = coin.coin_color_id " +
        "WHERE pc.match_id = ? AND pc.user_id = ?",
      [socket.room, socket.handshake.session.userdata.user_id]
    );
    let rand,
      resultUser = [];
    let arr = [1, 2, 3, 4];
    resUser.forEach(function(item, index) {
      rand = Math.floor(Math.random() * arr.length);
      resultUser[arr[rand]] = resUser[index];
      arr.splice(rand, 1);
    });
    // console.log(resUser);
    // console.log(resultUser);
    //สุ่ม Player ด้วย
    let resultCard = [];
    let j = 0;
    resCard.forEach(function(item, index) {
      resultCard[j] = {
        ...resultCard[j],
        user_id: item["user_id"],
        [item["color_name"].toLowerCase() + "Card"]: item["amount"]
      };
      if ((index + 1) % 5 === 0) j++;
    });
    let resultCoin = [];
    let i = 1;
    resCoin.forEach(function(item, index) {
      resultCoin[i] = {
        ...resultCoin[i],
        user_id: item["user_id"],
        [item["color_name"].toLowerCase() + "Coin"]: item["amount"]
      };
      if ((index + 1) % 5 === 0) i++;
    });
    io.sockets.to(socket.room).emit("ROOM_MESSAGE", {
      status: "success",
      action: "PLAYER_DETAIL",
      user: resultUser,
      card: resultCard,
      coin: resultCoin
    });
  };

  socket.on("TAKE_COIN", async function(data) {
    if (socket.room) {
      let [resUpdate] = await db.query(
        "UPDATE match_player SET score = ? WHERE user_id = ? AND match_id = ?",
        [data.score, socket.handshake.session.userdata.user_id, socket.room]
      );
      let [resCoinName] = await db.query(
        "SELECT color_name FROM coin_color WHERE color_id IN (?,?,?,?,?)",
        [1, 2, 3, 4, 5]
      );
      let [resGetTurn] = await db.query(
        "SELECT match_turn FROM game_match WHERE match_id = ?",
        [socket.room]
      );
      if (resGetTurn[0].match_turn === 1) {
        if (data.destroy == 1)
          data.cardValue.forEach(async function(item, i) {
            let [resCard] = await db.query(
              "INSERT INTO player_card VALUES (?,?,?,?)",
              [
                i + 1,
                socket.room,
                socket.handshake.session.userdata.user_id,
                item
              ]
            );
          });

        data.coinArr.forEach(async function(item, index) {
          if (item != null) {
            let [resCoin] = await db.query(
              "INSERT INTO player_coin VALUES (?,?,?,?)",
              [
                index,
                socket.room,
                socket.handshake.session.userdata.user_id,
                item
              ]
            );

            if (index === 5) {
              io.sockets.in(socket.room).emit("ROOM_MESSAGE", {
                status: "success",
                action: "TAKE_COIN",
                user_id: socket.handshake.session.userdata.user_id,
                turn: resGetTurn[0].match_turn + 1,
                playerTurn: (resGetTurn[0].match_turn + 1) % 4, //ยังไม่สุ่ม
                button: data.button,
                destroy: data.destroy,
                score: data.score,
                card: data.card,
                coin: {
                  [resCoinName[0].color_name + "Coin"]: data.coinArr[1],
                  [resCoinName[1].color_name + "Coin"]: data.coinArr[2],
                  [resCoinName[2].color_name + "Coin"]: data.coinArr[3],
                  [resCoinName[3].color_name + "Coin"]: data.coinArr[4],
                  [resCoinName[4].color_name + "Coin"]: data.coinArr[5]
                }
              });
            }
          }
        });
      } else {
        if (data.destroy == 1)
          data.cardValue.forEach(async function(item, i) {
            let [resCard] = await db.query(
              "UPDATE player_card SET color_id = ?, amount = ? WHERE match_id = ? AND user_id = ?",
              [
                i + 1,
                item,
                socket.room,
                socket.handshake.session.userdata.user_id
              ]
            );
          });
        data.coinArr.forEach(async function(item, index) {
          if (item != null) {
            let [resCoin] = await db.query(
              "UPDATE player_coin SET amount = ? WHERE coin_id = ? AND match_id = ? AND user_id = ?",
              [
                item,
                index,
                socket.room,
                socket.handshake.session.userdata.user_id
              ]
            );
            if (index === 5) {
              io.sockets.in(socket.room).emit("ROOM_MESSAGE", {
                status: "success",
                action: "TAKE_COIN",
                user_id: socket.handshake.session.userdata.user_id,
                turn: resGetTurn[0].match_turn + 1,
                playerTurn: (resGetTurn[0].match_turn + 1) % 4, //ยังไม่สุ่ม
                button: data.button,
                destroy: data.destroy,
                score: data.score,
                card: data.card,
                coin: {
                  [resCoinName[0].color_name + "Coin"]: data.coinArr[1],
                  [resCoinName[1].color_name + "Coin"]: data.coinArr[2],
                  [resCoinName[2].color_name + "Coin"]: data.coinArr[3],
                  [resCoinName[3].color_name + "Coin"]: data.coinArr[4],
                  [resCoinName[4].color_name + "Coin"]: data.coinArr[5]
                }
              });
            }
          }
        });
      }
      let [resUpdateMatchTurn] = await db.query(
        "UPDATE game_match SET match_turn = ? WHERE match_id = ?",
        [resGetTurn[0].match_turn + 1, socket.room]
      );
    }
  });

  socket.on("END_GAME", async function() {
    let [resUpdateRoom] = await db.query(
      "UPDATE game_match SET match_status = 'END' WHERE match_id = ?",
      [socket.room]
    );
    let [resGetScore] = await db.query(
      "SELECT score FROM match_player WHERE user_id = ? AND match_id = ?",
      [socket.handshake.session.userdata.user_id, socket.room]
    );
    let [resGetUser] = await db.query(
      "SELECT user.user_game_score, user.rank_exp, user.rank_name, rr.rank_requirement FROM user JOIN rank_requirement rr ON rr.rank_name = user.rank_name WHERE user_id = ?",
      [socket.handshake.session.userdata.user_id]
    );
    let [resUpdateUser] = await db.query(
      "UPDATE user SET user_online_status = 1, user_game_score = ?, rank_exp WHERE user_id = ?"
    );
    let [resGetUser2] = await db.query(
      "SELECT user_game_score, rank_exp, rank_name FROM user WHERE user_id = ?",
      [socket.handshake.session.userdata.user_id]
    );
    if (resGetUser2[0].rank_exp >= resGetUser[0].rank_requirement + 100) {
      let [resGetUser3] = await db.query(
        "SELECT rank_name FROM rank_detail WHERE rank_requirement = ?",
        [resGetUser[0].rank_requirement + 100]
      );
      let [resUpdateUser2] = await db.query(
        "UPDATE user SET rank_name = ? WHERE user_id = ?",
        [resGetUser3[0].rank_name, socket.handshake.session.userdata.user_id]
      );
    }
    socket.leave(socket.room);
    socket.room = "";
    socket.emit("END_GAME", {
      status: "success",
      action: "END_GAME"
    });
  });
};

exports.room = room;
