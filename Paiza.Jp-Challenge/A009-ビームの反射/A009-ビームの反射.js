var input = /*[
        "3 5",
        "__\\_/",
        "___/_",
        "\\/\\_/"
    ]*//*[
        "4 4",
        "___\\",
        "_\\__",
        "____",
        "_\\_/"
    ]*/[
        "3 2",
        "_\\",
        "//",
        "\\/"
    ]
    /*[
     "3 5",
     "/_\\_/",
     "___/_",
     "\\/\\_/"
     ]*/;
function main() {
    // console.log(input);
    var H = input[0].split(" ")[0] - 0;
    var W = input[0].split(" ")[1] - 0;
    var matrix = [];
    for (var i = 1; i <= H; i++) {
        matrix.push(input[i].split(""))
    }
    var record = {
        passedblocks: 0,//每当出现一条线,就把这条线经过的方块数加到这里
        lines: 0//记录前进过程中一共经历了多少线
        //最终结果是passedblocks-(lines-1)
    };
    var DIRCT = {
        "N": 0,
        "E": 1,
        "S": 2,
        "W": 3,
        0: "N",
        1: "E",
        2: "S",
        3: "W"
    };
    /**
     *
     * @param prevDirect = int
     * @param block = "/" or "\\"
     */
    var getNextDirect = function (prevDirect, block) {
        switch (block) {
            case "\\":
                return 3 - prevDirect;
                break;
            case "/":
                switch (prevDirect % 2) {
                    case 0:
                        return prevDirect + 1;
                    case 1:
                        return prevDirect - 1;
                }
                break;
            default:
                break;
        }
    }
    //坐标点全部从[0,0]数起
    /**
     * 点的格式{
     * x:2,
     * y:0
     * }
     */
    var go = function (frPnt, direct) {
        var i, j;
        switch (direct) {
            case DIRCT["N"]:
                "X减小,y不变";
                for (i = frPnt.x - 1; i >= 0; i--) {
                    if (matrix[i][frPnt.y] !== "_") {
                        return {
                            goOut: false,
                            passed: (frPnt.x - i + 1),
                            nextPoint: {y: frPnt.y, x: i},
                            nextDirect: getNextDirect(direct, matrix[i][frPnt.y])
                        };
                    }
                }
                //否则就是这么出去了
                return {
                    goOut: true,
                    passed: (frPnt.x - 0 + 1)
                };
                break;
            case DIRCT["S"]:
                "x增大,y不变";
                for (i = frPnt.x + 1; i <= H - 1; i++) {
                    if (matrix[i][frPnt.y] !== "_") {
                        return {
                            goOut: false,
                            passed: (i - frPnt.x + 1),
                            nextPoint: {y: frPnt.y, x: i},
                            nextDirect: getNextDirect(direct, matrix[i][frPnt.y])
                        };
                    }
                }
                return {
                    goOut: true,
                    passed: ((H - 1) - frPnt.x + 1)
                };
                break;
            case DIRCT["E"]:
                "x不变,y增大";
                for (j = frPnt.y + 1; j <= W - 1; j++) {
                    if (matrix[frPnt.x][j] != "_") {
                        return {
                            goOut: false,
                            passed: (j - frPnt.y + 1),
                            nextPoint: {y: j, x: frPnt.x},
                            nextDirect: getNextDirect(direct, matrix[frPnt.x][j])
                        };
                    }
                }
                return {
                    goOut: true,
                    passed: ((W - 1) - frPnt.y + 1)
                };
                break;
                j
            case DIRCT["W"]:
                "x不变,y减小";
                for (j = frPnt.y - 1; j >= 0; j--) {
                    if (matrix[frPnt.x][j] != "_") {
                        return {
                            goOut: false,
                            passed: (frPnt.y - j + 1),
                            nextPoint: {y: j, x: frPnt.x},
                            nextDirect: getNextDirect(direct, matrix[frPnt.x][j])
                        };
                    }
                }
                return {
                    goOut: true,
                    passed: (frPnt.y - 0 + 1)
                }

        }
    };
    "下面正式开始运行";


    switch (matrix[0][0]) {
        case "/":
            console.log(1);
            break;
        case "\\":
            (function () {
                record.lines++;
                record.passedblocks += 1;
                var tmp = {goOut: false, nextPoint: {x: 0, y: 0}, nextDirect: DIRCT["S"]};
                while (tmp.goOut !== true) {
                    tmp = go(tmp.nextPoint, tmp.nextDirect);
                    record.lines++;
                    record.passedblocks += tmp.passed;
                }
            })();
            console.log(record.passedblocks-(record.lines-1));
            break;
        default:
            (function () {
                var tmp = {goOut: false, nextPoint: {x: 0, y: 0}, nextDirect: DIRCT["E"]};
                while (tmp.goOut !== true) {
                    tmp = go(tmp.nextPoint, tmp.nextDirect);
                    record.lines++;
                    record.passedblocks += tmp.passed;
                }

            })();
            console.log(record.passedblocks-(record.lines-1));

    }


}

main();
[
    "提出コード結果詳細",
    "テスト番号",
    "入力ケース番号	ジャッジ結果	実行時間",
    "テスト 1",
    "ケース 1（基本データ）",
    "通過",
    "0.06 秒",
    "テスト 2",
    "ケース 1（基本データ）",
    "通過",
    "0.06 秒",
    "テスト 3",
    "ケース 1（基本データ）",
    "通過",
    "0.06 秒",
    "テスト 4",
    "ケース 1（基本データ）",
    "通過",
    "0.06 秒",
    "テスト 5",
    "ケース 1（基本データ）",
    "通過",
    "0.06 秒",
    "テスト 6",
    "ケース 1（境界値データ）",
    "通過",
    "0.06 秒",
    "ケース 2（基本データ）",
    "通過",
    "0.07 秒",
    "テスト 7",
    "ケース 1（境界値データ）",
    "通過",
    "0.06 秒",
    "ケース 2（境界値データ）",
    "通過",
    "0.06 秒",
    "ケース 3（基本データ）",
    "通過",
    "0.07 秒",
    "テスト 8",
    "ケース 1（境界値データ）",
    "通過",
    "0.06 秒",
    "ケース 2（境界値データ）",
    "通過",
    "0.06 秒",
    "ケース 3（基本データ）",
    "通過",
    "0.06 秒",
    "テスト 9",
    "ケース 1（中規模データ）",
    "通過",
    "0.06 秒",
    "テスト 10",
    "ケース 1（中規模データ）",
    "通過",
    "0.06 秒"
]

/**
 * Created by Administrator on 2016/11/5 0005.
 */