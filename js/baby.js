//1.小鱼宝宝
var babyObj=function () {
    this.x;     //小鱼坐标
    this.y;
    this.angle;
    this.babyEye=[];//小鱼的眼睛
    this.babyBody=[];//小鱼的身体
    this.babyTail=[];//小鱼尾巴
    this.babyEyeIndex=0;//小鱼眼睛下标0~1
    this.babyEyeStart=1;
    this.babyEyeEnd=2000;//小鱼眼睛切换时间

    this.babyBodyIndex=0;//小鱼身体下标0~19
    this.babyBodyStart=1;
    this.babyBodyEnd=1000;//小鱼身体切换时间

    this.babyTailIndex=0;//小鱼尾巴下标0~19
    this.babyTailStart=1;
   this.babyTailEnd=200//小鱼尾巴切换时间




}
//2添加初始化方法
babyObj.prototype.init=function () {
   //1.初始化小鱼位置在屏幕中间
    this.x=canWidth*0.5;
    this.y=canHeight*0.5;
    //2。初始化小鱼角度0
    this.angle=0;
//3.初始化小鱼眼睛的图片
    for(var i=0;i<2;i++){
        this.babyEye[i]=new Image();
        this.babyEye[i].src="src/babyEye"+i+".png";
    }
// 4.初始化小鱼身体的图片
    for(var i=0;i<20;i++){
        this.babyBody[i]=new Image();
        this.babyBody[i].src="src/babyFade"+i+".png";
    }
    //5.初始化小鱼尾巴的图片
    for(var i=0;i<8;i++){
        this.babyTail[i]=new Image();
        this.babyTail[i].src="src/babyTail"+i+".png";
    }
    //   console.log(this.babyTail);
    //   console.log(this.babyBody);
    //   console.log(this.babyEye);

//
}
//3.添加绘制方法
babyObj.prototype.draw=function () {
  //  console.log(3);
    //1.保存画笔1状态
    ctx1.save();
    //2.保存原点
    ctx1.translate(this.x,this.y);
    //3.设置旋转角度
    ctx1.rotate(this.angle);
    //3.0,1小鱼面向大鱼慢慢游动 this.x,this.y
    this.x=lerpDistance(mom.x,this.x,0.98);
    this.y=lerpDistance(mom.y,this.y,0.97)
    //3.0.2小鱼面向大鱼慢慢游动 this.angle;
    //计算距离只差
    var deltaX=mom.x-this.x;
    var deltaY=mom.y-this.y;
    //计算角度只差
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;
    //返回新角度给小鱼
    this.angle=lerpAngle(beta,this.angle,0.9);
    //3.1计算小鱼眼睛小标切换
    this.babyEyeStart=this.babyEyeStart+deltaTime;
    if(this.babyEyeStart>this.babyEyeEnd){
        this.babyEyeIndex=(this.babyEyeIndex+1)%2;
        this.babyEyeStart=1;
       // 当小鱼眼睛闭眼时时间为300
        if(this.babyEyeIndex==1){
            this.babyEyeEnd=300;
        };
        //小鱼睁眼时间为2000
        if(this.babyEyeIndex==0){
            this.babyEyeEnd=2000;
        }
    }
    //3.2计算小鱼尾巴下标切换
this.babyTailStart=this.babyTailStart+deltaTime;
    if(this.babyTailStart>this.babyTailEnd){
        this.babyTailIndex=(this.babyTailIndex+1)%8;
        this.babyTailStart=1;
    }
    //3.3计算小鱼身体下标切换
this.babyBodyStart=this.babyBodyStart+deltaTime;
    if(this.babyBodyStart>this.babyBodyEnd){
        this.babyBodyIndex=(this.babyBodyIndex+1)%20;
        this.babyBodyStart=1;
    }
    //4.绘制小鱼身体
    var body=this.babyBody[this.babyBodyIndex];
    ctx1.drawImage(body,-body.width*0.5,-body.height*0.5);
    //5.绘制小鱼尾巴
    var tail=this.babyTail[this.babyTailIndex];
    ctx1.drawImage(tail,-tail.width*0.5+23,-tail.height*0.5);
    //6.绘制小鱼眼睛
    var eye=this.babyEye[this.babyEyeIndex];
    ctx1.drawImage(eye,-eye.width*0.5,-eye.height*0.5);
    //7.回复画笔1状态
    ctx1.restore();
}
//4.江小鱼宝宝类添加main.js
//5.将baby。js添加index.html
//
//
//
//


