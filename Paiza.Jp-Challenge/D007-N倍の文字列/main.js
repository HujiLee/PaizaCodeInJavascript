/**
 * Created by Administrator on 2016/10/16 0016.
 */
var input = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function(){
    input = input.split('\n');
    main();
});
function main() {
    //从input里面取得解题需要的参数
    var count = parseInt(input[0]);
    var str = '';
    for(var i = 0;i<count;i++)
    {
        str+="*"
    }
    console.log(str);
}