var input = /*[
    "7 4 5",//7=竖线的长度(其实没啥用) 4=多少条竖线 5=多少条横线
    "1 3 1",//1
    "3 2 2",
    "2 3 5",
    "3 4 4",
    "1 6 6"
]*/[
    "5 5 8",
    "3 3 4",
    "1 3 2",
    "4 2 2",
    "2 1 2",
    "2 4 4",
    "3 1 1",
    "1 4 3",
    "4 3 4"
];
function main() {
    var Node = function (i) {
        this.index = i;//在给数组排序时赋值
        this.lef = function () {
            return this instanceof InitNode;
        };
        this.target = null;
    };
    Node.prototype.si = function () {
        return this.index;
    };
    Node.prototype.ti = function () {
        return this.target.index;
    };
    var InitNode = function (offset, targetOffset) {
        this.offset = offset;//用于排序
        this.targetOffset = targetOffset;//用于生成genNode
    };
    var GenNode = function (offset, target) {
        this.offset = offset;
    };
    var n = input[0].split(" ")[1] - 0;//多少条竖线
    var gragh = (new Array(n + 1)).fill(null).map(function (e, i, a) {
        if (i != 0) {
            return new Array()
        }
    });//不使用index=0的位置
    var m = input[0].split(" ")[2] - 0;//多少条横线


}

main();


/**
 * Created by Administrator on 2016/11/8 0008.
 */