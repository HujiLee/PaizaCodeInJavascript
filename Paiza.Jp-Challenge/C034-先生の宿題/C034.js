var input = [
    "6 - x = 3"
];
function main() {
    var xindex;
    var arript = input[0].split(" ").map(function (e, i, a) {
        if ((i == 0 || i == 2 || i == 4)) {
            if (e !== 'x') {
                return e - 0;
            }
            else {
                xindex = i;
                return e;
            }

        }
        else {
            return e;
        }
    });
    if (xindex == 4) {
        console.log(eval(arript.splice(0, 3).join(" ")));//x在等于后面
    }
    else if (arript[1]=='+') {
        "加法,用和减去另一个加数";
        console.log(arript[4]-arript[2-xindex]);
    }
    else {
        "减法";
        if(xindex==0)
        {
            "x是被减数";
            console.log(arript[4]+arript[2]);
        }
        else {
            "x是减数";
            console.log(arript[0]-arript[4]);
        }
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
    "0.07 秒",
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
];

/**
 * Created by Administrator on 2016/10/30 0030.
 */