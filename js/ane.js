/**绘制海葵程序
 * Created by web-01 on 2018/2/24.
 */
//1：创建海葵
var aneObj=function(){
    this.x=[];//保存多个海葵x坐标
    this.len=[];//保存多个海葵高度；
}
//2创建海葵init函数初始化自己图片或属性；
aneObj.prototype.num=50;
aneObj.prototype.init=function(){
    //创建循环初始海葵高度与x坐标
    for(var i=0 ;i<this.num;i++){
        //初始化海葵高度=基准高度+随机数；
        this.len[i]=200+Math.random()*50;
        //每个海葵，生长的位置随机，比较像自然生长。
        this.x[i]=i*16+Math.random()*20;
    }
    //console.log(this.len);
    //console.log(this.x)
}
//3创建海葵draw函数绘制海葵
aneObj.prototype.draw=function(){
    //console.log("ane draw");
    ctx2.save();//保存画笔状态、
    ctx2.strokeStyle="#3b154e";//画笔颜色紫
    ctx2.globalAlpha=0.6;//半透明；
    ctx2.lineCap="round";//线段顶部圆角；
    ctx2.lineWidth=20;
    for(var i=0;i<this.num;i++){
        ctx2.beginPath();
        ctx2.moveTo(this.x[i],canHeight);
        ctx2.lineTo(this.x[i],canHeight-this.len[i]);
        ctx2.stroke();
    }
    ctx2.restore()//回复画笔状态
}