var input = [
    "6",
    "0 200",
    "1 240",
    "0 120",
    "3 460",
    "1 240",
    "2 3200"
];
function main() {
    var cart={
        "0":{
            comt:"食品",
            rate:5,
            price:0
        },
        "1":{
            comt:"书籍",
            rate:3,
            price:0
        },
        "2":{
            comt:"衣服",
            rate:2,
            price:0
        },
        "3":{
            comt:"其他",
            rate:1,
            price:0
        }
    };
    var count = input[0]-0;
    (function () {
        for(var i=1;i<=count;i++){
            cart[input[i].split(" ")[0]].price+=parseInt(input[i].split(" ")[1]);
        }
    })();

    (function () {
        var result = 0;
        for(var i in cart){
            result+=Math.floor(cart[i].price/100)*cart[i].rate;
        }
        console.log(result);
    })();

}

main();


/**
 * Created by Administrator on 2016/10/19 0019.
 */