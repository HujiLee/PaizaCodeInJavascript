var input = [
    "aAaAaAa"
];
function main() {
    var count = 0;
    for(var i in input[0]){
        if(input[0][i]==="A"){
            count++;
        }
    }

    console.log(count);
}

main();


/**
 * Created by Administrator on 2016/10/19 0019.
 */