/**
 * Created by Administrator on 2016/10/19 0019.
 */
var BigNumber = function (str) {
    var valueInStr = str;//本程序限定纯正整数数字
    this.__defineGetter__("bigv",function () {
        return valueInStr;
    });
    this.plus = function (another) {
        "首先,找出位数更大的一个数字.假定最大有5位,那么需要扩展成6位(前面加0)来应对可能出现的进位";
        var me = this.bigv;
        var him = another.bigv;
        (function () {
            var maxlength = Math.max(me.length,him.length)+1;
            while (me.length<maxlength){
                me = "0"+me;
            }
            while (him.length<maxlength){
                him = "0"+him;
            }
        })();
        "接下来一位一位地加";
        return (function () {
            var jinwei = 0;
            var result = "";
            for(var i = me.length-1;i>=1;i--){
                result = ((me[i]-0)+(him[i]-0)+jinwei)%10+result;
                jinwei = parseInt(((me[i]-0)+(him[i]-0)+jinwei)/10);
            }
            result = (0+jinwei)+result;
            while (result[0]==="0"){
                result = result.replace(/^0/,"");
            }
            // console.log(result);
            return result;
        })();

    }

};
var SuanPan = function (matrix) {
    "参数matrix是题目提供的8行字符串组成的数组,比如:";
    ["**|***",//0
        "||*|||",//1
        "======",//2
        "*|*|*|",//3
        "****|*",//4
        "******",//5
        "**|***",//6
        "|*****"//7
    ];
    this.myNumber = (function () {
        "首先将算盘矩阵转化成数字字符串,再放进BigNumber里";
        var places = matrix[0].length;
        var number = "";
        (function () {
            var big;//上面的2个位表示的数字
            var small;//下面的5位表示的数字
            for(var i=0;i<places;i++){
                big = (matrix[0][i]=="*")?0:5;
                small = (function () {
                    for(var j=0;j<5;j++){
                        if(matrix[3+j][i]!=="*"){
                            return j;
                        }
                    }
                })();
                number = number+(big+small);
            }

        })();
        var BN = new BigNumber(number);
        return BN;

    })();
    this.plus = function (anotherSp) {
        return this.myNumber.plus(anotherSp.myNumber);
    }
};
var sp1 = new SuanPan(    ["**|***",//0
    "||*|||",//1
    "======",//2
    "*|*|*|",//3
    "****|*",//4
    "******",//5
    "**|***",//6
    "|*****"//7
]);
var sp2 = new SuanPan(
    ["**|***",//0
        "||*|||",//1
        "======",//2
        "*|*|*|",//3
        "****|*",//4
        "******",//5
        "**|***",//6
        "|*****"//7
    ]
);

var result = sp1.plus(sp2);//字符串

"";