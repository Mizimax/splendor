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
        "INSERT INTO game_match(host_id,match_name,match_status,match_type,match_password,match_start,match_player_no,match_turn) VALUES (?,?,?,?,?,?,?,?)",
        [
          socket.handshake.session.userdata.user_id,
          data.roomName,
          "WAITING",
          "NORMAL",
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
          socket.emit("ROOM_MESSAGE", {
            status: "success",
            action: "JOIN_ROOM",
            message: "Join room " + data.match_id,
            ready: resReady,
            match_id: data.match_id
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
          message: "Room Full"
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
        let [resUpdateReady] = await db.query(
          "UPDATE match_player SET ready = ? WHERE match_id = ? AND user_id = ?",
          [!data.ready, socket.room, socket.handshake.session.userdata.user_id]
        );
        if (resUpdateReady.affectedRows != 0)
          io.sockets.in(socket.room).emit("ROOM_MESSAGE", {
            status: "success",
            action: "PLAYER_READY",
            match_id: socket.room,
            user_id: socket.handshake.session.userdata.user_id,
            ready: !data.ready
          });
      }
    } catch (error) {
      console.log(error);
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

              // if (item["card_id"] <= 40) {
              //   result["level1"][arr[0][item["card_id"]]] = {
              //     ...result[item["card_id"]],
              //     card_id: item["card_id"],
              //     color_code: item["color_code"],
              //     card_level: item["card_level"],
              //     card_score: item["card_score"],
              //     card_image: item["card_image"],
              //     ["add" + item["card_color_name"]]: 1,
              //     ["req" + item["color_name"]]: item["amount"]
              //   };
              // } else if (item["card_id"] > 40 && item["card_id"] <= 70) {
              //   result["level2"][arr[1][item["card_id"]]] = {
              //     ...result[item["card_id"]],
              //     card_id: item["card_id"],
              //     color_code: item["color_code"],
              //     card_level: item["card_level"],
              //     card_score: item["card_score"],
              //     card_image: item["card_image"],
              //     ["add" + item["card_color_name"]]: 1,
              //     ["req" + item["color_name"]]: item["amount"]
              //   };
              // } else if (item["card_id"] > 70 && item["card_id"] <= 90) {
              //   result["level3"][arr[2][item["card_id"]]] = {
              //     ...result[item["card_id"]],
              //     card_id: item["card_id"],
              //     color_code: item["color_code"],
              //     card_level: item["card_level"],
              //     card_score: item["card_score"],
              //     card_image: item["card_image"],
              //     ["add" + item["card_color_name"]]: 1,
              //     ["req" + item["color_name"]]: item["amount"]
              //   };
              // }
            });
            try {
              let [resUpdateMatch] = await db.query(
                "UPDATE game_match SET match_status = 'PLAYING' WHERE host_id = ? AND match_id = ?",
                [socket.handshake.session.userdata.user_id, socket.room]
              );
              if (resUpdateMatch.affectedRows != 0) {
                let [resGetTurn] = await db.query(
                  "SELECT match_turn FROM game_match WHERE match_id = ?",
                  [socket.room]
                );
                socket.emit("ROOM_MESSAGE", {
                  status: "success",
                  action: "LOAD_CARD",
                  cards: result,
                  random: arr
                });
                io.sockets.to(socket.room).emit("ROOM_MESSAGE", {
                  status: "success",
                  action: "GAME_START",
                  match_id: socket.room,
                  start: true,
                  turn: resGetTurn[0].match_turn,
                  host: true
                });
                detail();
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
            } catch (error) {
              console.log(error);
            }
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
    let myuser;
    resUser.forEach(function(item, index) {
      if (item.user_id == socket.handshake.session.userdata.user_id)
        myuser = item.user_display_name;
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
      myuser: myuser,
      user: resultUser,
      card: resultCard,
      coin: resultCoin
    });
  };

  socket.on("RANDOM_CARD", function(data) {
    if (socket.room) {
      io.sockets.to(socket.room).emit("ROOM_MESSAGE", {
        status: "success",
        action: "RANDOM_CARD",
        cardArr: data.cardArr,
        image: data.image
      });
    }
  });

  socket.on("TAKE_COIN", async function(data) {
    if (socket.room) {
      let [resCoinName] = await db.query(
        "SELECT color_name FROM coin_color WHERE color_id IN (?,?,?,?,?)",
        [1, 2, 3, 4, 5]
      );
      let [resGetTurn] = await db.query(
        "SELECT match_turn FROM game_match WHERE match_id = ?",
        [socket.room]
      );
      if (resGetTurn[0].match_turn === 1) {
        let i;
        for (i = 1; i <= 5; i++) {
          let [resCard] = await db.query(
            "INSERT INTO player_card VALUES (?,?,?,?)",
            [
              i,
              socket.room,
              socket.handshake.session.userdata.user_id,
              data.cardValue[i]
            ]
          );
        }
        console.log(resCard);
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
        for (i = 1; i <= 5; i++) {
          let [resCard] = await db.query(
            "UPDATE player_card SET color_id = ?, amount = ? WHERE match_id = ? AND user_id = ?",
            [
              i,
              data.cardValue[i],
              socket.room,
              socket.handshake.session.userdata.user_id
            ]
          );
        }
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
};

exports.room = room;
