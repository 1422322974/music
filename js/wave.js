/**wave.js特效类大鱼吃食物特效
 *
 * Created by web-01 on 2018/3/5.
 */
//1创建特效类
var waveObj=function () {
 // 1.1创建一个变量保存特效对象位置。
    this.x=[];
    this.y=[];
   // 1.2创建一个变量保存圆环半径
    this.r=[];
  //  1.3创建以变量保存活动状态
    this.alive=[];
}
//2.添加初始化方法
//特效池子圆环，当大鱼迟到一个食物产生一个特效圆环
waveObj.prototype.num=10;

waveObj.prototype.init=function () {
  // 2.1将所有圆环半径环境化为0；
    for(var i=0;i<this.num;i++){
        this.alive[i]=false;
        this.r[i]=0;
    }
   // 2.2将所有状态初始化为false；
}
//3.添加绘制方法
waveObj.prototype.draw=function () {
  //4;产生一个活动状态的圆环；
    ctx1.save();
    //遍历所有特效，获取状态为true
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            ctx1.beginPath();
            ctx1.lineWidth=4;
            //y圆环半径2~100 状态false
            this.r[i]+=deltaTime*0.08;
            if(this.r[i]>100){
                this.alive[i]=false;
                break;
            }
            var alpha=1-this.r[i]/100;
            ctx1.strokeStyle="rgba(255,255,255,"+alpha+")";
            ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
            ctx1.closePath();
            ctx1.stroke();
        }
    }
    ctx1.restore();
    //x，y是当前食物的位置
}
    waveObj.prototype.bron=function (x,y) {
        //4.1创建一个循环，循环所有的特效对象
        for (var i=0;i<this.num;i++){
             if(!this.alive[i]){
                 this.alive[i]=true;
                 this.r[i]=20;
                 this.x[i]=x;
                 this.y[i]=y;
                 return;
             }

        }
        //4.2判断一个状态为false对象

        //4.3将当前对象状态改为true；
        //4.4半径为20；
        //4.5x，y食物x，y
        //4.6返回该对象；

    }
