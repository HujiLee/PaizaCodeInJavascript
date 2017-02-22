var input = [
    "1 4 1 20",
    "3",//1
    "130 1 0 0 0",//2
    "150 0 2 0 0",//3
    "100 1 0 0 0"//4
];
function main() {
    var slotMachine = {
        arr: [
            input[0].split(" ")[0] - 0,
            input[0].split(" ")[1] - 0,
            input[0].split(" ")[2] - 0,
            input[0].split(" ")[3] - 0
        ],

        try: function (drinkPriceAndGivenCoin) {
            "drinkPriceAndGivenCoin是\"130 1 0 0 0\"的形式";
            var price = drinkPriceAndGivenCoin.split(" ")[0] - 0;
            var coins = [
                drinkPriceAndGivenCoin.split(" ")[1] - 0,
                drinkPriceAndGivenCoin.split(" ")[2] - 0,
                drinkPriceAndGivenCoin.split(" ")[3] - 0,
                drinkPriceAndGivenCoin.split(" ")[4] - 0,
            ];
            Array.prototype.__defineGetter__("total", function () {
                var result = 0;
                result += this[0] * 500 + this[1] * 100 + this[2] * 50 + this[3] * 10;
                return result;
            });
            Array.prototype.merge = function (another) {
                "为下面高于百位和低于百位的结果合并做准备";
                var arr = [];
                arr[0]=this[0]+another[0];
                arr[1]=this[1]+another[1];
                arr[2]=this[2]+another[2];
                arr[3]=this[3]+another[3];
                return arr;
            };
            Array.prototype.del = function (another) {
                this[0]-=another[0];
                this[1]-=another[1];
                this[2]-=another[2];
                this[3]-=another[3];
                return this;
            };
            var change = coins.hujiTotal - price;


            var go = function (change) {
                var tempMachine = [
                    slotMachine.arr[0] + coins[0],
                    slotMachine.arr[1] + coins[1],
                    slotMachine.arr[2] + coins[2],
                    slotMachine.arr[3] + coins[3]
                ];
                "接下来判断能不能成功找零";
                if (change % 10 !== 0) {
                    return [false];
                    "确保是10的倍数";
                }
                if (change ===0) {
                    return [true,[0,0,0,0],tempMachine.del([0,0,0,0])];
                }
                else if (change >= 10 && change < 50) {
                    "[10,50)";
                    if (tempMachine[3] * 10 >= change) {
                        // tempMachine[3] -= change / 10;
                        // slotMachine.arr = tempMachine;
                        return [true, [0, 0, 0, change / 10],tempMachine.del([0, 0, 0, change / 10])];//暂时先不要修改.arr,因为try可能要递归使用
                    }
                    else {
                        return [false];
                    }
                }
                else if (change >= 50 && change < 100) {
                    "[50,100)";
                    if (tempMachine[2] > 0) {
                        "至少有一个50元";
                        return (function () {
                            var tens = change - 50;
                            if(tens<=tempMachine[3]*10){
                                return [true,[0,0,1,tens/10],tempMachine.del([0,0,1,tens/10])];
                            }
                            else {
                                "10元不够";
                                return [false];
                            }

                        })();
                    }
                    else {
                        "没有50元,全都要靠10元凑";
                        if(tempMachine[3]*10>=change){
                            // tempMachine[3]-=change/10;
                            return [true,[0,0,0,change/10],tempMachine.del([0,0,0,change/10])];
                        }
                        else {
                            return [false];
                        }
                    }
                }
                else if(change>=100&&change<500){
                    "[100,500)";
                    return (function () {
                        var hundred = parseInt(change/100);
                        if(hundred>tempMachine[1]){
                            "100元不足以充满零钱的百位";
                            return [false];
                        }
                        else {
                            var smThan100 = change%100;
                            var tried = go(smThan100);
                            if(tried[0]==false){
                                "50和10元不足以支付百位以下的零钱"
                                return [false];
                            }
                            else {
                                "50和10元可以支付百位以下的零钱";
                                return [true,[0,hundred,0,0].merge(tried[1]),tempMachine.del([0,hundred,0,0].merge(tried[1]))];
                            }

                        }
                    })();
                }
                else  {
                    "[500,+∞)";
                    return (function () {
                        "x_i,500 と x_i,100 は同時に1以上にはならない";
                        "0 ≦ x_{i, 500} ≦ 1, 0 ≦ x_{i, 100} ≦ 4";
                        var bger = 100*parseInt(change/100);"超过百位的部分,本题中测试用例的限制用户最多也只能输入590元.假设是560元,则bger是500";
                        var smer = change%100;//小于百位的部分
                        var triedSmer = go(smer);
                        if(triedSmer[0]==false){
                            "百位以下凑不齐";
                            return [false];
                        }
                        else {
                            if(bger==500){
                                if(tempMachine[0]>0){
                                    "至少有一个500元";
                                    return [true,[1,0,0,0].merge(triedSmer[1]),tempMachine.del([1,0,0,0].merge(triedSmer[1]))];
                                }
                                else {
                                    "必须用100元凑";
                                    if(tempMachine[1]>=5){
                                        return [true,[0,5,0,0].merge(triedSmer[1]),tempMachine.del([0,5,0,0].merge(triedSmer[1]))];
                                    }
                                    else {
                                        "100元不够";
                                        return [false];
                                    }
                                }

                            }
                            else {
                                "bger为100~400";
                                "必须用100元凑";
                                if(tempMachine[1]*100>=bger){
                                    return [true,[0,bger/100,0,0].merge(triedSmer[1]),tempMachine.del([0,bger/100,0,0].merge(triedSmer[1]))];
                                }
                                else {
                                    return [false];
                                }
                            }
                        }




                    })();
                }
            };

            return go(change);
        }
    };

    console.log(slotMachine.try(input[2])[1].join(" "));
    slotMachine.arr = slotMachine.try(input[2])[2];
    console.log(slotMachine.try(input[3])[1].join(" "));
    slotMachine.arr = slotMachine.try(input[3])[2];
    console.log(slotMachine.try(input[4])[1]);


/*
    (function () {
        var count = input[1]-0;
        for(var i=0;i++;i<count){
            slotMachine.try(input[i+2]);
            if(slotMachine.try(input[i+2])[0]==true){
                slotMachine.arr = slotMachine.try(input[i+2])[2];
                console.log(slotMachine.try(input[i+2])[1].join(" "));
            }
            else {
                console.log("impossible");
            }
        }

    })();
*/
}

main();


/**
 * Created by Administrator on 2016/10/20 0020.
 */