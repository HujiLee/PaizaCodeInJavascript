var input = [
    "6",
    "**|***",//1
    "||*|||",
    "======",
    "*|*|*|",
    "****|*",
    "******",
    "**|***",
    "|*****",//8

    "**|***",//9
    "||*|||",
    "======",
    "||*|*|",
    "****|*",
    "******",
    "**|***",
    "******"
];
function main() {
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
    var SuanPanShower = function (places,numberInStr) {
        var arr = new Array(8);
        (function () {
            for(var i=0;i<8;i++){
                arr[i] = "*".repeat(places).split("");//初始化都是*,后面碰到具体数字来修改到|
            }
        })();
        arr[2] ="=".repeat(places).split("");
        "从高位到低位,表示numberInStr" +
        "在这之前先把numberInStr如果有超出位数的就截掉第一个数字";
        var number = numberInStr;
        while(number.length>places){
            number = number.slice(1);
        }
        "如果位数不够就补0";
        while(number.length<places){
            number = "0"+number;
        }
        "根据数字的值补充|";
        (function () {
            var thisPlace;
            for(var i in number){
                thisPlace = number[i]-0;
                if(thisPlace<5){
                    arr[3+thisPlace][i]="|";
                    arr[1][i]="|";
                }
                else {
                    arr[0][i]="|";
                    arr[3+(thisPlace-5)][i]="|";
                }
            }
        })();

        this.__defineGetter__("mx",function () {
            return arr;
        });
        this.__defineGetter__("mxstr",function () {
            for(var i in arr){
                console.log(arr[i].join(""));
            }
        })
    };
    var sp1 = (function () {
        var matrix = [];
        for(var i=0;i<8;i++){
            matrix[i] = input[i+1];
        }
        return new SuanPan(matrix)
    })();
    var sp2 = (function () {
        var matrix = [];
        for(var i=0;i<8;i++){
            matrix[i] = input[i+9];
        }
        return new SuanPan(matrix)
    })();
    var sps = new SuanPanShower(input[0]-0,sp1.plus(sp2));
    sps.mxstr;

}

main();


/**
 * Created by Administrator on 2016/10/19 0019.
 */