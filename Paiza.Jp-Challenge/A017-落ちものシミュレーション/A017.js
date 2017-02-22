var input = [
    "7 10 4",
    "1 8 1",//1
    "4 1 5",
    "1 6 2",
    "2 2 0"
];
function main() {
    var GameBord = (function () {
        var VOID=".";
        var OCP = "#";
        var GB = function (W,H) {
            this.W = W;
            this.H = H;
            this.matrix = (function () {
                var ma = new Array(H);

                for(var i=0;i<ma.length;i++){

                    ma[i] = (new Array(W)).fill(VOID);
                }

                return ma;
            })();


        };
        /**
         *
         * @param xi
         * @param wi
         * @param hi
         */
        GB.prototype.fall = function (xi,wi,hi) {
            var left = xi;
            var right = Math.min(xi+wi-1,this.W-1)
            var falltoBottom = (function (thiss) {
                for(var i = 0;i<thiss.H;i++){
                    for(var j=left;j<=right;j++){
                        if(thiss.matrix[i][j]==OCP){
                            return i-1;
                        }
                    }
                }
                return thiss.H-1;
            })(this);
            (function (thiss) {
                for(var i = falltoBottom;i>=Math.max(falltoBottom-hi+1,0);i--){
                    for(var j=left;j<=right;j++){
                        thiss.matrix[i][j]=OCP;
                    }
                }
            })(this);
        };

        GB.prototype.show = function () {
            for(var i=0;i<this.H;i++){
                console.log(this.matrix[i].join(""))
            }
        };

        return GB;
    })();

    var gamebord = (function () {
        var gbarr = input[0].split(" ").map(function (x) {
            return x-0;
        });
        var gb = new GameBord(gbarr[1],gbarr[0]);
        var fallarr;
        for(var i=1;i<=gbarr[2];i++){
            fallarr = input[i].split(" ").map(function (x) {
                return x-0;
            });
            gb.fall(fallarr[2],fallarr[1],fallarr[0]);
        }
        return gb;
    })();

    gamebord.show();

}

main();
[
    "なりました！",
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
    "ケース 1（境界値データ）",
    "通過",
    "0.06 秒",
    "ケース 2（基本データ）",
    "通過",
    "0.07 秒",
    "テスト 9",
    "ケース 1（境界値データ）",
    "通過",
    "0.06 秒",
    "ケース 2（基本データ）",
    "通過",
    "0.06 秒",
    "テスト 10",
    "ケース 1（境界値データ）",
    "通過",
    "0.06 秒",
    "ケース 2（基本データ）",
    "通過",
    "0.06 秒"
]

/**
 * Created by Administrator on 2016/11/11 0011.
 */