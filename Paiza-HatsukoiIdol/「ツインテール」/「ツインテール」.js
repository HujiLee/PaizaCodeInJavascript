var input = [
    "10",
    "3"
];
function main() {
    var str = "";
    for(var i=1;i<=input[0]-0;i++){
        if(i===input[1]-0){
            str = str+"+"
        }
        else {
            str = str+"-";
        }
    }
    console.log(str);

}

main();


/**
 * Created by Administrator on 2016/10/18 0018.
 */