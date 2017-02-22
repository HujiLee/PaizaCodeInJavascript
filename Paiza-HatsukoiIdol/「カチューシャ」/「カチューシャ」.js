/*var input = [
    "100 110",
    "20 200"
];*/

var input = [
    "980 200",
    "200 1000"
]
function main() {
    var n = input[0].split(" ")[0]-0;//ファンの人数 n 人
    var p = input[0].split(" ")[1]-0;//色紙1枚の費用 p 円
    var m = input[1].split(" ")[0]-0;//ペン1本でサインの書ける色紙枚数 m　枚
    var q = input[1].split(" ")[1]-0;//ペン1本の費用 q 円
    var howmanypen = Math.ceil(n/m);//注意可能出现不能整除的情况,要向上抛
    console.log(
        n*p+howmanypen*q
    )

}

main();


/**
 * Created by Administrator on 2016/10/18 0018.
 */