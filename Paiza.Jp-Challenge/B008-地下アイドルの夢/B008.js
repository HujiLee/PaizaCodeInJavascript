var input =/* [
    "3 5",
    "3 0 -2",
    "1 5 1",
    "-4 1 0",
    "-1 -2 3",
    "0 0 2"
]*/[
    "5 30",
    "-70 -35 19 90 -8",
    "-69 4 -54 5 -50",
    "63 -81 -17 16 -28",
    "93 -33 -21 78 11",
    "6 -92 -90 -39 29",
    "-61 -38 85 -56 47",
    "-62 -74 61 4 -57",
    "7 -58 19 96 99",
    "89 -24 -78 -75 -6",
    "97 11 -68 68 71",
    "72 8 83 42 55",
    "50 -6 11 59 -36",
    "52 -97 -45 1 -69",
    "14 9 -80 -78 38",
    "-54 -33 78 -28 -6",
    "15 91 67 20 -20",
    "9 58 -16 95 -88",
    "59 45 -11 59 84",
    "99 -43 77 79 -37",
    "-58 -80 -77 38 -91",
    "-49 12 -47 -67 31",
    "-20 62 -70 34 38",
    "-90 -46 5 91 -63",
    "5 79 80 -44 -61",
    "60 68 29 -65 -36",
    "-38 -83 -40 43 96",
    "-20 -98 -71 6 85",
    "95 15 36 -82 41",
    "-74 -99 26 96 -70",
    "-83 94 51 -36 -32"
];
function main() {
    var N = input[0].split(" ")[0] - 0;//会员数
    var M = input[0].split(" ")[1] - 0;//live数
    if (N !== 0 && M !== 0) {
        var profit = [];
        var plusProfit = 0;
        for (var i = 0; i < M; i++) {
            profit[i] = input[i + 1].split(" ").map(function (e) {
                return e - 0;
            }).reduce(function (prev, current) {
                return prev + current;
            });
            if (profit[i] > 0) {
                plusProfit += profit[i];
            }
        }
        if (plusProfit > 0) {
            console.log(plusProfit);

        } else {
            console.log(0);
        }

    } else {
        console.log(0);
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
    "0.06 秒",
    "テスト 7",
    "ケース 1（境界値データ）",
    "通過",
    "0.06 秒",
    "ケース 2（基本データ）",
    "通過",
    "0.06 秒",
    "テスト 8",
    "ケース 1（条件内の特殊なデータ）",
    "通過",
    "0.06 秒",
    "ケース 2（基本データ）",
    "通過",
    "0.06 秒",
    "テスト 9",
    "ケース 1（大規模データ）",
    "通過",
    "0.43 秒",
    "テスト 10",
    "ケース 1（大規模データ）",
    "通過",
    "0.56 秒"
];
/**
 * Created by Administrator on 2016/11/3 0003.
 */