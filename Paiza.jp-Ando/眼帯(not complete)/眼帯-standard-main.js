/**
 * Created by Administrator on 2016/10/16 0016.
 */
// var input = [8,5,"1 3 4 5 6",3,"1 5 6"];
var input = [5,3,"1 3 4",3,"2 3 5"];
/*
 8
 5
 1 3 4 5 6
 3
 1 5 6

 */
/*
 5
 3
 1 3 4
 3
 2 3 5
 */
var main = function () {
    var N = parseInt(input[0]);
    var arr = new Array(N);
    (function () {
        for(var i =0;i<arr.length;i++){
            arr[i] = {
                ihave:false,
                canbebought:false
            };
        }
    })();
    var xs = input[2].split(" ");
    (function () {
        for(var i in xs){
            arr[xs[i]-1].ihave = true;
        }
    })();
    var ys = input[4].split(" ");
    (function () {
        for(var i in ys){
            arr[ys[i]-1].canbebought = true;
        }
    })();
    var result = "";
    // for(var i in ys){
    //     if(!xs.includes(ys[i])){
    //         result = result.concat(ys[i]);
    //         if(i<ys.length-1){
    //             result = result.concat(" ");
    //         }
    //     }
    // }
    (function () {
        for(var i in arr){
            if(arr[i].ihave===false){
                if(arr[i].canbebought ===true){
                    result = result+(i-0+1)+" ";
                }
            }
        }
        result+="huji";
    })();
    if(result.length==="huji".length){
        console.log("None");
    }
    else{
        result = result.replace("huji","").trim();
        console.log(
            // "result = "+
            result
            // +"}"
        );
    }

    "";
};

main();

