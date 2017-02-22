/*var input = [
    "10 4",
    "3 30",
    "4 25",
    "5 20",
    "6 65",
    "7 75",
    "8 0",
    "9 10",
    "10 100",
    "11 35",
    "12 80"
];*/
var input = [
    "7 3",
    "19 0",
    "20 0",
    "21 60",
    "22 30",
    "23 10",
    "24 10",
    "25 90"
];
function main() {
    input = input.map(function (x) {
        return x.split(" ").map(function (x) {
            return x - 0;
        })
    });
    var Day = function (day, ameRate) {
        this.day = day;
        this.ame = ameRate;
    };
    var days = [];
    (function () {
        for (var i = 1; i <= input[0][0]; i++) {
            days.push(new Day(input[i][0], input[i][1]));
        }
    })();
    "至此数据输入保存完毕";
    "下面开始找出最适合旅行的days";


    (function () {
        var bestDayIndex = 0;
        Array.prototype.totalHuji = function (fromindex, toindex) {
            var total = 0;
            for (var i = fromindex; i <= toindex; i++) {
                total += this[i].ame;
            }
            return total
        };
        "totalHuji函数可能写的有问题";
        var many = input[0][1];//连续玩多少天
        var bestAme = days.totalHuji(0,0+many-1);
        days.forEach(function (e, i, a) {
            if (i <= a.length - many&&i>0) {
                if(days.totalHuji(i,i+many-1)<bestAme)
                {
                    bestAme = days.totalHuji(i,i+many-1);
                    bestDayIndex = i;
                }
            }
        });
        console.log(days[bestDayIndex].day+" "+days[(bestDayIndex+many-1)].day);

    })();

}

main();


/**
 * Created by Administrator on 2016/10/30 0030.
 */