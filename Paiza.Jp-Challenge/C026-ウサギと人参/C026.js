var input = /*[
    "3 5 2",
    "8 10",
    "7 6",
    "7 4"
]*/[
    "3 64 10",
    "84 75",
    "73 53",
    "56 34"
];
function main() {
    var NSp = input[0].split(" ").map(function (x) {
        return x-0;
    });
    var best={
        NO:null,
        weight:null
    }
    for(var i=1;i<=NSp[0];i++){
        (function () {
            var sweet = input[i].split(" ")[1]-0;
            if(sweet>=NSp[1]-NSp[2]&&sweet<=NSp[1]+NSp[2]){
                if(best.NO===null){
                    best.NO=i;
                    best.weight = input[i].split(" ")[0]-0;
                }
                else{
                    if(input[i].split(" ")[0]-0>best.weight){
                        best.weight = input[i].split(" ")[0]-0;
                        best.NO=i;
                    }

                }
            }
        })();
    }
    console.log((best.NO)?best.NO:"not found");


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
    "ケース 1（条件内の特殊なデータ）",
    "通過",
    "0.06 秒",
    "テスト 9",
    "ケース 1（境界値データ）",
    "通過",
    "0.06 秒",
    "テスト 10",
    "ケース 1（境界値データ）",
    "通過",
    "0.06 秒"
];

/**
 * Created by Administrator on 2016/11/4 0004.
 */