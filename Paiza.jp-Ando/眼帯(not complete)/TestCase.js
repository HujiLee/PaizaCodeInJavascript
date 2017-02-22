/**
 * Created by Administrator on 2016/10/15 0015.
 */
var testCaseGenerator = function (n) {
    var N = (n<=10000)?n:10000;
    N = (N>=1)?N:1;
    console.log(N);
    var M1 = parseInt(Math.random()*N)+1;
    console.log(M1);
    (function () {
        var count = 0;
        var ramnum;
        var set = new Set();
        do{
            ramnum = parseInt(Math.random()*N)+1;
            if(!set[ramnum]){
                set[ramnum] = true;
                count++;
            }

        }while (count<M1);
        var arr = [];
        for(var i in set){
            arr.push(parseInt(i));
        }
        arr.sort(function(a,b){
            if (a>b) {
                return 1;
            }else if(a<b){
                return -1
            }else{
                return 0;
            }
        });
        console.log(arr.join(" "));

    })();
    var M2 = parseInt(Math.random()*N)+1;
    console.log(M2);
    (function () {
        var count = 0;
        var ramnum;
        var set = new Set();
        do{
            ramnum = parseInt(Math.random()*N)+1;
            if(!set[ramnum]){
                set[ramnum] = true;
                count++;
            }

        }while (count<M2);
        var arr = [];
        for(var i in set){
            arr.push(parseInt(i));
        }
        arr.sort(function(a,b){
            if (a>b) {
                return 1;
            }else if(a<b){
                return -1
            }else{
                return 0;
            }
        });
        console.log(arr.join(" "));
    })();

};

testCaseGenerator(1000);
"";