/**
 * Created by Administrator on 2016/11/8 0008.
 */
var Parent = function ($1) {
    this.$1 = $1||"undef";
};
Parent.prototype.getS1 = function () {
    return this.$1;
};
var Child = function ($2) {
    this.$2 = $2||"Try";
};
var obP = Object.create(new Parent());
Child.prototype = obP;
Child.prototype.getS2 = function () {
    return this.$2
};
var obC = new Child();




(function () {
    var Node = function (i,goLeft) {
        this.index = i;//在给数组排序时赋值
        this.goLeft = goLeft||false;//在生成genNode时赋值
    };


    var InitNode = function (offset,targetOffset) {
        this.nodemsg = new Node(-1,false);
        this.offset=offset;//用于排序
        this.targetOffset = targetOffset;//用于生成genNode
        this.target = null;//在生成genNode时赋值
    };
    var genNode = function (offset,target) {
        this.nodemsg = new Node(-1,false);
        this.offset=offset;
        this.target = target||null;
    };
    var initnode = new InitNode(2,3)
    // console.log(initnode)
})();


