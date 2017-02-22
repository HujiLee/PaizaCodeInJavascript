/**
 * Created by Administrator on 2016/11/8 0008.
 */
var Node = function (int,nextNode) {
    this.int = int;
    this.nextNode = nextNode||null;

}
var arr = [];
(function () {
    var node1 = new Node(5)
    arr.push(node1)
    var node2 = new Node(6,arr[0])
    arr.push(node2)
    var node3 = new Node(1,arr[1])
    arr.push(node3)
    var node4 = new Node(4,arr[2])
    arr.push(node4)

})();
console.log(arr)
arr.sort(function (a,b) {
    if(a.int>b.int){
        return 1
    }else {
        return -1
    }

});
console.log(arr)