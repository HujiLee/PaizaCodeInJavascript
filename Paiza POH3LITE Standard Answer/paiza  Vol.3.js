/**
 * Created by Administrator on 2016/10/15 0015.
 */
"Paiza提供的实例代码";
"这个代码在WebStorm、Node上都无法运行的" +
"但是在Paiza自己的平台上就可以" +
"作为做题的 我只需要编写main函数" +
"input是一个数组,输入有多少行,input就有多少个元素" +
"本题中的示例输入如下";
/*
 250
 5
 35 3640
 33 2706
 98 9810
 57 5472
 95 7790
 */
"另外要注意输出的时候只能用console.log,不能用process.stdout的样子"
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
    M = Number(input[0]);
    N = Number(input[1]);
    q = [];
    r = [];
    min_cost = 0;

    for(i = 0; i < N; i++) {
        tmp = input[2+i].split(' ');
        q[i] = Number(tmp[0]);
        r[i] = Number(tmp[1]);
        min_cost += r[i];
    }

    dp = new Array();
    dp[0] = 0;
    for(i = 0; i < N; i++) {
        dp_tmp = dp.concat();
        for(key in dp) {
            total_q = Number(key) + q[i];
            total_r = dp[key] + r[i];
            if( (total_q in dp_tmp) == false) {
                dp_tmp[total_q] = total_r;
            } else {
                if(dp_tmp[total_q] > total_r) {
                    dp_tmp[total_q] = total_r;
                }
            }

            if(total_q >= M && min_cost > total_r) {
                min_cost = total_r
            }
        }
        dp = dp_tmp;
    }

    console.log(min_cost + "\n");
}