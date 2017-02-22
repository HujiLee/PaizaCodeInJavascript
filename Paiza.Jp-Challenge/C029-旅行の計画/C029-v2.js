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
    var total = function (fromindex, toindex) {
        var total = 0;
        for (var i = fromindex; i <= toindex; i++) {
            total += days[i].ame;
        }
        return total;
    };
    var besDayIdx = 0;
    var many = input[0][1];
    var bestAme = total(0, 0 + many - 1);
    (function () {
        var tmpAme;
        for (var i = 1; i <= days.length - many; i++) {
            tmpAme = total(i, i + many - 1);
            if (tmpAme < bestAme) {
                bestAme = tmpAme;
                besDayIdx = i;
            }
        }
    })();
    console.log(
        days[besDayIdx].day + " " + days[besDayIdx + many - 1].day
    )

}

main();


/**
 * Created by Administrator on 2016/10/30 0030.
 */