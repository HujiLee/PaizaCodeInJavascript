var input = [
    '72 2 90 84 57 85',
    '3',
    '36 70 1 72 54 82',
    '36 2 40 12 3 58',
    '25 11 90 57 85 99',
];
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

main();