var navbar = {
  navBg: 0,
  logo: 0,
  create: function () {
    this.navBg = game.add.sprite(0, 0, 'navBg');
    this.navBg.width = window.innerWidth;
    this.navBg.height = 147;

    this.logo = game.add.sprite(60,10, 'logo')
  }
}