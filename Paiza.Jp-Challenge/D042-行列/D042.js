var input = [
    "1 2",
    "3 4"
];
function main() {
    var matrix = input.map(function (x) {
        return x.split(" ").map(function (x) {
            return x-0;
        })
    });
    console.log(
        matrix[0][0]*matrix[1][1]-matrix[0][1]*matrix[1][0]
    );

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
    "0.06 秒",
    "テスト 10",
    "ケース 1（基本データ）",
    "通過",
    "0.06 秒"
]

/**
 * Created by Administrator on 2016/11/5 0005.
 */