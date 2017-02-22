var input = [
    "3 2",
    "128 127",
    "127 128",
    "128 127"
];
function main() {
    var H = input[0].split(" ")[0]-0;
    var W = input[0].split(" ")[1]-0;
    var arr = [];
    (function () {
        for(var i = 0;i<H;i++){
            var subarr = input[i+1].split(" ");
            for(var j in subarr){
                subarr[j] = subarr[j]-0;
            }
            arr[i] = subarr;
        }
    })();
    (function () {
        for(var i in arr){
            for(var j in arr[i]){
                if(arr[i][j]>=128){
                    arr[i][j]=1;
                }
                else {
                    arr[i][j]=0;
                }
            }
        }
    })();
    (function () {
        for(var i in arr){
            console.log(arr[i].join(" "));
        }
    })();

}

main();


/**
 * Created by Administrator on 2016/10/19 0019.
 */