var input = /*[
    "5",
    "s 70" +//0 1
    " 78 82 " +//2 3
    "57 74",//4 5
    "l 68 81 81 60 78",
    "s 63 76 55 80 75",
    "s 90 100 96 10 10",
    "l 88 78 81 97 93"
]*/[
    "20",
    "l 100 67 39 85 87",
    "s 38 75 75 45 90",
    "l 43 95 7 35 49",
    "l 82 77 74 35 44",
    "s 96 80 92 58 84",
    "l 23 60 44 27 3",
    "l 42 24 52 23 63",
    "s 44 78 98 51 10",
    "l 93 38 73 88 12",
    "l 34 29 43 48 61",
    "l 83 33 97 3 59",
    "l 24 84 22 35 33",
    "s 81 42 80 34 87",
    "l 8 87 82 80 100",
    "l 48 75 75 3 50",
    "l 93 76 25 71 31",
    "s 60 92 64 66 11",
    "l 61 47 6 21 83",
    "l 68 1 47 81 78",
    "l 8 72 54 20 25"
];
function main() {

    var canClear = function (command) {
        var comm = command.split(" ");
        var totalScore = comm.slice(1, 6).reduce(function (prev, curn) {
            return (prev - 0) + (curn - 0);
        });
        if (totalScore < 350) {
            return false;
        }
        switch (comm[0]) {
            case "s":
                return (comm.slice(2, 4).reduce(function (prev, curn) {
                    return (prev - 0) + (curn - 0);
                }) >= 160)
                break;
            case "l":
                return (comm.slice(4, 6).reduce(function (prev, curn) {
                    return (prev - 0) + (curn - 0);
                }) >= 160)
                break;
            default:
                break;
        }

    };
    var howmanyStudents = input[0]-0;
    var howmanypassed =0;
    for(var i=1;i<=howmanyStudents;i++){
        if(canClear(input[i])){
            howmanypassed++;
        }

    }
    console.log(howmanypassed);

}

main();


/**
 * Created by Administrator on 2016/11/4 0004.
 */
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
    "0.06 秒",
    "テスト 6",
    "ケース 1（基本データ）",
    "通過",
    "0.06 秒",
    "テスト 7",
    "ケース 1（基本データ）",
    "通過",
    "0.06 秒",
    "テスト 8",
    "ケース 1（基本データ）",
    "通過",
    "0.06 秒",
    "テスト 9",
    "ケース 1（基本データ）",
    "通過",
    "0.07 秒",
    "テスト 10",
    "ケース 1（基本データ）",
    "通過",
    "0.06 秒"
]