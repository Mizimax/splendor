
var mainState = {
    preload: function() {
        game.load.image('devahoy', 'logo.png');
        game.load.image('ground', 'ground.png');
    },

    create: function() {

        game.stage.backgroundColor = '#e26a6b';
    // devahoy คือชื่อที่เราเอาไว้เรียกภายในโปรแกรม คนละชื่อกับชื่อไฟล์นะครับ
        game.add.sprite(400, 300, 'devahoy').anchor.setTo(0.5, 0.5);
        game.add.sprite(400,600, 'ground').anchor.setTo(0.5,1);
        game.physics.startSystem(Phaser.Physics.ARCADE);
    // สร้าง Group ขึ้นมา เปรียบเสมือน Game World ของเรา 
    // และเอาเก็บไว้ในตัวแปร myWorld (เป็น global)
    this.myWorld = game.add.group();

    // จากนั้นเซตให้ enableBody เป็น true คือให้อยู่ในโหมด Physics
    // สามารถที่จะเช็คการชนกันของวัตถุ (collision) เช็คการ overlap กันได้
    this.myWorld.enableBody = true;

    },

    update: function() {

    }
};
// Phaser.Game(width, height, renderer, Html element)
//new Phaser.Game(800, 600, Phaser.AUTO, 'game');
// Phaser.AUTO : เป็นโหมดที่ใช้ในการ render มี 3 โหมดคือ Phaser.AUTO, Phaser.CANVAS, Phaser.WEBGL
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

/*var ground = this.myWorld.create(0, game.world.height - 64, 'ground');
ground.scale.setTo(2, 2);
ground.body.immovable = true;*/

game.state.add('main', mainState);
game.state.start('main');
