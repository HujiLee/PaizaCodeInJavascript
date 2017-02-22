/*var input = [
    "3 5",
    "ant",
    "maven"
];*/
var input = [
    "5 5",
    "pizza",
    "paiza"
];
function main() {
    var strold ={
        value:input[1],
        length:input[0].split(" ")[0]-0,
        dict:{}
    } ;

    var strnew ={
        value:input[2],
        length:input[0].split(" ")[1]-0,
        dict:{}
    } ;

    var fullfillDict = function (str) {
        //根据字符串的值,将每个字母出现了多少次记录在dict里面
        for(var i = 0;i<str.length;i++){
            if(str.dict[str.value[i]]){
                str.dict[str.value[i]]++;
            }
            else {
                str.dict[str.value[i]]=1;
            }
        }
    };

    fullfillDict(strnew);
    fullfillDict(strold);

    var calc = function (oldOne,newOne) {
        for(var  i in oldOne.dict){
            if(newOne.dict[i]){
                newOne.dict[i]-=oldOne.dict[i];
            }
        }
        var result = 0;
        for(var j in newOne.dict){
            result+=(newOne.dict[j]>=0)?newOne.dict[j]:0;
        }
        return result;
    };
    // var rst = calc(strold,strnew);

    console.log(calc(strold,strnew));





}

main();


/**
 * Created by Administrator on 2016/10/17 0017.
 */