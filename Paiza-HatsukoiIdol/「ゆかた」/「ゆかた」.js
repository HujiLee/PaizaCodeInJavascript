var input = [
    "10",
    "2 out", "3 in", "7 out", "8 in", "13 out", "17 in", "18 out", "19 in", "20 in", "21 in"
];
/*
var input = [
    "4",
    "5 out",
    "12 in",
    "14 out",
    "21 in"
];*/
function main() {
    var count = parseInt(input[0]);
    var timeline = [];
    var buildTimeLine = function (startTime,command) {
        //startTime是整数数字,command是"in"或者"out"
        var timeByCommand = function (cmd) {
            switch (cmd){
                case "in":
                    return 5;
                case "out":
                    return 3;
                default:
                    return false;
            }
        };
        if(timeline.length==0){
            //那么这是第一条命令,比如'2 out'
            timeline.push([startTime,startTime+timeByCommand(command)]);
        }
        else{
            if(timeline[timeline.length-1][1]>=24){
                "1.前面的超温度时间表已经排到24:00甚至之后的情况";
                //do nothing
            }
            else {

                if(startTime>=timeline[timeline.length-1][1]){
                    "2.新的开始时间不在原有栈里的范围内,需要新加入一个时间段";
                    timeline.push([startTime,(startTime+timeByCommand(command))>=24?24:(startTime+timeByCommand(command))]);
                }
                else{
                    "3.在原有栈的时间范围内,不要新开时间段,只需要修改原有时间段的结束时间点";
                    timeline[timeline.length-1][1]=(timeline[timeline.length-1][1]+timeByCommand(command))>=24?24:(timeline[timeline.length-1][1]+timeByCommand(command));
                }
            }
        }
    };
    for(var i = 1;i<=count;i++){
        buildTimeLine(parseInt(input[i].split(" ")[0]),input[i].split(" ")[1]);
    }
    var calc=function(tml){
        var hotTime = 0;
        for(var j in tml){
            hotTime+=(tml[j][1]-tml[j][0]);
        }
        return hotTime*2+(24-hotTime);
    };
    console.log(calc(timeline));


}

main();


/**
 * Created by Administrator on 2016/10/17 0017.
 */