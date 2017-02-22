/**
 * Created by Administrator on 2016/10/15 0015.
 */
"あなたは、巻数が全 N 巻の古い本を集めています。" +
"古本屋に訪れたあなたは売られている各巻のうち買うべきなのは何巻かを知りたいです。" +
"あなたの持っている巻のリストと、中古本屋で売られている巻のリストを入力として与えられたとき、" +
"あなたの買うべき巻のリストを出力してください。";
"https://paiza.jp/poh/ando/challenge/c839e9c6/ando16";

var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var huji = {};

var mainprocess = function () {
    //输入完毕后的主要处理
    // console.log(huji);
    var buff = new Buffer(huji.N);
    
    

};
rl.countinput = 0;
rl.on("line",function (line) {
    switch (rl.countinput){
        case 0:
            huji.N = line-0;
            rl.countinput++;
            break;
        case 1:
            huji.M1 = line-0;
            rl.countinput++;
            break;
        case 2:
            huji.xs = line.split(" ");
            rl.countinput++;
            break;
        case 3:
            huji.M2 = line-0;
            rl.countinput++;
            break;
        case 4:
            huji.ys = line.split(" ");
            rl.countinput++;
            mainprocess();
            break;
    }

});





