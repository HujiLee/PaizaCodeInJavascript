var input = [
    '4 2',
    '6 6 6',
    '4 6 4',
    '6 1 1',
    '4 4 4',
];
function main() {
    var howmanyBox = parseInt(input[0].split(" ")[0]);
    var r  = parseInt(input[0].split(" ")[1]);
    var boxes = [];
    var getMin = function (xyzStr) {
        var xyz = xyzStr.split(" ");
        for(var i in xyz){
            xyz[i] = parseInt(xyz[i]);
        }
        return Math.min(xyz[0],xyz[1],xyz[2]);

    }
    for(var i =1;i<=howmanyBox;i++){
        boxes[i] = {
            min:getMin(input[i])
        };
        if(boxes[i].min>=2*r){
            console.log(i);
        }
    }

}

main();


/**
 * Created by Administrator on 2016/10/16 0016.
 */