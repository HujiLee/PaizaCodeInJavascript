/*

var input = [
    "4 3",
    "3",
    "7",//2
    "4 4 10",//3+0
    "5 4 60",//3+1
    "6 3 20",
    "2 1 30",
    "8 1 50",
    "1 6 40",
    "3 6 70"//3+6
];*/

var input=[
    "0 0",
    "1",
    "3",
    "0 2 4",
    "1 1 5",
    "1 2 6"
]
function main() {
    var xy = {
        x:input[0].split(' ')[0]-0,
        y:input[0].split(" ")[1]-0
    };
    var k = input[1]-0;
    var N = input[2]-0;
    var matrix = (new Array(N));
    (function () {
        for(var i =0;i<N;i++){
            matrix[i]={
                x:input[3+i].split(" ")[0]-0,
                y:input[3+i].split(" ")[1]-0,
                price:input[3+i].split(" ")[2]-0
            }
        }
    })();
    var distance = function (thisPoint,xy) {
        // thisPoint.distance = Math.pow(Math.pow(thisPoint.x-xy.x,2)+Math.pow(thisPoint.y-xy.y,2),0.5);
        return Math.pow(Math.pow(thisPoint.x-xy.x,2)+Math.pow(thisPoint.y-xy.y,2),0.5);
    }


    matrix.sort(function (a,b) {
        if(distance(a,xy)<=distance(b,xy)){
            return -1;
        }
        else {
            return 1;
        }
    });//这样距离最近的就在数组的前面
    // console.log(matrix);
    (function () {
        var total = 0;
        for(var i = 0;i<k;i++){
            total+=matrix[i].price;
        }
        console.log(total/k);
        "失败原因:没有四舍五入";

    })();
}

main();


/**
 * Created by Administrator on 2016/10/20 0020.
 */