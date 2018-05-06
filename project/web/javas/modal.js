var modal = {
  modalGroup: 0,
  closeBtn: 0,
  content: {},
  create: function(width, height, close, callback) {
    this.modalGroup = game.add.group();
    this.overlay = game.add.sprite(0,0, 'modal_bg')
    this.overlay.width = window.innerWidth;
    this.overlay.height = window.innerHeight;
    this.overlay.inputEnabled = true;
    var self = this;
    this.overlay.events.onInputDown.add(function() {
      self.hide();
    })
    // this.overlay = game.add.graphics(0,0);
    // this.overlay.beginFill(0x000000);
    // this.overlay.alpha = 0.5;
    // this.overlay.drawRect(0, 0, window.innerWidth, window.innerHeight);
    // this.overlay.endFill();

    this.modal = game.add.sprite(game.world.centerX, game.world.centerY, 'modal');
    this.modal.width = width;
    this.modal.height = height;
    this.modal.anchor.setTo(0.5)

    this.modalGroup.add(this.overlay)
    this.modalGroup.add(this.modal)

    if(close) {
      this.closeBtn = game.add.text(game.world.centerX + (width/2) - 40, game.world.centerY - (height/2) + 40, 'X ', { fill: '#000000', font: '18pt Arial' });
      this.closeBtn.anchor.setTo(0.5)
      this.closeBtn.inputEnabled = true;
      this.closeBtn.input.useHandCursor = true;
      this.closeBtn.events.onInputDown.add(this.hide, this);
      this.modalGroup.add(this.closeBtn)
    }

    this.modalGroup.alpha = 0
    
    callback();
  },
  show: function() {
    game.add.tween(this.modalGroup).to({ alpha: 1 }, 200, Phaser.Easing.Linear.None, true, 0);
    this.overlay.inputEnabled = true;
  },
  hide: function() {
    game.add.tween(this.modalGroup).to({ alpha: 0 }, 200, Phaser.Easing.Linear.None, true, 0);
    this.overlay.inputEnabled = false;
  }
};