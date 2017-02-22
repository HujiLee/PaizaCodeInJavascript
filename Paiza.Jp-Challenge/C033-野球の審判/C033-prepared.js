/**
 * Created by Administrator on 2016/10/16 0016.
 */
var ball = "ball";
var strike = "strike";

var input = [
    '5',
    strike,
    strike,
    strike,
    strike,
    strike,
];
function main() {
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

main();