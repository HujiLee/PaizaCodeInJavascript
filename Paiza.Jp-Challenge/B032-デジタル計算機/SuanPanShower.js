/**
 * Created by Administrator on 2016/10/19 0019.
 */
"输入字符串形式的数字,输出题目要求的算盘格式";

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

var sps= new SuanPanShower(5,"62");
sps.mxstr;
"";