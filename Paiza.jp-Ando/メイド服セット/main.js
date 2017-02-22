/**
 * Created by Administrator on 2016/10/15 0015.
 */
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputflag = 101;
var overwork = [];
Date.prototype.toHujiTimeString = function () {
    var hour = (this.getHours()<10)?("0"+this.getHours()):this.getHours();
    var minute = (this.getMinutes()<10)?("0"+this.getMinutes()):this.getMinutes();
    return hour+":"+minute;
};
var main = function () {
    var day = new Date();
    for(var i = 0;i<overwork.length;i++){
        day.setHours(7);
        day.setMinutes(-6*60-overwork[i]/3);
        console.log(day.toHujiTimeString());
    }
};
rl.on("line",function (line) {
    if(inputflag >100){
        inputflag = parseInt(line);//输入N
    }
    else if(inputflag>1){
        overwork.push(parseInt(line));
        inputflag--;
    }
    else if(inputflag==1){
        overwork.push(parseInt(line));//最后一个数据输入!
        main();
        rl.close();
    }

});

rl.on('close',function () {
    process.exit(0);
});
