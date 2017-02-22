var input = [
    "4",//0
    "192.400.1.10.1000...",//1
    "4.3.2.1",//2
    "0..33.444...",//3
    "1.2.3.4"//4
];
function main() {
    Array.prototype.GoodIPV4 = function () {
        return this.every(function (element,index,array) {
            var v= parseInt(element);
            return v>=0&&v<=255&&array.length==4;
        });
    };
    var count = input[0]-0;
    for(var i=1;i<=count;i++){
        console.log(
            input[i].split(".").GoodIPV4()?
                "True":
                "False"
        );
    };

    


}

main();


/**
 * Created by Administrator on 2016/10/19 0019.
 */