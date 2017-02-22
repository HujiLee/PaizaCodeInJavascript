var input = [
    "7",
    "27 100 83 2 57 71 40"
];
function main() {
    var arr = input[1].split(" ");
    (function () {
        for(var i in arr){
            arr[i]=arr[i]-0;
        }
    })();
    arr.sort(function (a,b) {
        if (a>b) {
            return 1;
        }else if(a<b){
            return -1
        }else{
            return 0;
        }
    });
    console.log(arr[(arr.length-1)/2]);
}

main();


/**
 * Created by Administrator on 2016/10/18 0018.
 */