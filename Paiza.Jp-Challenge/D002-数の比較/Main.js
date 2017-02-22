/**
 * Created by Administrator on 2016/10/15 0015.
 */
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var main = function (a,b) {
    if(a!=b){
        console.log(Math.max(a,b));
    }
    else{
        console.log('eq');
    }
};
rl.on("line",function (line) {
    var arr = line.split(" ");
    main(parseInt(arr[0]),parseInt(arr[1]));
    rl.close();

});

rl.on('close',function () {
    process.exit(0);
});
