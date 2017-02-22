var input =/* [
    "4",
    "apple aple",
    "orange olange",
    "grape glepe",
    "lemon lemon"
]*/[
    "12",
    "january januarry",
    "february febrary",
    "march march",
    "april aplil",
    "may may",
    "june june",
    "july jury",
    "august ougust",
    "september septenber",
    "october october",
    "november novembar",
    "december dicembar"
];
function main() {
    var count = input[0]-0;

    var diffrence = function (str1,str2) {
        "约定str1和str2已经是相同长度";
        var length = str1.length;
        var countDiff = 0;
        for(var i=0;i<length;i++){
            if(str1[i]!==str2[i]){
                countDiff++;
            }
        }
        return countDiff;

    };
    var grade = 0;
    for(var i=1;i<=count;i++){
        (function () {
            var arr = input[i].split(" ");
            if(arr[0].length!==arr[1].length){
                grade+=0;
            }else{
                switch (diffrence(arr[0],arr[1])){
                    case 0:grade+=2;
                        break;
                    case 1:grade+=1;
                        break;
                    default:grade+=0;
                        break;
                }
            }
        })();

    }
    console.log(grade);

}

main();


/**
 * Created by Administrator on 2016/11/3 0003.
 */