//创建一个Canvas对象
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

//定义变量
var hero = {
    speed: 256,
    x: 0,
    y: 0
}

var monster = {
    x: 0,
    y: 0
};
var monstersCaught = 0; //玩家抓住怪物的数量
var dire = 0;
var stop = false;
var mdire;
var cross = 200;//怪物转弯速度

//处理输入
var keysDown = {};
addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);
addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);

//开始游戏
var reset = function () {

    //安置怪物
    monster.x = 38 + (Math.random() * (canvas.width - 98));
    monster.y = 38 + (Math.random() * (canvas.height - 98));
};

//更新游戏
var update = function (modifier) {
    if(dire != 0 || stop == true){
        if (Math.floor(Math.random() * cross) == 0) {
            mdire = Math.floor(Math.random() * 4); //怪物的方向
        }
        if (mdire == 0) {
            monster.y -= (hero.speed - 100) * modifier;
            if (monster.x < 23 || monster.y < 23 || monster.x > (canvas.width - 60) || monster.y > (canvas.height - 60)) {
                monster.y += (hero.speed - 100) * modifier;
                mdire = Math.floor(Math.random() * 4); //怪物的方向

            }

        }
        if (mdire == 1) {
            monster.y += (hero.speed - 100) * modifier;
            if (monster.x < 23 || monster.y < 23 || monster.x > (canvas.width - 60) || monster.y > (canvas.height - 60)) {
                monster.y -= (hero.speed - 100) * modifier;
                mdire = Math.floor(Math.random() * 4); //怪物的方向

            }
        }
        if (mdire == 2) {
            monster.x -= (hero.speed - 100) * modifier;
            if (monster.x < 23 || monster.y < 23 || monster.x > (canvas.width - 60) || monster.y > (canvas.height - 60)) {
                monster.x += (hero.speed - 100) * modifier;
                mdire = Math.floor(Math.random() * 4); //怪物的方向

            }

        }
        if (mdire == 3) {
            monster.x += (hero.speed - 100) * modifier;
            if (monster.x < 23 || monster.y < 23 || monster.x > (canvas.width - 60) || monster.y > (canvas.height - 60)) {
                monster.x -= (hero.speed - 100) * modifier;
                mdire = Math.floor(Math.random() * 4); //怪物的方向

            }
        }
    }
    if (87 in keysDown || 119 in keysDown) { //上
        hero.y -= hero.speed * modifier;
        dire = 87;
    }
    if (83 in keysDown || 115 in keysDown) { //下
        hero.y += hero.speed * modifier;
        dire = 83;
    }
    if (65 in keysDown || 97 in keysDown) { //左
        hero.x -= hero.speed * modifier;
        dire = 65;
    }
    if (68 in keysDown || 100 in keysDown) { //右
        hero.x += hero.speed * modifier;
        dire = 68;
    }
    if (32 in keysDown) { //空格
        dire = 0;
    }

    if (dire == 87) { //上
        hero.y -= hero.speed * modifier;
    }
    if (dire == 83) { //下
        hero.y += hero.speed * modifier;
    }
    if (dire == 65) { //左
        hero.x -= hero.speed * modifier;
    }
    if (dire == 68) { //右
        hero.x += hero.speed * modifier;
    }
    //是否出界
    if (hero.x < 23 || hero.y < 23 || hero.x > (canvas.width - 60) || hero.y > (canvas.height - 60)) {
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "24px Helvetica";
        ctx.textAlign = "center";
        ctx.textBaseline = "center";
        ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
        stop = true;
        return;
    }
    //是否杀死怪物
    if (
        hero.x <= (monster.x + 32)
            && monster.x <= (hero.x + 32)
            && hero.y <= (monster.y + 32)
            && monster.y <= (hero.y + 32)
    ) {
        ++monstersCaught;
        if (hero.speed <= 400) hero.speed += 5;
        if (cross > 40) cross -= 5;
        reset();
    }
    
};

//渲染
var render = function () {
    
    var loss = false;
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }
    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }
    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y);
    }
    //分数
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px 站酷快乐体2016修订版";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("当前分数: " + monstersCaught, 32, 32);
    if(dire==0){
        
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "50px 站酷快乐体2016修订版";
ctx.textAlign = "center";
        ctx.textBaseline = "center";
        ctx.fillText("按adws以开始", canvas.width / 2, canvas.height / 2);
    }
}



//主函数
var main = function () {
    if (!stop) {
        var now = Date.now();
        var delta = now - then;

        update(delta / 1000);
        render();

        then = now;
    }
    else {

        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "50px 站酷快乐体2016修订版";
        ctx.textAlign = "center";
        ctx.textBaseline = "center";
        ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
        if (32 in keysDown) { //空格
            stop = false;
            hero.x = canvas.width / 2;
            hero.y = canvas.height / 2;
            monstersCaught = 0; //玩家抓住怪物的数量
            dire = 0;
            hero.speed = 256;
        }
    }
};

//开始
//载入图片
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "images/background.png";

var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
    heroReady = true;
};
heroImage.src = "images/hero.png";

var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
    monsterReady = true;
};
monsterImage.src = "images/monster.png";

reset();
var then = Date.now();

hero.x = canvas.width / 2;
hero.y = canvas.height / 2;
monstersCaught = 0; //玩家抓住怪物的数量
dire = 0;
stop = false;
hero.speed = 256;
setInterval(main, 1); //循环执行main
