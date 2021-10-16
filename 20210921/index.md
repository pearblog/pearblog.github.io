## 制作canvas游戏
<head>
<link rel="stylesheet" type="text/css" href="pearblog.github.io/style.css">
  </head>
这是我的第一篇博客，我就随便写写吧。
  
我仿照这个[网站](http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/)做了一个类似贪吃蛇的游戏（作者介绍的方法与此不同，贪吃蛇版本是我后来改的），感谢该作者。

## 对比

[原游戏](http://www.lostdecadegames.com/demos/simple_canvas_game/)

[现游戏](/20210921/simple_canvas_game/)

<iframe frameborder="no" width="520" height="500" src="/20210921/simple_canvas_game/"></iframe>

## 改动

将字体改为酷站快乐体，感谢[酷站](https://www.zcool.com.cn/)

将游戏模式改为贪吃蛇模式

添加敌人ai

逐渐增加难度

将上下左右键改为wsad

<div id="diy_right_menu">
    <ul>
        <li style="list-style: none;"><a href="javascript:void(history.back())">返回</a></li>
    </ul>
</div>
<style>
#diy_right_menu {
                opacity: 0.5;
                position: fixed;
                right: 2%;
                top: 2%;
                width: 20em;
                margin-top: 1em;
                background-color: black;
                padding: 1em;
                border-radius: 0;
                transition: 0.6s ease-in-out;
                color: white;
                border-radius: 5px;
    overflow-y: auto;
max-height: 450px;
            }
            
            #diy_right_menu:hover {
                color: white;
                right: 2%;
                top: 2%;
                border-radius: 10px;
                opacity: 1.3;
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
                transition: 0.4s ease-in-out;
            }
            
            #diy_right_menu a {
    color:white
                transition: 0.4s ease-in-out;
            }
            
            #diy_right_menu a:hover {
                transition: 0.4s ease-in-out;
            }
</style>
