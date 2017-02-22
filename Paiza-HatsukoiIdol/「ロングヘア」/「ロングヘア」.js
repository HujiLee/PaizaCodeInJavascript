var input = [
    "7"
];

"N が 7 の倍数であれば \"lucky\" と、そうでないときは \"unlucky\" と出力してください。"+
"最後は改行し、余計な文字、空行を含んではいけません。";
function main() {
    console.log(
        ((input[0]-0)%7===0)?
            "lucky":
            "unlucky"
    );
}

main();


/**
 * Created by Administrator on 2016/10/18 0018.
 */