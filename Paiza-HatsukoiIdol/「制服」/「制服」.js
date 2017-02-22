var input = [
    "K 6 J 5 3 2 A 4 5 10 K 4 J 3 10 6 9 9 3 7 Q K Q 4 10 2 5 J 4 Q 8 9 A 8 9 3 K 7 8 5 7 8 6 10 Q 6 A 2 J 7 A 2"
    // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14  15 16
];
function main() {
    var dict = {
        "3": 0,
        "4": 1,
        "5": 2,
        "6": 3,
        "7": 4,
        "8": 5,
        "9": 6,
        "10": 7,
        "J": 8,
        "Q": 9,
        "K": 10,
        "A": 11,
        "2": 12
    };//存放纸牌优先顺位的字典
    var bigger = function (cardValue1, cardValue2) {
        return dict[cardValue1] > dict[cardValue2];
    };
    var UserList = function (arr) {
        "本来list应该是不准暴露的,为了调试方便";
        var list = arr;//arr = ["A","2",...]
        this.lst = list;
        this.lth = list.length;//固定值,其实就是52,不会随着list的减小而改变
        (function () {
            //处理list,从字符串转变成一个对象
            for (var i in list) {
                list[i] = {
                    v: list[i],//以单个字符形式保存即可
                    idx: parseInt(i),
                    order: null
                };
            }
        })();
        this.in = function (idx) {//测试无误
            return list[idx];
        };
        this.del = function (idx) {//测试无误
            return list.splice(idx, 1)[0];//删除并且返回了被删除的元素
        };
        this.nextAvailableIdx = function (thisIdx) {//测试无误
            //其实只需要往后面找,前面不可能有更大的了,否则也轮不到thisidx出场
            //找不到,返回null,说明thisIdx已经是这一轮最大的(当然后面也可能出现同样大小的,但同样大小不能击败thisIdx)
            if (thisIdx === list.length - 1) {
                return null;
            }
            else {
                for (var i = thisIdx + 1; i < list.length; i++) {
                    if (bigger(list[i].v, list[thisIdx].v)) {
                        return i;
                    }
                }
                return null;
            }
        };
        this.reArrange = function (idx) {
            //测试无误
            "比如[4,1,3,5,2,!2,7],会需要删掉4、5、2,留下的[1,3,5,!2,7]重新排列成[!2,7,1,3,5]" +
            "这个参数idx就是!2此时在数组内的顺序index(但注意不是!2对象内保存过的那个原始idx)";
            // var part1 = list.slice(0,idx);
            // var part2 = list.slice(idx);
            "slice函数不会对原list的内容进行修改";
            // list = part2.concat(part1);
            list = list.slice(idx).concat(list.slice(0, idx));
        };
        this.empty = function () {
            //测试无误
            return list.length === 0;
        }

    };
    var userlist = new UserList(input[0].split(" "));
    //var resultList = new Array(userlist.lth);//最后玩家要从stack中弹出到resultList里面
    //后来发现并不需要这个resultList,可以直接在playOrderStack里面用sort(function)来操作嘛
    var playerOrderStack = [];//作为一个栈来存放游戏进行中退场的玩家,方便获取最后的顺位
    var PlayTable = function () {
        var stk = [];
        this.push = function (obj) {
            stk.push(obj);
        };
        this.top = function () {
            //获取栈上最后一个
            return stk[stk.length - 1];
        };
        this.clear = function (playerstk) {
            //清空本栈,将退场的玩家push到playerstk里面去
            while (stk.length !== 0) {
                playerstk.push(stk.shift());
            }
        };
        this.nowLength = function () {
            return stk.length;
        };

    };
    var playtable = new PlayTable();

    "开始运行游戏";
    {
        while (!userlist.empty()) {
            (function () {
                var initIdx = 0;
                "将userlist里的元素放到playtable上";
                var tempStack = [];//用来装initIdx
                playtable.push(userlist.in(initIdx));
                tempStack.push(initIdx);
                while (userlist.nextAvailableIdx(initIdx) !== null) {
                    initIdx = userlist.nextAvailableIdx(initIdx);
                    playtable.push(userlist.in(initIdx));
                    tempStack.push(initIdx);
                }
                "没有下一个可以盖上去的了" +
                "将userlist里面前面已经出牌的用户退场" +
                "然后正确地reArrange userlist(注意函数的参数,去掉了前面几个用户以后idx要事先减去前面出场的人数)";
                (function () {
                    /*
                     for(var i in playtable){
                     userlist.del(playtable[i].idx);//不对 这里有问题 因为经过几次reArrage后找不到正确的了
                     //而且playtable不是数组
                     //而且删的时候要从后面的删起才能对得上
                     }*/
                    while (tempStack.length!==0){
                        userlist.del(tempStack.pop());
                    }
                })();
                userlist.reArrange(initIdx + 1 - playtable.nowLength());
                "清空playtable到playerOrderStack";
                playtable.clear(playerOrderStack);
            })();
        }
        "给playOrderStack里的元素排序";
        (function () {
            for(var i in playerOrderStack){
                playerOrderStack[i].order = i-0+1;
            }
        })();
        "重新排序,按照元素的idx";
        playerOrderStack.sort(function (a,b) {
            if(a.idx>b.idx){
                return 1
            }else if(a.idx<b.idx){
                return -1
            }
            else {
                return 0;
            }
        })

    }
    "输出结果!";
    (function () {
        for(var i in playerOrderStack){
            console.log(playerOrderStack[i].order);
        }
    })();


    "TEST";
    // userlist.del(2);


}

main();


/**
 * Created by Administrator on 2016/10/17 0017.
 */