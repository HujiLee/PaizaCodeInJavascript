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
    var Node = function (i, goLeft) {
        this.index = i;//在给数组排序时赋值
        this.goLeft = goLeft || false;//在生成genNode时赋值
    };
    var InitNode = function (offset, targetOffset) {
        this.nodemsg = new Node(-1, false);
        this.offset = offset;//用于排序
        this.targetOffset = targetOffset;//用于生成genNode
        this.target = null;//在生成genNode时赋值
    };
    InitNode.prototype.si = function () {
        return this.nodemsg.index;
    };
    InitNode.prototype.lef = function () {
        return this.nodemsg.goLeft;
    };
    InitNode.prototype.ti = function () {
        return this.target.nodemsg.index;
    };
    var GenNode = function (offset, target) {
        this.nodemsg = new Node(-1, false);
        this.offset = offset;
        this.target = target || null;
    };
    GenNode.prototype.si = function () {
        return this.nodemsg.index;
    };
    GenNode.prototype.lef = function () {
        return this.nodemsg.goLeft;
    };
    GenNode.prototype.ti = function () {
        return this.target.nodemsg.index;
    };
    var n = input[0].split(" ")[1] - 0;//多少条竖线
    var gragh = (new Array(n + 1)).fill(null).map(function (e, i, a) {
        if (i != 0) {
            return new Array()
        }
    });//不使用index=0的位置
    var m = input[0].split(" ")[2] - 0;//多少条横线
    (function () {
        "生成所有InitNode";
        var iptarr;
        for (var i = 1; i <= m; i++) {
            iptarr = input[i].split(" ").map(function (e) {
                return e - 0;
            });
            gragh[iptarr[0]].push(new InitNode(iptarr[1], iptarr[2]));
        }

    })();
    (function () {
        "生成所有genNode";
        for (var i = 1; i <= gragh.length - 2; i++) {
            "i=第几根竖线,其实不可能有到最后一根的InitNode";
            for (var j in gragh[i]) {
                if (gragh[i][j] instanceof InitNode) {
                    var gen = new GenNode(gragh[i][j].targetOffset, gragh[i][j]);
                    gen.nodemsg.goLeft = true;
                    gragh[i][j].target = gen;
                    gragh[i][j].nodemsg.goLeft = false;
                    gragh[i + 1].push(gen);
                }
            }
        }
    })();
    (function () {
        "给每个竖线上的点排序";
        for (var i = 1; i <= gragh.length - 1; i++) {
            gragh[i].sort(function (a, b) {
                if (a.offset > b.offset) {
                    return 1;
                } else {
                    return -1;
                }

            });

            "排完就要赋值index";
            for (var j in gragh[i]) {
                gragh[i][j].nodemsg.index = j - 0;
            }
        }
    })();
    var go = function (whichLane) {
        var lane = whichLane;
        if (gragh[lane].length == 0) {
            return lane;
        } else {
            var point;
            if (gragh[lane][0].lef()) {
                point = gragh[lane - 1][gragh[lane][0].ti()];
                lane--;
            } else {
                point = gragh[lane + 1][gragh[lane][0].ti()];
                lane++;
            }
            while (point.si() < gragh[lane].length - 1) {
                if (gragh[lane][point.si() + 1].lef()) {
                    point = gragh[lane - 1][gragh[lane][point.si() + 1].ti()];
                    lane--;
                } else {
                    point = gragh[lane + 1][gragh[lane][point.si() + 1].ti()];
                    lane++;
                }
            }
            return lane;
        }

    }
    var mostLeft = {
        from: null,
        to: Infinity
    };
    (function () {
        var tmp;
        for (var i = 1; i <= gragh.length - 1; i++) {
            tmp = go(i);
            if (tmp < mostLeft.to) {
                mostLeft.to = tmp;
                mostLeft.from = i;
            }
        }
    })();
    console.log(mostLeft.from);

}

main();
[
    "テスト 1",
    "ケース 1（基本データ）",
    "通過",
    "0.06 秒",
    "テスト 2",
    "ケース 1（中規模データ）",
    "通過",
    "0.06 秒",
    "テスト 3",
    "ケース 1（中規模データ）",
    "通過",
    "0.08 秒",
    "テスト 4",
    "ケース 1（中規模データ）",
    "通過",
    "0.07 秒",
    "テスト 5",
    "ケース 1（中規模データ）",
    "通過",
    "0.09 秒",
    "テスト 6",
    "ケース 1（条件内の特殊なデータ）",
    "通過",
    "0.09 秒",
    "テスト 7",
    "ケース 1（中規模データ）",
    "通過",
    "0.08 秒",
    "テスト 8",
    "ケース 1（条件内の特殊なデータ）",
    "通過",
    "0.07 秒",
    "ケース 2（大規模データ）",
    "通過",
    "0.10 秒",
    "テスト 9",
    "ケース 1（条件内の特殊なデータ）",
    "通過",
    "0.12 秒",
    "ケース 2（大規模データ）",
    "通過",
    "0.12 秒",
    "テスト 10",
    "ケース 1（条件内の特殊なデータ）",
    "通過",
    "0.07 秒",
    "ケース 2（大規模データ）",
    "通過",
    "0.11 秒"
];

/**
 * Created by Administrator on 2016/11/8 0008.
 */