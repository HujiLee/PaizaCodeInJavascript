var input = [
    '100 500'
];
function main() {
    var numbers = [];
    numbers[0] = parseInt(input[0].split(" ")[0]);
    numbers[1] = parseInt(input[0].split(" ")[1]);
    for(var i in numbers){
        if(numbers[i]>5){
            numbers[i]=5
        }
    }
    console.log(numbers[0]+numbers[1]);

}

main();


/**
 * Created by Administrator on 2016/10/16 0016.
 */