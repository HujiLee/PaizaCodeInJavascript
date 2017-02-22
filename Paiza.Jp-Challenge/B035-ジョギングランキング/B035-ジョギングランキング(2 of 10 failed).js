var input = /*[
    "6 7 4",
    "cathy 4",//1
    "eijiro 2",
    "alice 6",
    "dad 3",
    "betty 5",
    "franca 1",//6
    "2 eijiro 1",//7
    "3 alice 6",
    "4 alice 1",
    "4 franca 3",
    "5 cathy 7",
    "9 dad 2",
    "12 betty 4"//13
]*/[
    "3 4 3",
    "itiro 16",
    "jiro 26",
    "saburo 326",
    "1 itiro 16",
    "1 jiro 6",
    "2 jiro 26",
    "3 itiro 16"
];
function main() {
    var NMT = input[0].split(" ").map(function (x) {
        return x-0;
    });
    var lastMonth = (function () {
        var arr =[];
        var gen = function (iptarr) {
            return {
                name:iptarr[0],
                kilo:iptarr[1]-0
            }
        };
        for(var i=1;i<=NMT[0];i++){
            "第一次代码完全failed原因:一开始在这里写死了6而不是NMT[0]";
            arr.push(gen(input[i].split(" ")));
        }
        return arr;
    })();
    lastMonth.sort(function (a,b) {
        if(a.kilo<b.kilo){
            return 1;
        }else if(a.kilo>b.kilo){
            return -1;
        }else {
            if(a.name>b.name){
                return 1;
            }else {
                return -1;
            }
        }
    });//跑得多的在前面
    lastMonth = lastMonth.splice(0,NMT[2]);//截取前面T个
    lastMonth = (function () {
        var map = {};
        for(var i in lastMonth){
            map[lastMonth[i].name]=i-0;
        }
        return map;
    })();

    var thisMonth = (function () {
        var map ={};
        var gen = function (iptarr) {
            return {
                name:iptarr[1],
                kilo:iptarr[2]-0
            }
        };
        var tmp;
        for(var i = NMT[0]+1;i<=NMT[0]+NMT[1];i++){
            tmp = gen(input[i].split(" "));
            if(map[tmp.name]){
                map[tmp.name]+=tmp.kilo;
            }else {
                map[tmp.name]=tmp.kilo;
            }
        }

        for(var i in lastMonth){
            if(map[i]===undefined){
                map[i]=0
            }
        }
        return map;
    })();
    thisMonth = (function () {
        var arr = [];
        for(var i in thisMonth){
            arr.push({
                name:i,
                kilo:thisMonth[i]
            });
        }
        arr.sort(function (a,b) {
            if(a.kilo<b.kilo){
                return 1;
            }else if(a.kilo>b.kilo){
                return -1;
            }else {
                if(a.name>b.name){
                    return 1;
                }else {
                    return -1;
                }
            }
        });

        arr  = arr.splice(0,NMT[2]);
        return arr;
    })();

    for(var i=0;i<thisMonth.length;i++){
        console.log(
            thisMonth[i].name+" "+thisMonth[i].kilo +" "+ (function (obj) {
                if(lastMonth[obj.name]!=undefined){
                    if(i>lastMonth[obj.name]){
                        return "down"
                    }else if(i<lastMonth[obj.name]){
                        return "up"
                    }else {
                        return "same"
                    }

                }else {
                    //上次榜上无名
                    return "new"
                }
            })(thisMonth[i])
        );

    }

}

main();


/**
 * Created by Administrator on 2016/11/12 0012.
 */