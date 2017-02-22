var input = [
    "111 10"
];
function main() {
    var plus = input[0].split(" ")[0]-0;
    var minus = input[0].split(" ")[1]-0;
    console.log((plus>minus)?(plus-minus):0);

}

main();


/**
 * Created by Administrator on 2016/10/17 0017.
 */