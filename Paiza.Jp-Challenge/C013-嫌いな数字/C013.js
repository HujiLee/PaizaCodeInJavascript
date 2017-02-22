var input = /*[
 "4",//讨厌的数字
 "5",//房间的个数
 "101",
 "204",
 "301",
 "401",
 "501"
 ];*/
    [
        "9",
        "3",
        "409",
        "509",
        "109"
    ];
function main() {
    var manyRooms = input[1] - 0;
    var goodRooms = [];
    for (var i = 1; i <= manyRooms; i++) {
        if (input[i + 1].indexOf(input[0]) < 0) {
            goodRooms.push(input[i + 1]);

        }
    }
    if (goodRooms.length > 0) {
        console.log(goodRooms.join("\n"));
    }
    else {
        console.log("none");
    }


}

main();


/**
 * Created by Administrator on 2016/10/30 0030.
 */