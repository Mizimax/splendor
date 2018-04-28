var gamestate = {
    preload: function () {
        //profile
        this.load.image('player1','image/profile/music.png');
        this.load.image('player2','image/profile/satchan.png');
        this.load.image('player3','image/profile/noey.png');
        this.load.image('player4','image/profile/pun.png');
        //Noble
        var aImageFiles4 = ['1','2','3','4','5','6','7','8','9','10'];
        this.rand4 = []
        console.log(aImageFiles4);
        for(i=0;i<4;i++){
            var randIndex4 = Math.floor(Math.random()*aImageFiles4.length);
            var randImage4 = aImageFiles4[randIndex4];
            this.load.image('level4_'+randImage4, 'image/Level4/' + randImage4 + '.png');
            this.rand4[i]= 'level4_'+randImage4;
            aImageFiles4.splice(randIndex4, 1)
            console.log(aImageFiles4);
        }
        //level3
        var aImageFiles3 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
        this.rand3 = []
        console.log(aImageFiles3);
        for(i=0;i<4;i++){
            var randIndex3 = Math.floor(Math.random()*aImageFiles3.length);
            var randImage3 = aImageFiles3[randIndex3];
            this.load.image('level3_'+randImage3, 'image/Level3/' + randImage3 + '.png');
            this.rand3[i]= 'level3_'+randImage3;
            aImageFiles3.splice(randIndex3, 1)
            console.log(aImageFiles3);
        }
        //level2
        var aImageFiles2 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];
        this.rand2 = []
        console.log(aImageFiles2);
        for(i=0;i<4;i++){
            var randIndex2 = Math.floor(Math.random()*aImageFiles2.length);
            var randImage2 = aImageFiles2[randIndex2];
            this.load.image('level2_'+randImage2, 'image/Level2/' + randImage2 + '.png');
            this.rand2[i]= 'level2_'+randImage2;
            aImageFiles2.splice(randIndex2, 1)
            console.log(aImageFiles2);
        }
        //level1
        var aImageFiles = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'];
        this.rand = []
        console.log(aImageFiles);
        for(i=0;i<4;i++){
            var randIndex = Math.floor(Math.random()*aImageFiles.length);
            var randImage = aImageFiles[randIndex];
            this.load.image('level1_'+randImage, 'image/Level1/' + randImage + '.png');
            this.rand[i]= 'level1_'+randImage;
            aImageFiles.splice(randIndex, 1)
            console.log(aImageFiles);
        }
        //deck_level1-3
        this.load.image('level1_BG','image/level1/BG_1.png');
        this.load.image('level2_BG','image/level2/BG_2.png');
        this.load.image('level3_BG','image/level3/BG_3.png');
        //coin
        this.load.image('coinBlack','image/coin/Coin_black.png');
        this.load.image('coinGold','image/coin/Coin_gold.png');
        this.load.image('coinBlue','image/coin/Coin_blue.png');
        this.load.image('coinGreen','image/coin/Coin_green.png');
        this.load.image('coinRed','image/coin/Coin_red.png');
        this.load.image('coinWhite','image/coin/Coin_white.png');
    },
    create: function () {
        this.player1 = this.game.add.sprite(0,100,'player1');
        this.player2 = this.game.add.sprite(0,225,'player2'); 
        this.player3 = this.game.add.sprite(0,350,'player3');

        this.player4 = this.game.add.sprite(this.game.world.centerX-350,this.game.world.centerY+175,'player4');
        
        this.coinBlack = this.game.add.sprite(this.game.world.centerX+300,this.game.world.centerY-50,'coinBlack');
        this.coinRed = this.game.add.sprite(this.game.world.centerX+300,this.game.world.centerY-130,'coinRed');
        this.coinBlue = this.game.add.sprite(this.game.world.centerX+300,this.game.world.centerY-210,'coinBlue');
        this.coinGreen = this.game.add.sprite(this.game.world.centerX+300,this.game.world.centerY-290,'coinGreen');
        this.coinWhite = this.game.add.sprite(this.game.world.centerX+300,this.game.world.centerY-370,'coinWhite');
        this.coinGold = this.game.add.sprite(this.game.world.centerX+300,this.game.world.centerY+30,'coinGold');

        this.level1_BG = this.game.add.sprite(this.game.world.centerX-420,this.game.world.centerY-40,'level1_BG');
        this.level2_BG = this.game.add.sprite(this.game.world.centerX-420,this.game.world.centerY-220,'level2_BG');
        this.level3_BG = this.game.add.sprite(this.game.world.centerX-420,this.game.world.centerY-400,'level3_BG');        

    //    var button = [];
    /*    button[0] = game.add.button(this.game.world.centerX-280,this.game.world.centerY-40, 'level1_1', cardlevel_1, this);
        button[0].inputEnabled = true;*/
        var count=140;
        var count2=140;
        var count3=140;
        var count4=130;
        //level1
        for(i=0;i<4;i++){
           this.game.add.sprite(this.game.world.centerX-420+count,this.game.world.centerY-40, this.rand[i]);
            count+=140;
        }
        //level2
        for(i=0;i<4;i++){
           this.game.add.sprite(this.game.world.centerX-420+count2,this.game.world.centerY-220, this.rand2[i]);
            count2+=140;
        }
        //level3
        for(i=0;i<4;i++){
           this.game.add.sprite(this.game.world.centerX-420+count3,this.game.world.centerY-400, this.rand3[i]);
            count3+=140;
        }
        //Noble
        for(i=0;i<4;i++){
            this.game.add.sprite(this.game.world.centerX+400,this.game.world.centerY-520+count4, this.rand4[i]);
             count4+=130;
         }
    },
    render: function(){
    }
};
function cardlevel_1(){
    //var person = prompt("chat", "... message ...");
    game.state.start('game');
}