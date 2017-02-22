var input = [
    "ALANTURING"
];
function main() {
    var dict = {
        "A":"4",
        "E":"3",
        "G":"6",
        "I":"1",
        "O":"0",
        "S":"5",
        "Z":"2"
    }
    var arr = input[0].split("");
    arr.forEach(function (ele,idx,arr) {
        arr[idx] = (dict[arr[idx]])?dict[arr[idx]]:arr[idx];
    });
    console.log(arr.join(""));

}

main();


/**
 * Created by Administrator on 2016/10/19 0019.
 */