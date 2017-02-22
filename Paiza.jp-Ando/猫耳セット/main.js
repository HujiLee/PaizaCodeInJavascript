/**
 * Created by Administrator on 2016/10/15 0015.
 */
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on("line", function (line) {
    var str = line;
    var count = 0;
    var match = "cat";
    while (str.indexOf(match) >= 0) {
        count++;
        str = str.replace(match, "");
    }
    console.log(count);
    rl.close();

});

rl.on('close', function () {
    process.exit(0);
});
