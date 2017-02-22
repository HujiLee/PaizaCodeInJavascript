var input = [
    "2",
    "3",
    "7",
    "9",
    "28"
];
function main() {
    var arr = input.map(function (e) {
        return e-0;

    });
    /* arr.forEach(function (e,i,a) {
     if(i<=a.length-2){
     console.log(a[i+1]-a[i]);
     }
     })*/
    for(var i=0;i<=arr.length-2;i++){
        console.log(arr[i+1]-arr[i]);
    }

}

main();
[
    "Paiza的系统出了问题,明明这样做是输出1 4 2 19,paiza运行却在后面多了一个-31"
]

/**
 * Created by Administrator on 2016/11/4 0004.
 */