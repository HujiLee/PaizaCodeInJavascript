var input = [
    "600 4 70"
];
function main() {
    var ipt = input[0].split(" ").map(function (e) {
        return e-0
    });
    var dict ={
        true:"OK",
        false:"NG"
    };
    console.log(dict[ipt[1]*ipt[2]>=ipt[0]]);

}

main();


/**
 * Created by Administrator on 2016/11/5 0005.
 */