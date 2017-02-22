/**
 * Created by Administrator on 2016/11/9 0009.
 */
var Point = function (x,y) {
    this.x = x;
    this.y = y;
};
Point.prototype.delta = function (anotherPoint) {
    "计算两个点之间的位移";
    return {
        $x:this.x-anotherPoint.x,
        $y:this.y-anotherPoint.y
    };
};
