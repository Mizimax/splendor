var reg = {};
var text = [];
var i = 0;
var chat;
var message = [];
var scroller;
var timeCheck;
var button = [];
var galax;
function loading() {
  modal.overlayClose = false;
  modal.create(
    window.innerWidth * 0,
    window.innerHeight * 0,
    false,
    function() {
      var x = game.world.centerX - window.innerWidth * 0.5 / 2;
      var y = game.world.centerY - window.innerHeight * 0.66 / 2;
      var loading = game.add.text(
        game.world.centerX,
        game.world.centerY,
        "Authenticating...",
        {
          fill: "#fff",
          font: "24pt Kanit"
        }
      );
      loading.anchor.setTo(0.5);
      modal.modalGroup.add(loading);
    }
  );
  modal.show();
  game.world.bringToTop(modal.modalGroup);
}
var lobbystate = {
  preload: function() {
    game.load.image("button", "assets/yw-sapphirebutton.png");
    game.load.image("navBg", "assets/nav-wood.png");
    game.load.image("logo", "assets/splendor.png");
    game.load.image("chat", "assets/send.png");
    game.load.image("chat_head", "assets/chat_box.png");
    game.load.image("ruby", "assets/ruby.png");
    game.load.image("emerald", "assets/emerald.png");
    game.load.image("bg", "assets/BG.jpg");
    game.load.image("modal", "assets/464885029.jpg");
    game.load.image("modal_bg", "assets/modal_bg.png");
    game.load.image("galaxy", "assets/galaxy.jpg");
    game.load.image("bg_profile", "assets/profile.png");
    game.load.image("anime", "assets/anime.png");
    game.load.image("player", "assets/Erika_Karata-p1.jpg");
    game.add.plugin(PhaserInput.Plugin);
  },
  create: function() {
    socket.emit("AUTH_ATTEMPT", "");
    socket.on("AUTH", function(res) {
      if (res.status === "success") {
        modal.hide();
      } else {
        window.location.href = "/";
      }
    });

    var bg = game.add.sprite(0, 0, "bg");
    bg.width = window.innerWidth;

    navbar.create();
    console.log(navbar.logo.bottom);
    var profile = game.add.image(
      game.width * 0.5,
      navbar.logo.bottom + 25,
      "bg_profile"
    );
    console.log(profile);
    profile.scale.setTo(1 / profile.width, 1 / profile.height);
    profile.anchor.setTo(0.5, 0);
    //profile.visible = false;
    game.add
      .tween(profile.scale)
      .to({ x: 1.5, y: 0.8 }, 400, Phaser.Easing.Back.In, true, 0);
    console.log(profile);
    player = game.add.image(-270 + 40, 40, "player");
    player.scale.setTo(100 / player.width, 150 / player.height);
    profile.addChild(player);

    var p_info = game.add.text(
      -100,
      70,
      "Name :" +
        " Erika  Karata" +
        "\nWinrate: " +
        "99.99" +
        "%" +
        "\nWin:" +
        " 99" +
        "\tLose: " +
        "999",
      {
        font: "14pt Arial",
        fill: "#ffffff",
        stroke: "purple",
        strokeThickness: 2
      }
    );
    profile.addChild(p_info);

    game.stage.backgroundColor = "#182d3b";
    //   logo.scale.setTo(0.15);
    /*   bmd = game.make.bitmapData(800, 200);
           bmd.context.font = '64px Arial';
           bmd.context.fillStyle = '#ffffff';
           bmd.context.fillText(word, 64, 64);
           bmd.addToWorld();
       */

    
    // profile modal
    modal.create(
      window.innerWidth * 0.5,
      window.innerHeight * 0.66,
      true,
      function() {
        var x = game.world.centerX - window.innerWidth * 0.5 / 2;
        var y = game.world.centerY - window.innerHeight * 0.66 / 2;
        var title = game.add.text(x + 80, y + 40, "Profile", {
          fill: "#000000",
          font: "20pt Arial"
        });
        title.anchor.setTo(0.5);
        var profile_img = game.add.sprite(x + 145, y + 180, "bg");
        profile_img.width = 200;
        profile_img.height = 200;
        profile_img.anchor.setTo(0.5);
        modal.modalGroup.add(title);
        modal.modalGroup.add(profile_img);
      }
    );

    //chat
    chat = game.add.inputField(game.width * 0.25, game.height * 0.95, {
      width: 200,
      height: 20,
      borderRadius: 6,
      zomm: true,
      placeHolder: "   Message......"
    });
    chat.inputEnabled = true;
    chat.focusOnenter = true;
    chat.bringToTop();
    galax = game.add.image(chat.x, chat.y - 205, "galaxy");
    galax.scale.setTo(300 / galax.width, 200 / galax.height);
    galax.alpha = 0.45;

    //button 2
    button[0] = game.add.button(
      chat.x + 200 + 50,
      chat.y + 10,
      "chat",
      ChatClick,
      this
    );
    button[0].inputEnabled = true;
    button[0].anchor.setTo(0.5, 0.5);
    button[0].scale.setTo(1, 30 / 29);
    button[0].onInputOver.add(function() {
      this.game.canvas.style.cursor = "pointer";
      game.add
        .tween(button[0].scale)
        .to({ x: 100 / 80, y: 35 / 29 }, 400, Phaser.Easing.Back.Out, true, 0);
    });
    button[0].onInputOut.add(function() {
      this.game.canvas.style.cursor = "default";
      game.add
        .tween(button[0].scale)
        .to({ x: 80 / 80, y: 30 / 29 }, 200, Phaser.Easing.Back.In, true, 0);
    });

    //button 1
    button1 = game.add.button(
      window.outerWidth * 0.9,
      window.outerHeight - 150,
      "anime",
      actionOnClick,
      this
    );
    button1.inputEnabled = true;
    //console.log(button1);
    var b1 = button1.width;
    var b2 = button1.height;
    button1.anchor.setTo(0.5, 0.5);
    button1.scale.setTo(100 / b1, 100 / b2);
    button1.onInputOver.add(function() {
      this.game.canvas.style.cursor = "pointer";
      game.add
        .tween(button1.scale)
        .to({ x: 300 / b1, y: 300 / b2 }, 400, Phaser.Easing.Back.Out, true, 0);
    });
    button1.onInputOut.add(function() {
      this.game.canvas.style.cursor = "default";
      game.add
        .tween(button1.scale)
        .to({ x: 100 / b1, y: 100 / b2 }, 400, Phaser.Easing.Back.Out, true, 0);
    });


    scroller = game.add.existing(
      new ScrollableArea(chat.x, chat.y - 200, 300, 190)
    );
    /*var textStyle = {font:"30px Arial", fill:"#ffff00"};
        for (var i=0;i<10;i++) {
            for (var j=0;j<80;j++) {
                var text = game.make.text(i*330, j*30, "Yes, everything scrolls", textStyle);
                scroller.addChild(text);
            }
        }*/

    scroller.start();
    button[3] = game.add.button(galax.x, galax.y, "chat_head", ChatDown, this);
    button[3].inputEnabled = true;
    button[3].scale.setTo(300 / button[3].width, 20 / button[3].height);
    button[3].onInputOver.add(function() {
      this.game.canvas.style.cursor = "pointer";
      button[3].alpha = 0.3;
    });
    button[3].onInputOut.add(function() {
      this.game.canvas.style.cursor = "default";
      button[3].alpha = 1;
    });
    console.log(button[3]);

    if (game.input.onInputOver) console.log("on");
    //button 3
    button[1] = game.add.button(
      window.outerWidth * 0.75,
      60,
      "ruby",
      rubyClick,
      this
    );
    button[1].inputEnabled = true;
    button[1].anchor.setTo(0.5, 0.5);
    button[1].scale.setTo(0.2, 0.2);
    button[1].onInputOver.add(function() {
      this.game.canvas.style.cursor = "pointer";
      game.add
        .tween(button[1].scale)
        .to({ x: 0.25, y: 0.25 }, 400, Phaser.Easing.Back.Out, true, 0);
    });
    button[1].onInputOut.add(function() {
      this.game.canvas.style.cursor = "default";
      game.add
        .tween(button[1].scale)
        .to({ x: 0.2, y: 0.2 }, 400, Phaser.Easing.Back.In, true, 0);
    });

    //button 4
    button[2] = game.add.button(
      window.outerWidth * 0.9,
      75,
      "emerald",
      profileClick,
      this
    );
    button[2].inputEnabled = true;
    button[2].anchor.setTo(0.5, 0.5);
    button[2].scale.setTo(0.3, 0.3);
    button[2].onInputOver.add(function() {
      this.game.canvas.style.cursor = "pointer";
      game.add
        .tween(button[2].scale)
        .to({ x: 0.4, y: 0.4 }, 400, Phaser.Easing.Back.Out, true, 0);
    });
    button[2].onInputOut.add(function() {
      this.game.canvas.style.cursor = "default";
      game.add
        .tween(button[2].scale)
        .to({ x: 0.3, y: 0.3 }, 400, Phaser.Easing.Back.In, true, 0);
    });
    loading();
  },
  update: function() {
    if (game.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
      ChatClick();
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      scroller.visible = !scroller.visible;
      console.log(scroller.visible);
      timeCheck = game.time.now;
      console.log("start");
    }
  }
};

