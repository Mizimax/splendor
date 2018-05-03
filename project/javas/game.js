var button = [];
var aImageFiles = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'];
var count=0;
var gamestate = {
    preload: function () {
        this.load.image('BG','image/BG_game_test.jpg');
        this.load.image('score','image/score.png');
        //color
        this.load.image('blue','image/color/blue.gif')
        this.load.image('black','image/color/black.jpg')
        this.load.image('red','image/color/red.jpg')
        this.load.image('green','image/color/green.png')
        this.load.image('white','image/color/white.jpg')
        this.load.image('gray','image/color/gray.png')
        //profile
        this.load.image('player1','image/profile/music.png');
        this.load.image('player2','image/profile/satchan.png');
        this.load.image('player3','image/profile/noey.png');
        this.load.image('player4','image/profile/pun.png');

        for(i=1;i<=40;i++){
            this.load.image('level1_'+i,'image/Level1/' + i + '.png');
        }


        //Noble
        var aImageFiles4 = ['1','2','3','4','5','6','7','8','9','10'];
        this.rand4 = []
        for(i=0;i<4;i++){
            var randIndex4 = Math.floor(Math.random()*aImageFiles4.length);
            var randImage4 = aImageFiles4[randIndex4];
            this.load.image('level4_'+randImage4, 'image/Level4/' + randImage4 + '.png');
            this.rand4[i]= 'level4_'+randImage4;
            aImageFiles4.splice(randIndex4, 1)
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
        for(i=0;i<4;i++){
            var randIndex2 = Math.floor(Math.random()*aImageFiles2.length);
            var randImage2 = aImageFiles2[randIndex2];
            this.load.image('level2_'+randImage2, 'image/Level2/' + randImage2 + '.png');
            this.rand2[i]= 'level2_'+randImage2;
            aImageFiles2.splice(randIndex2, 1)
            console.log(aImageFiles2);
        }
        //level1
    //    var aImageFiles = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'];
        this.rand = []
        for(i=0;i<4;i++){
            var randIndex = Math.floor(Math.random()*aImageFiles.length);
            var randImage = aImageFiles[randIndex];
            //this.load.image('level1_'+randImage, 'image/Level1/' + randImage + '.png');
            this.rand[i]= 'level1_'+randImage;
            aImageFiles.splice(randIndex, 1);
            count+=1;
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
        x=window.outerWidth/12;     //row
        y=window.outerHeight/4;     //col
        
        this.BG = this.game.add.sprite(0,0,'BG');
        this.BG.scale.setTo(1.5,1);

        this.player1 = this.game.add.sprite(0,y-50,'player1');
        this.player2 = this.game.add.sprite(0,1.5*y-25,'player2'); 
        this.player3 = this.game.add.sprite(0,2*y,'player3');

        this.player4 = this.game.add.sprite(3*x,3*y-25,'player4');
        this.gray = this.game.add.sprite(4*x-6,3*y-25,'gray').scale.setTo(5.35,1.22);
        this.blue = this.game.add.sprite(4*x+10,3*y-15,'blue');
        this.white = this.game.add.sprite(4.5*x+46,3*y-15,'white');
        this.red = this.game.add.sprite(5.5*x+18,3*y-15,'red');
        this.green = this.game.add.sprite(6.5*x-10,3*y-15,'green');
        this.black = this.game.add.sprite(7*x+27,3*y-15,'black');

        this.level1_BG = this.game.add.sprite(3*x-20,2*y-20,'level1_BG');
        this.level2_BG = this.game.add.sprite(3*x-20,y,'level2_BG');
        this.level3_BG = this.game.add.sprite(3*x-20,0*y+20,'level3_BG');        

        //level1
        button[0] = game.add.button(4*x,2*y-20, this.rand[0], cardlevel_1, 'button_0'); 
        button[0].inputEnabled = true;
        button[1] = game.add.button(4*x+140,2*y-20, this.rand[1], cardlevel_1, 'button_0');
        button[1].inputEnabled = true;
        button[2] = game.add.button(4*x+280,2*y-20, this.rand[2], cardlevel_1, 'button_0');
        button[2].inputEnabled = true;
        button[3] = game.add.button(4*x+420,2*y-20, this.rand[3], cardlevel_1, 'button_0');
        button[3].inputEnabled = true;
        //level2
        button[4] = game.add.button(4*x,y, this.rand2[0], cardlevel_2, this);
        button[4].inputEnabled = true;
        button[5] = game.add.button(4*x+140,y, this.rand2[1], cardlevel_2, this);
        button[5].inputEnabled = true;
        button[6] = game.add.button(4*x+280,y, this.rand2[2], cardlevel_2, this);
        button[6].inputEnabled = true;
        button[7] = game.add.button(4*x+420,y, this.rand2[3], cardlevel_2, this);
        button[7].inputEnabled = true;
        //level3
        button[8] = game.add.button(4*x,20, this.rand3[0], cardlevel_3, this);
        button[8].inputEnabled = true;
        button[9] = game.add.button(4*x+140,20, this.rand3[1], cardlevel_3, this);
        button[9].inputEnabled = true;
        button[10] = game.add.button(4*x+280,20, this.rand3[2], cardlevel_3, this);
        button[10].inputEnabled = true;
        button[11] = game.add.button(4*x+420,20, this.rand3[3], cardlevel_3, this);
        button[11].inputEnabled = true;
        //coin
        button[12] = game.add.button(8*x+50,20, 'coinBlack', click_coin, this);
        button[12].inputEnabled = true;
        button[13] = game.add.button(8*x+50,0.5*y, 'coinRed', click_coin, this);
        button[13].inputEnabled = true;
        button[14] = game.add.button(8*x+50,y-15, 'coinBlue', click_coin, this);
        button[14].inputEnabled = true;
        button[15] = game.add.button(8*x+50,y+70, 'coinGreen', click_coin, this);
        button[15].inputEnabled = true;   
        button[16] = game.add.button(8*x+50,1.5*y+50, 'coinWhite', click_coin, this);
        button[16].inputEnabled = true;
        button[17] = game.add.button(8*x+50,2*y+35, 'coinGold', click_coin, this);
        button[17].inputEnabled = true;
        //Noble
        button[18] = game.add.button(10*x-100,20, this.rand4[0], click_Noble, this);
        button[18].inputEnabled = true;
        button[19] = game.add.button(10*x-100,150, this.rand4[1], click_Noble, this);
        button[19].inputEnabled = true;   
        button[20] = game.add.button(10*x-100,280, this.rand4[2], click_Noble, this);
        button[20].inputEnabled = true;
        button[21] = game.add.button(10*x-100,410, this.rand4[3], click_Noble, this);
        button[21].inputEnabled = true;
        //showscore
        button[22] = game.add.button(x+50,3*y-75,'score',show);
        button[22].inputEnabled = true;
    },
    render: function(){
    }
};
function show(){
    var person = prompt("Show Score", "บราๆๆๆๆๆ");
}  
function cardlevel_1(button, button2){
    console.log(button2)
    var person = confirm("Are you sure in this card level 1?");
    if(person==true)
    {   
        if(button[0].inputEnabled==true)
        {
            button[0].destroy(button[0]);
            console.log(aImageFiles);
            randIndex = Math.floor(Math.random()*aImageFiles.length);
            randImage = aImageFiles[randIndex];
            game.load.image('level1_'+randImage, 'image/Level1/' + randImage + '.png');
            this.rand[0] = 'level1_'+randImage;
            console.log(this.rand[0])
           // game.add.image(4*x,2*y-20,this.rand[0]);
            button[0]= game.add.button(4*x,2*y-20, this.rand[0], cardlevel_1, this); 
            //button[0].loadTexture(this.rand[0]);
            /*button[0].name=rand[0]*/
            aImageFiles.splice(randIndex, 1)
            console.log(aImageFiles);

        }
    }
}  
function cardlevel_2(){
    var person = confirm("Are you sure in this card level 2?");
}
function cardlevel_3(){
    var person = confirm("Are you sure in this card level 3?");
}
function click_Noble(){
    var person = confirm("Are you sure in this card Noble?");
}
function click_coin(){
    var person = prompt("มันใจหรอ", "... summit ...");
}
