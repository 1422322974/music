/**负责游戏碰撞检测
 * 检测大鱼和食物距离是否碰撞到，让食物消失
 * Created by web-01 on 2018/3/2.
 */

function momFruitsCollision() {
    //创建循环所有食物
    for(var i=0;i<fruit.num;i++){
        //判断当前食物是否是活动状态
        if(fruit.alive[i]){
            //判断当前食物是否是活动状态
            //获取大鱼和当前食物距离
           var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
            if(l < 900) { //小于30象素，平方
                //如果距离小于900，小于30像素
                //食物消失
                fruit.dead(i);
                //6.显示光环特效
                wave.bron(fruit.x[i],fruit.y[i]);
            }
        }
    }
};
//大鱼碰到小鱼
function momBabyCollision() {
    //1.计算大鱼与小鱼之间的距离、
    var l=calLength2(mom.x,mom.y,baby.x,baby.y);
    //2.两个距离小鱼30像素
    if(l<900){
        baby.babyBodyIndex=0;
    }
    //3.小鱼身体下标=0；
}