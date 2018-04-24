var mainState = {

    preload: function () {

        game.load.image('devahoy', 'logo.png');
        game.load.image('ground', 'assets/ground.png');
        game.load.spritesheet('player', 'assets/warrior_m.png', 32, 36);
    },

    create: function () {
        game.stage.backgroundColor = '#4d4d4d';
        // devahoy คือชื่อที่เราเอาไว้เรียกภายในโปรแกรม คนละชื่อกับชื่อไฟล์นะครับ
        //game.add.sprite(400, 300, 'devahoy').anchor.setTo(0.5, 0.5);
        //game.add.sprite(400,600, 'ground').anchor.setTo(0.5,1);

        game.physics.startSystem(Phaser.Physics.ARCADE);
        // สร้าง Group ขึ้นมา เปรียบเสมือน Game World ของเรา 
        // และเอาเก็บไว้ในตัวแปร myWorld (เป็น global)

        this.myWorld = game.add.group();
        // จากนั้นเซตให้ enableBody เป็น true คือให้อยู่ในโหมด Physics
        // สามารถที่จะเช็คการชนกันของวัตถุ (collision) เช็คการ overlap กันได้
        this.myWorld.enableBody = true;

        // เพิ่ม sprite ที่ตำแหน่ง 0, 450 จาก spritesheet warrior_m.png
        this.player = game.add.sprite(0, 450, 'player');

        // สั่งให้ตัว player นี้ใช้โหลด Physics
        game.physics.arcade.enable(this.player);

        // กำหนดการเด้งของวัตถุ, แรงโน้มถ่วง 
        // และก็ตั้งค่าให้ตัว Player ไม่สามารถออกนอก Game World ได้
        this.player.body.bounce.y = 0.25;
        this.player.body.gravity.y = 980;
        this.player.body.collideWorldBounds = true;

        this.cursors = this.input.keyboard.createCursorKeys();

    },

    update: function () {
        game.physics.arcade.collide(this.player, this.myWorld);
        var ground = this.myWorld.create(0, game.world.height - 64, 'ground');
        ground.scale.setTo(2, 2);
        ground.body.immovable = true;
        var left = this.myWorld.create(0, 450 - 32, 'ground');
        left.body.immovable = true;

        var right = this.myWorld.create(450, 350 - 32, 'ground');
        right.body.immovable = true;

        var middle = this.myWorld.create(250, 250 - 32, 'ground');
        middle.scale.setTo(0.3, 1);
        middle.body.immovable = true;

        var top = this.myWorld.create(100, 150 - 32, 'ground');
        top.scale.setTo(0.2, 1);
        top.body.immovable = true;

        // animations.add(name, frames, frame rate, loop);
        // name - ชื่อ animation เพื่อที่จะเอาไว้เรียก เวลาเราจะสั่ง animation.play()
        // frames คือตำแหน่ง frames ต่างๆที่ต้องการให้ animation
        // rate : คือค่า frame rate
        // loop : true/false ว่าจะให้มันวนลูปเล่น animation เรื่อยๆ หรือไม่?
        this.player.animations.add('right', [3, 4, 5], 10, true);
        this.player.animations.add('left', [9, 10, 11], 10, true);

        // ตั้งค่าให้ player ใ้ช้รูปที่ frame ตำแหน่ง 6
        this.player.frame = 8;

        this.player.body.velocity.x = 0;
        if (this.cursors.right.isDown) {
            this.player.body.velocity.x = 500;
            this.player.animations.play('right');
        } else if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -500;
            this.player.animations.play('left');
        } else {
            this.player.animations.stop();
            this.player.frame = 6;
        }

        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.body.velocity.y = -800;
        }
    }
};
// Phaser.Game(width, height, renderer, Html element)
//new Phaser.Game(800, 600, Phaser.AUTO, 'game');
// Phaser.AUTO : เป็นโหมดที่ใช้ในการ render มี 3 โหมดคือ Phaser.AUTO, Phaser.CANVAS, Phaser.WEBG
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');



game.state.add('main', mainState);
game.state.start('main');

