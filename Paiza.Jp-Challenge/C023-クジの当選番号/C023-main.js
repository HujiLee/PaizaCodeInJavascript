var input = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
    input += chunk;
});
process.stdin.on('end', function () {
    input = input.split('\n');
    main();
});
function main() {
    var winNumber = {};
    (function () {
        var win = input[0].split(" ");
        for(var i in win){
            winNumber[win[i]]=true;
        }
    })();
    var howmanypeople = parseInt(input[1]);
    var peoplesNumbers = new Array(howmanypeople);
    //[["1",'2','3'],[...],[...]]
    (function () {
        for(var i=1;i<=howmanypeople;i++)
        {
            peoplesNumbers[i-1] = input[1+i].split(" ");
        }
    })();
    (function () {
        for(var i in peoplesNumbers){
            var count=0;
            for(var j in peoplesNumbers[i]){
                if(winNumber[peoplesNumbers[i][j]]==true)
                {
                    count++;
                }
            }
            console.log(count);
        }
    })();


}

/**
 * Created by Administrator on 2016/10/16 0016.
 */