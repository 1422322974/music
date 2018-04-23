/**
 * Created by web-01 on 2018/2/28.
 */
//大鱼妈妈
//1.写一个大鱼的类对象，
var momObj=function () {
    //console.log(1);
    this.x;
    this.y;
    this.angle;//角度
    this.bigEye=[];//大鱼的眼睛需要一个数组保存
    this.bigBody=[];//大鱼的身体
    this.bigTail=[];//大鱼的尾巴
    this.bigEyeIndex=0;//大鱼眼睛图片下标
    this.bigEyeStart=1;//计时开始
    this.bigEyeEnd=2000;//终止时间
    //大鱼身体切换所需三个变量
    this.bigBodyIndex=0;//大鱼身体图片下标【0-7】
    this.bigBodyStart=1;//计时开始
    this.bigBodyEnd=3000;//终止时间
    //大鱼尾巴切换所需三个变量
    this.bigTailIndex=0;//大鱼尾巴图片下标【0-7】
    this.bigTailStart=1;//计时开始
    this.bigTailEnd=1000;//终止时间
    //
}
//2.添加init大于方法
momObj.prototype.init=function () {
    //console.log(2);
    //2.1初始化大鱼的位置保存在中间
    this.x=canWidth * 0.5;
    this.y=canHeight * 0.5;
    //2.2初始化大鱼的角度
    this.angle=0;
    //2.3//初始化大鱼的眼睛，身体。尾巴图片并且下载对应的图片
    for(var i=0;i<2;i++){
        this.bigEye[i]=new Image()//创建眼睛图片对象
        this.bigEye[i].src="./src/bigEye"+i+".png";//下载杨静图片
    }
    for(var i=0;i<8;i++){
        this.bigBody[i]=new Image()//创建身体图片对象
        this.bigBody[i].src="./src/bigSwim"+i+".png";
    }
    for(var i=0;i<8;i++){
        this.bigTail[i]=new Image()//创建尾巴图片对象
        this.bigTail[i].src="./src/bigTail"+i+".png";
    }
   /* console.log(this.bigEye);
    console.log(this.bigBody);
    console.log(this.bigTail)*/
}
//3.添加大于绘制的方法draw
momObj.prototype.draw=function () {
    //console.log(3);
    //3.1大鱼的位置跟随鼠标，鼠标位置
    //3.2在main.js中创建一个全局函数，获取鼠标位置
    this.x=lerpDistance(mx,this.x,0.97);
    this.y=lerpDistance(my,this.y,0.96);
    //3.2.1修改大鱼游戏角度[固定套路] 四行代码；
    //1.获取大鱼和鼠标的坐标差
    var deltaY=my-this.y;
    var deltaX=mx-this.x;
    //2.获取大鱼和鼠标的角度差
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;
    //3.使用函数获取新角度给大鱼
    this.angle=lerpAngle(beta,this.angle,0.9);
    //3.3控制大鱼眼睛图片切换 切换16ms；
    //start=1; end=2000; idx=0 1
    this.bigEyeStart=this.bigEyeStart+deltaTime;
    //3.5如果大鱼的眼睛计算超过了总时长
    if(this.bigEyeStart>this.bigEyeEnd){
        //3.6切换到下一张图片
        this.bigEyeIndex=(this.bigEyeIndex+1)%2;
        //3.7大鱼眼睛计算清空 重新开始
        this.bigEyeStart=1;
        //如果当前下标为1 闭眼睛 结束时间300
        if (this.bigEyeIndex==1){
        this.bigEyeEnd=300;
    }
    //如果当前下标Wie0 睁眼睛 结束时间2000
    if(this.bigEyeIndex==0){
        this.bigEyeEnd=2000;
    }
}
    //3.8大鱼的身体计时开始
    this.bigBodyStart=this.bigBodyStart+deltaTime;
    //3.如果大鱼的身体计算超过了总时长
    if(this.bigBodyStart>this.bigBodyEnd){
        //3.切换到下一张图片
        this.bigBodyIndex=(this.bigBodyIndex+1)%8;
        //3.大鱼身体计算清空 重新开始
        this.bigBodyStart=1;
    }
    //3.9大鱼的尾巴计时开始
    this.bigTailStart=this.bigTailStart+deltaTime;
    //3.如果大鱼的尾巴计算超过了总时长
    if(this.bigTailStart>this.bigTailEnd){
        //3.切换到下一张图片
        this.bigTailIndex=(this.bigTailIndex+1)%8;
        //3.大鱼尾巴计算清空 重新开始
        this.bigTailStart=1;
    }
    //3.10绘制大鱼，ctx1
    ctx1.save();//保存当前画笔状态 颜色，位置
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    //3.11绘制大鱼身体
    ctx1.drawImage(this.bigBody[this.bigBodyIndex],
        -this.bigBody[this.bigBodyIndex].width*0.5,
        -this.bigBody[this.bigBodyIndex].height*0.5);
    // 3.12绘制大鱼尾巴
    ctx1.drawImage(this.bigTail[this.bigTailIndex],
        -this.bigTail[this.bigTailIndex].width*0.5+30,
        -this.bigTail[this.bigTailIndex].height*0.5);
  // 3.13绘制大鱼眼睛
    ctx1.drawImage(this.bigEye[this.bigEyeIndex],
        -this.bigEye[this.bigEyeIndex].width*0.5,
        -this.bigEye[this.bigEyeIndex].height*0.5);
    // console.log(this.bigTailIndex);
    ctx1.restore();
}
//4.修改main.js创建对象并且添加方法；