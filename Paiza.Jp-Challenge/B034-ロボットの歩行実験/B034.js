/*
var input = [
    "2 2",//1 行目にはそれぞれ開始地点の _x 座標、_y 座標を表す整数 s_x, s_y がこの順に半角スペース区切りで与えられます。
    "2 1 1 1",//2 行目にはそれぞれ実験対象のロボットの前方向、右方向、後方向、左方向への 1 歩の移動コマ数を表す整数 d_f, d_r, d_b, d_l がこの順に半角スペース区切りで与えられます。
    "8",//input[2]
    "m F",
    "t R",
    "m F",
    "m F",
    "t B",
    "m L",
    "m L",
    "m B"
];
*/
var input = [
    "621 -855",
    "2 6 3 6",
    "19",
    "t L",
    "t L",
    "t R",
    "m L",
    "m B",
    "t R",
    "t L",
    "t L",
    "t B",
    "t B",
    "m R",
    "t B",
    "m R",
    "t R",
    "t L",
    "t B",
    "m L",
    "m R",
    "t L"
]
function main() {
    var W = "West";
    var E = "East";
    var N = "North";
    var S = "South";
    var Compass = function () {
        var dircts = [N, E, S, W];
        var arrow = 0;
        this.getMyArrow = function () {
            return [arrow, dircts[arrow]];//for example:[0,"North"]
        };
        this.turn = function (LBRF) {
            //LBRF的值可以是"L" "B" "R" "F"
            switch (LBRF) {
                case "R":
                    arrow = (arrow + 1) % 4;
                    return true;
                case "B":
                    arrow = (arrow + 2) % 4;
                    return true;
                case "L":
                    arrow = (arrow + 3) % 4;
                    return true;
                case "F":
                    return true;
                default:
                    //不应该出现别的字符!
                    return false;
            }
        };
        this.getMoveDirection = function (LBRF) {
            var moveArrow;
            switch (LBRF) {
                case "R":
                    moveArrow = (arrow + 1) % 4;
                    return [moveArrow, dircts[moveArrow]];
                case "B":
                    moveArrow = (arrow + 2) % 4;
                    return [moveArrow, dircts[moveArrow]];
                case "L":
                    moveArrow = (arrow + 3) % 4;
                    return [moveArrow, dircts[moveArrow]];
                case "F":
                    moveArrow = (arrow) % 4;
                    return [moveArrow, dircts[moveArrow]];
                default:
                    //不应该出现别的字符!
                    return false;
            }
        };
    };
    var Robot = function (initx, inity, step_in_array) {
        var x = initx;
        var y = inity;
        //steps从step_in_array取值,step_in_array的形式是[2,1,3,4],分别对应前右后左
        var steps = {
            "F": step_in_array[0],
            "R": step_in_array[1],
            "B": step_in_array[2],
            "L": step_in_array[3]
        };
        var compass = new Compass();
        this.turn = function (LBRF) {
            compass.turn(LBRF);
        };
        this.move = function (LBRF) {
            switch (compass.getMoveDirection(LBRF)[1]) {
                case W:
                    x -= steps[LBRF];
                    return true;
                case E:
                    x += steps[LBRF];
                    return true;
                case N:
                    y += steps[LBRF];
                    return true;
                case S:
                    y -= steps[LBRF];
                    return true;
                default:
                    //不应该出现别的字符!
                    return false;
            }
        };
        this.getCurrentPosition = function () {
            return {
                x:x,
                y:y
            };
        };
    };
    var robot = new Robot(parseInt(input[0].split(" ")[0]),parseInt(input[0].split(" ")[1]),(function () {
        var arr = input[1].split(" ");
        for(var i in arr){
            arr[i] = parseInt(arr[i]);
        }
        return arr;
    })());
    var howManySteps = parseInt(input[2]);
    for(var i = 1;i<=howManySteps;i++){
        switch (input[i+2][0]){
            case "m":
                robot.move(input[i+2][2]);
                break;
            case "t":
                robot.turn(input[i+2][2]);
                break;
            default:
                console.log("???");
        }
    }
    console.log(robot.getCurrentPosition().x+" "+robot.getCurrentPosition().y);


};

main();


/**
 * Created by Administrator on 2016/10/17 0017.
 */