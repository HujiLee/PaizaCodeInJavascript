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
    var ball = "ball";
    var strike = "strike";
    var loop = parseInt(input[0]);
    var balls = 0;
    var strikes = 0;

    for(var i = 1;i<=loop;i++)
    {
        if(input[i]==ball){
            balls++;
            if(balls>=4){
                console.log("fourball!");
                break;
            }
            else {
                console.log("ball!");
            }
        }else if(input[i]==strike){
            strikes++;
            if(strikes>=3){
                console.log("out!");
                break;
            }
            else{
                console.log("strike!");
            }
        }
    }
}