var modal = {
  modalGroup: 0,
  closeBtn: 0,
  overlayClose: true,
  hasOverlay: true,
  content: {},
  create: function(width, height, close, callback) {
    this.modalGroup = game.add.group();
    if (this.hasOverlay) {
      this.overlay = game.add.sprite(0, 0, "modal_bg");
      this.overlay.width = window.innerWidth;
      this.overlay.height = window.innerHeight;
      this.overlay.inputEnabled = true;
      var self = this;
      if (this.overlayClose)
        this.overlay.events.onInputDown.add(function() {
          self.hide();
        });
      this.modalGroup.add(this.overlay);
    }
    // this.overlay = game.add.graphics(0,0);
    // this.overlay.beginFill(0x000000);
    // this.overlay.alpha = 0.5;
    // this.overlay.drawRect(0, 0, window.innerWidth, window.innerHeight);
    // this.overlay.endFill();

    this.modal = game.add.sprite(
      game.world.centerX,
      game.world.centerY,
      "modal"
    );
    this.modal.width = width;
    this.modal.height = height;
    this.modal.anchor.setTo(0.5);
    this.modal.inputEnabled = true;

    this.modalGroup.add(this.modal);

    if (close) {
      this.closeBtn = game.add.text(
        game.world.centerX + width / 2 - 40,
        game.world.centerY - height / 2 + 40,
        "X ",
        { fill: "#000000", font: "18pt Arial" }
      );
      this.closeBtn.anchor.setTo(0.5);
      this.closeBtn.inputEnabled = true;
      this.closeBtn.input.useHandCursor = true;
      this.closeBtn.events.onInputDown.add(this.hide, this);
      this.modalGroup.add(this.closeBtn);
    }

    this.modalGroup.alpha = 0;

    callback();
  },
  show: function() {
    game.add
      .tween(this.modalGroup)
      .to({ alpha: 1 }, 200, Phaser.Easing.Linear.None, true, 0);
    if (this.hasOverlay) this.overlay.inputEnabled = true;
  },
  hide: function() {
    game.add
      .tween(this.modalGroup)
      .to({ alpha: 0 }, 200, Phaser.Easing.Linear.None, true, 0);
    if (this.hasOverlay) this.overlay.inputEnabled = false;
  }
};

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
        "Loading...",
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
