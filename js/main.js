/**游戏主程序
 * Created by web-01 on 2018/2/24.
 */
//创建很多变量保存游戏所有角色
//创建两个变量保存画布
var can1=null;//前面画布
var can2=null;//后面画布
//创建两个变量保存画笔
var ctx1=null;//前面画笔
var ctx2=null;//后面画笔
//创建两个变量保存画布高度宽度
var canWidth=0;
var canHeight=0;
//创建两个变量保存背景图片
var bgPic=new Image();
//1.5创建变量保存海葵类
var ane=null;
//1.6创建一个变量保存食物类
var fruit=null;
//1.7创建两个变量，保存上一帧时长，保存两帧之间的时间差
var lastTime=0;
var deltaTime=0;
// 创建变量保存大于对象
var  mom=null;
//1.9创建两个变量保存鼠标的位置
var mx=0;
var my=0;
//1.10创建一个变量，用来保存特效；
var wave=null;
//创建游戏入口函数game 当前页面加载成功调用game函数
//分别调用init函数和gameloop 函数
//1.11创建变量保存变量小鱼
var baby=null;
function game() {
    init();
    lastTime=Date.now();//付初始值上一帧执行时间
    deltaTime=0;//付初始值，两帧之间的时间差；
    gameloop();
}
document.body.onload=game;
//创建init函数：作用 初始化角色（加载图片，设置大小）；
function init(){
    //3.1初始化画布
    can1=document.getElementById("canvas1");
    can2=document.getElementById("canvas2");
    //3.2初始化画笔
    ctx1=can1.getContext("2d");
    ctx2=can2.getContext("2d");
    //console.log(ctx2)
    //3.3初始化画布高度和宽度
    canWidth=can1.width;
    canHeight=can1.height;
    //console.log(canWidth);
    //3.4下载背景
    bgPic.src="src/background.jpg";//下载;
    //3.5创建一个海葵类，并且调用初始化方法；
    ane=new aneObj();
    ane.init();
    //3.6创建一个食物类，并且调用初始化方法;
    fruit = new fruitObj();
    fruit.init();
    //3.7创建一个大鱼类并且调用初始化方法
    mom=new momObj();
    mom.init();
//3.8为画布1绑定鼠标移动事件
    can1.addEventListener("mousemove",onMouseMove,false);
    //3.9创建一个特效类并且调用初始化方法；
    wave=new waveObj();
    wave.init();
    //4.10创建一个小鱼类并且调用初始化方法
    baby=new babyObj();
    baby.init();

};
//创建gameloop函数：负责使用定时器绘制游戏不同角色
function gameloop(){
    //4.1创建只能定时器调用gameloop
    requestAnimFrame(gameloop);
    var now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;
    //console.log(deltaTime);
    drawBackground();
    //4.3调用绘制海葵方法；
    momFruitsCollision() ;
    momBabyCollision();
    ane.draw();
    fruitMonitor();
    //4.4调用食物的绘制方法
    fruit.draw();
    //4.5调用大鱼绘制方法 mom.js
    ctx1.clearRect(0,0,canWidth,canHeight);
    mom.draw();
    //4.6调用特效类绘制方法
    wave.draw();
    //4.7调用小鱼类绘制方法
    baby.draw();
};
//5创建一个全局函数获取当前鼠标的位置
function onMouseMove(e) {
    //1.获取鼠标x位置保存mx；
    if (e.offsetX ||e.layerX){
        mx=e.offsetX==undefined?e.layerX:e.offsetX;
    }
//2.获取鼠标y位置保存到my
    if (e.offsetY ||e.layerY){
        my=e.offsetY==undefined?e.layerY:e.offsetY;
    }
    //console.log(mx+":"+my);
//
//
}

//
//
//
////
//
//
//
//
//
//
////
//
//
//
//
//
//
////
//
//
//
//
//
//
//