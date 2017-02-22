/**
 * Created by Administrator on 2016/10/14 0014.
 */
process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var line;
process.stdin.on('data', function (chunk) {
     line = chunk;

    console.log("Data="+line+"");
});

