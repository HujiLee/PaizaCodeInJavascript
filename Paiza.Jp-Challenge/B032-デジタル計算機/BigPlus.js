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
        (function () {
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
            console.log(result);
        })();

    }

};

var bn1 = new BigNumber("9235");
var bn2 = new BigNumber("712");
bn1.plus(bn2);
"";