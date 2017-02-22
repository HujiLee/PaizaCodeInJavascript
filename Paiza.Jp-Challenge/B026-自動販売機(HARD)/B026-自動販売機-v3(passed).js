var input = /*[
    "5 7 8 9",
    "4",//1
    "110 0 2 0 0",//2=1+1
    "120 1 0 0 0",
    "130 1 0 0 0",
    "180 0 2 0 2"//5=1+4
]*/[
    "1 4 1 20",
    "3",
    "130 1 0 0 0",
    "150 0 2 0 0",
    "100 1 0 0 0"
];
function main() {
    var coinGen = function ($500, $100, $50, $10) {
        return {
            500: $500,
            100: $100,
            50: $50,
            10: $10
        };
    };

    var SellMachine = function ($500, $100, $50, $10) {
        var hujiTotal = function (thiss) {
            return 500 * (thiss[500] || 0) + 100 * (thiss[100] || 0) + 50 * (thiss[50] || 0) + 10 * (thiss[10] || 0);
        };
        var hujiString = function (thiss) {
            return thiss[500] + " " + thiss[100] + " " + thiss[50] + " " + thiss[10];
        };
        var hujiCalc = function (me,another, isPlus) {
            "TestOver";
            if (isPlus === true) {
                for (var i in another) {
                    me[i] += another[i];
                }
            } else {
                for (var i in another) {
                    me[i] -= another[i];
                }
            }

            return me;
        };
        var coins = {
            500: $500,
            100: $100,
            50: $50,
            10: $10
        };

        var nowTotal = function () {
            "Test over";
            return hujiTotal(coins);
        };
        /*    this.debugTotal = function () {
         return nowTotal();
         }*/
        /**
         * subtry函数假定硬币储量总额是大于change的
         * @param change
         * @returns {*}
         */
        /* this.debugSub = function (change) {
         return subtry(change);
         };*/
        var subtry = function (change) {
            "TestOver";
            var goodPlan = function (plan) {
                "Test Over";
                var good = true;
                for (var i in plan) {
                    if (coins[i] < plan[i]) {
                        good = false;
                    }
                }
                return good;
            };
            if (change < 100) {
                if (change < 50) {
                    var plan = {10: change / 10};
                    if (goodPlan(plan)) {
                        return [true, coinGen(0, 0, 0, plan[10])];
                    } else {
                        return [false];
                    }
                } else {
                    "[50,100)";
                    var plan1 = {50: 1, 10: parseInt((change - 50) / 10)};
                    if (goodPlan(plan1)) {
                        return [true, coinGen(0, 0, plan1[50], plan1[10])];
                    } else {
                        var plan2 = {10: parseInt(change / 10)};
                        if (goodPlan(plan2)) {
                            return [true, coinGen(0, 0, 0, plan2[10])];
                        } else {
                            return [false];
                        }
                    }

                }
            } else {
                if (change % 100 == 0) {
                    if (change < 500) {
                        "[100,500)之间的整百数";
                        var plan = {100: parseInt(change / 100)};
                        if (goodPlan(plan)) {
                            return [true, coinGen(0, plan[100], 0, 0)];
                        } else {
                            return [false];
                        }
                    } else {
                        "[500,无限大)的整百数";
                        var $500 = Math.min(parseInt(change / 500), coins[500]);
                        var $100 = parseInt((change - 500 * $500) / 100);
                        var plan = {500: $500, 100: $100};
                        if (goodPlan(plan)) {
                            return [true, coinGen(plan[500], plan[100], 0, 0)];
                        } else {
                            return [false];
                        }
                    }

                } else {
                    var lingtou = change % 100;
                    var zhengbai = change - lingtou;
                    var trylingtou = subtry(lingtou);
                    var tryzhengbai = subtry(zhengbai);
                    if (trylingtou[0] && tryzhengbai[0]) {
                        return [true, coinGen(
                            tryzhengbai[1][500],
                            tryzhengbai[1][100],
                            trylingtou[1][50],
                            trylingtou[1][10]
                        )];
                    }
                    else {
                        return [false];
                    }

                }

            }

        }
        /**
         *
         * @param price int
         * @param getIn {500:?,100:?,50:?,0:?}
         */
        this.tryChange = function (price, getIn) {
            var change = hujiTotal(getIn) - price;
            if (nowTotal() < change) {
                console.log("impossible");
                // return [false];
            }
            else {
                var tried = subtry(change);
                if (tried[0]) {
                    console.log(hujiString(tried[1]));
                    hujiCalc(coins,tried[1], false);
                    hujiCalc(coins,getIn, true);
                } else {
                    console.log("impossible");
                }

            }

        }

    };
    /*    var debug = new SellMachine(0, 10, 1, 18);
     debug.debugSub(50)*/
    var sell = (function () {
        var arr = input[0].split(" ").map(function (x) {
            return x - 0;
        });
        var sm = new SellMachine(arr[0], arr[1], arr[2], arr[3]);
        return sm;
    })();
    var count = input[1] - 0;
    for (var i = 2; i <= count + 1; i++) {
        var arr = input[i].split(" ").map(function (x) {
            return x - 0;
        });
        var getin = coinGen(arr[1], arr[2], arr[3], arr[4]);
        sell.tryChange(arr[0], getin);
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
    "0.07 秒",
    "テスト 5",
    "ケース 1（基本データ）",
    "通過",
    "0.07 秒",
    "テスト 6",
    "ケース 1（基本データ）",
    "通過",
    "0.07 秒",
    "テスト 7",
    "ケース 1（基本データ）",
    "通過",
    "0.07 秒",
    "テスト 8",
    "ケース 1（基本データ）",
    "通過",
    "0.07 秒",
    "テスト 9",
    "ケース 1（境界値データ）",
    "通過",
    "0.09 秒",
    "テスト 10",
    "ケース 1（境界値データ）",
    "通過",
    "0.07 秒"
]

/**
 * Created by Administrator on 2016/10/20 0020.
 */