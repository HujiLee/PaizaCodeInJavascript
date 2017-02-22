/*var input = [
    "50",
    "9",
    "543",
    "318",
    "265",
    "422",
    "468",
    "573",
    "141",
    "443",
    "421"
];*/

var input=[
    "60",
    "8",
    "449",
    "163",
    "517",
    "312",
    "170",
    "355",
    "161",
    "238"
]
function main() {
    var maxSec = (input[0]-0)*60;
    var howmanySongs = input[1]-0;
    console.log((function () {
        var temp = 0;
        for(var i =1;i<=howmanySongs;i++){
            temp+=(input[1+i]-0);
            if(temp>=maxSec){
                return (i-1);
            }
        }
        return "OK";
    })());

}

main();


/**
 * Created by Administrator on 2016/10/18 0018.
 */