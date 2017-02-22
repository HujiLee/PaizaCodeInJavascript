/**
 * Created by Administrator on 2016/10/15 0015.
 */
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arr ;
var main = function () {
    var count = 0;
    for(var i in arr){
        if(arr[i]=="W"){
            count++;
        }
    }
    if(count>=5){
        console.log("OK");
    }
    else {
        console.log("NG");
    }
};
rl.on("line",function (line) {

    arr  = line.split(" ");
    main();
    rl.close();
});

rl.on('close',function () {
    process.exit(0);
});


"";