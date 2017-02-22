/**
 * Created by Administrator on 2016/10/14 0014.
 */
var readline = require("readline");
var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("你叫啥?\n",function (answer) {
    console.log("Your name is "+answer);
    rl.close();
});

rl.on("close",function () {
    process.exit(0);
});

"";