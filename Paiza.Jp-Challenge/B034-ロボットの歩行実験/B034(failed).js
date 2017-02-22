var input = [
    "2 2",//1 行目にはそれぞれ開始地点の _x 座標、_y 座標を表す整数 s_x, s_y がこの順に半角スペース区切りで与えられます。
    "2 1 1 1",//2 行目にはそれぞれ実験対象のロボットの前方向、右方向、後方向、左方向への 1 歩の移動コマ数を表す整数 d_f, d_r, d_b, d_l がこの順に半角スペース区切りで与えられます。
    "8",
    "m F",
    "t R",
    "m F",
    "m F",
    "t B",
    "m L",
    "m L",
    "m B"
];
function main() {
    var Bei = "North";
    var Nan = "South";
    var Xi = "West";
    var Dong = "East";
    var direction = {
        list: [Bei, Dong, Nan, Xi],
        now: 0,//初始状态时机器人规定面向北方
        goNext: function () {
            if (direction.now == direction.list.length - 1) {
                direction.now = 0;
            }
            else {
                direction.now += 1;
            }
            return direction;
        },
        _getRealDirecion: function (movestr) {
            switch (movestr) {
                case "R":
                    return direction.list[direction.now + 1 % 4];//获得实际方向
                    break;
                case "B":
                    return direction.list[direction.now + 2 % 4];

                    break;
                case "L":
                    return direction.list[direction.now + 3 % 4];
                    break;
                case "F":
                    return direction.list[direction.now];
                default:
                    console.log("不可能啊");
            }
        }
    }
    var robot = {
        _myfront: direction,
        turn: function (str) {
            switch (str) {
                case "R":
                    robot._myfront.goNext();
                    break;
                case "B":
                    robot._myfront.goNext().goNext();
                    break;
                case "L":
                    robot._myfront.goNext().goNext().goNext();
                    break;
                default:
                    console.log("不可能啊");
            }

        },
        move: function (str) {
            robot._move(robot._myfront._getRealDirecion(str),robot._step[str]);
        },
        _move: function (realDirection, step) {
            switch (realDirection) {
                case Bei:
                    robot._y+=step;
                    break;
                case Dong:
                    robot._x+=step;
                    break;
                case Nan:
                    robot._y-=step;
                    break;
                case Xi:
                    robot._x-=step;
                    break;
            }
        },
        _x: parseInt(input[0].split(" ")[0]),
        _y: parseInt(input[0].split(" ")[1]),
        _step: {
            F: input[1].split(" ")[0] - 0,
            R: input[1].split(" ")[1] - 0,
            B: input[1].split(" ")[2] - 0,
            L: input[1].split(" ")[3] - 0
        }
    };

    robot.move("F");
    robot.turn("L");
    robot.move("B");
    "";

};

main();

"懵逼了 有点乱";

/**
 * Created by Administrator on 2016/10/16 0016.
 */