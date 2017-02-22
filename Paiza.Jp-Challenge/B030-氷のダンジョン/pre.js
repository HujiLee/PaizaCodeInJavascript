/*

var input = [
    '5 5',//H W,H表示多少个——————,W表示每个————————里有多少个位置
    '.###.',//input[1]
    '#.#.#',//input[2]
    '##..#',
    '..##.',
    '##..#',
    '3 3',//input[H+1],初始点
    '5',//input[H+2]
    'U',//input[H+2+1]
    'R',
    'D',
    'L',
    'U',//input[H+2+5]
];
*/
var input = [
    '10 10',
'#.#.######',
'..##...###',
'##.#.###.#',
'#.#.#...##',
'....##..#.',
'...#..#...',
'..#.##.###',
'..#.#.#.#.',
'.##...#.##',
'...#..#.##',
'3 3',
'5',
'D',
'D',
'L',
'D',
'U',
]
function main() {
    var ICE = "Ice";
    var EARTH = "Earth";
    var matrix = [];//需要注意这道题有点坑,我读矩阵的时候要这样读[_y][_x],因为题目里规定的x是向右变大,y向下变大
    var H = parseInt(input[0]);
    var str2arr = function (arr, str) {
        for (var i = 1; i <= str.length; i++) {
            arr[i] = (str[i - 1] == "#") ? ICE : EARTH;
        }

    };
    var move = function (mat, from, direction) {
        //约定from参数是一个点{_x:5,_y:3}这种形式
        switch (direction) {
            case "U":
                return (function () {
                    if(from._y==1){
                        //已经在最上面的情况
                        return from;
                    }else {
                        var y = from._y-1;
                        for(;y>1;y--){//注意方向是减减
                            if(matrix[y][from._x]==EARTH){
                                return {_x:from._x,_y:y};//找到这个方向上第一块土
                            }
                        }
                        return {_x:from._x,_y:1};//找到这个方向上最上面的

                    }

                })();
                break;
            case "D":
                return (function () {
                    if(matrix[from._y+1]===undefined){
                        //已经在最下面的情况
                        return from;
                    }
                    else {
                        var y = from._y+1;
                        for(;(matrix[y+1]!==undefined);y++){
                            if(matrix[y][from._x]==EARTH){
                                return {_x:from._x,_y:y};
                            }
                        }
                        return {_x:from._x,_y:y};
                    }


                })();
                break;
            case "L":
                return (function () {
                    if(from._x ==1){
                        //已经在最左边
                        return from;
                    }
                    else {
                        var x = from._x-1;
                        for(;x>1;x--){
                            if(matrix[from._y][x]==EARTH){
                                return {_x:x,_y:from._y};
                            }
                        }
                        return {_x:x,_y:from._y};
                    }

                })();
                break;
            case "R":
                return (function () {
                    if(matrix[1][from._x+1]===undefined){
                        //已经到了最右边
                        return from;
                    }
                    else{
                        var x = from._x+1;
                        for(;(matrix[1][x+1]!==undefined);x++){
                            if(matrix[from._y][x]==EARTH){
                                return {_x:x,_y:from._y};
                            }
                        }
                        return {_x:x,_y:from._y};
                    }
                })();
                break;
            default:
                console.log("不可能出现别的方向啊.");
        }

    };
    (function () {
        for (var i = 1; i <= H; i++) {
            matrix[i] = [];
            str2arr(matrix[i], input[i]);
            //录入冰或土地
        }
    })();
    // console.log(matrix);
    // move(matrix,{_x:3,_y:3},"U");
    "接下来以move函数么有差错为前提";
    var initPoint = {_x:parseInt(input[H+1].split(" ")[0]),_y:parseInt(input[H+1].split(" ")[1])};
    var howManyStep = parseInt(input[H+2]);
    console.log((function () {
        var from = initPoint;
        for(var i = 1;i<=howManyStep;i++){
            from = move(matrix,from,input[H+2+i]);
        }
        return from._x+" "+from._y;
    })())


}

main();

"";


/**
 * Created by Administrator on 2016/10/16 0016.
 */