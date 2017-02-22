var input = [
    "1230"
];
function main() {
    console.log(
      parseInt((input[0]-0)/100+((input[0]-0>1000)?10:0))
    );
}

main();


/**
 * Created by Administrator on 2016/10/18 0018.
 */