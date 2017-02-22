/**
 * Created by Administrator on 2016/10/15 0015.
 */
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on("line",function (line) {
    console.log(line);
    "line’事件，这个事件就是在用户输完一行，按下回车后就会触发的事件，它会将用户输入的数据通过回调函数传回来，可在此方法里处理用户输入的数据";
    if(line=='close'){
        rl.close();
    }
});

rl.on('close',function () {
    process.exit(0);
});


"";