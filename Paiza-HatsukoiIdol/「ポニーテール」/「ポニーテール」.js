var input = [
    "U D",
    "D L",
    "R L",
    "D U",
    "U U"
];
function main() {
    var arr = new Array(5);
    (function () {
        for (var i = 0; i < 5; i++) {
            arr[i]={};
            arr[i].ok = (input[i][0]===input[i][2]);
        }
    })();
    var count = 0;
    for(var j in arr){
        if(arr[j].ok){
            count++;
        }
    }
    console.log(
        count>3?
            "OK":"NG"
    )

}

main();


/**
 * Created by Administrator on 2016/10/18 0018.
 */