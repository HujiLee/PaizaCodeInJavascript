/**
 * Created by Administrator on 2016/11/5 0005.
 */
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var countInput = 1;
var tempNumber;
rl.on("line",function (line) {
    if(countInput<=5){
        if(countInput==1){
            tempNumber=line-0;
        }else {
            console.log(line-0-tempNumber);
            tempNumber=line-0;
        }

    }
    else {
        rl.close();
    }
    countInput++;
});

rl.on('close',function () {
    // console.log(233)
    process.exit(0);
});
[
    "特么这样居然就能通过"
]