
var W = "West";
var E = "East";
var N = "North";
var S = "South";
var Compass = function () {
    var dircts = [N,E,S,W];
    var arrow = 0;
    this.getMyArrow = function () {
        return [arrow,dircts[arrow]];//for example:[0,"North"]
    };
    this.turn=function (LBRF) {
        //LBRF的值可以是"L" "B" "R" "F"
        switch (LBRF){
            case "R":
                arrow = (arrow+1)%4;
                return true;
            case "B":
                arrow = (arrow+2)%4;
                return true;
            case "L":
                arrow = (arrow+3)%4;
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
                moveArrow = (arrow+1)%4;
                return [moveArrow,dircts[moveArrow]];
            case "B":
                moveArrow = (arrow+2)%4;
                return [moveArrow,dircts[moveArrow]];
            case "L":
                moveArrow = (arrow+3)%4;
                return [moveArrow,dircts[moveArrow]];
            case "F":
                moveArrow = (arrow)%4;
                return [moveArrow,dircts[moveArrow]];
            default:
                //不应该出现别的字符!
                return false;
        }
    };
};
var compass = new Compass();

"";
/**
 * Created by Administrator on 2016/10/17 0017.
 */