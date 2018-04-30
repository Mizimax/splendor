var modal = {
  modalGroup: 0,
  closeBtn: true,
  content: '',
  create: function(width, height, close, callback) {
    this.modalGroup = game.add.group();
    this.overlay = game.add.graphics(0,0);
    this.overlay.beginFill(0x000000);
    this.overlay.alpha = 0.67;
    this.overlay.drawRect(0, 0, window.innerWidth, window.innerHeight);
    this.overlay.endFill();

    this.modal = game.add.sprite(game.world.centerX, game.world.centerY, 'bg');
    this.modal.width = width;
    this.modal.height = height;
    this.modal.anchor.setTo(0.5)

    this.modalGroup.add(this.overlay)
    this.modalGroup.add(this.modal)

    if(close) {
      //close btn
    }

    this.hide();
    
    callback();
  },
  show: function() {
    this.modalGroup.visible = true
  },
  hide: function() {
    this.modalGroup.visible = false
  }
};