// button
function up() {
  console.log("button up", arguments);
}
function over() {
  this.game.canvas.style.cursor = "pointer";
  game.add
    .tween(button.scale)
    .to({ x: 0.7, y: 0.7 }, 400, Phaser.Easing.Back.Out, true, 0);
  console.log(button);
}
function out() {
  this.game.canvas.style.cursor = "default";
  game.add
    .tween(button.scale)
    .to({ x: 0.6, y: 0.6 }, 200, Phaser.Easing.Back.In, true, 0);
}
function actionOnClick() {
  game.state.start('game')
}
//button
// button[1]
function ChatClick() {
  if (chat.value.length > 2) {
    text[i] = chat.value;
    message[i] = game.make.text(10, i * 22 + 20, "Pro : " + chat.value, {
      font: "14px Arial",
      fill: "#000000",
      stroke: "#ffffff",
      strokeThickness: 2
    });
    scroller.addChild(message[i]);
    block = game.make.text(0, i * 22 + 30, "", { font: "18px Arial" });
    scroller.addChild(block);
    scroller.scrollTo(0, block.y, 10, false);
    chat.resetText();
    i++;
  }
}

// button[2]
function rubyClick() {
  // profile modal
  modal.hasOverlay = true;
  modal.overlayClose = true;
  modal.create(
    window.innerWidth * 0.5,
    window.innerHeight * 0.53,
    true,
    function() {
      var x = game.world.centerX - window.innerWidth * 0.5 / 2;
      var y = game.world.centerY - window.innerHeight * 0.53 / 2;
      var title = game.add.text(x + 90, y + 55, "Profile", {
        fill: "#372316",
        font: "24pt Kanit"
      });
      var name = game.add.text(
        x + 270,
        y + 81,
        `Username : Show username
Display Name : Show Displayname`,
        {
          fill: "#372316",
          font: "16pt Kanit"
        }
      );
      var rank = game.add.text(
        x + 270,
        y + 170,
        "Rank : Show Rankname (75 EXP)",
        {
          fill: "#372316",
          font: "16pt Kanit"
        }
      );
      var stat = game.add.text(
        x + 270,
        y + 225,
        `Casual Score : 500 
Ranking Score : 400`,
        {
          fill: "#372316",
          font: "16pt Kanit"
        }
      );
      title.anchor.setTo(0.5);
      var profile_img = game.add.sprite(x + 145, y + 188, "bg");
      profile_img.width = 200;
      profile_img.height = 200;
      profile_img.anchor.setTo(0.5);
      modal.modalGroup.add(title);
      modal.modalGroup.add(name);
      modal.modalGroup.add(rank);
      modal.modalGroup.add(stat);
      modal.modalGroup.add(profile_img);
    }
  );
  modal.show();
  game.world.bringToTop(modal.modalGroup);
}
function ChatDown() {
  scroller.visible = !scroller.visible;
  galax.visible = !galax.visible;
  chat.visible = !chat.visible;
  button[0].visible = !button[0].visible;

  if (!scroller.visible) {
    button[3].y = chat.y;
  } else {
    button[3].y = galax.y;
  }
}
function profileClick() {
  modal.hasOverlay = true;
  modal.overlayClose = true;
  modal.create(
    window.innerWidth * 0.5,
    window.innerHeight * 0.66,
    true,
    function() {}
  );
  modal.show();
  game.world.bringToTop(modal.modalGroup);
}
