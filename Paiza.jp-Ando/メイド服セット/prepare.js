/**
 * Created by Administrator on 2016/10/15 0015.
 */
Date.prototype.toHujiTimeString = function () {
    var hour = (this.getHours()<10)?("0"+this.getHours()):this.getHours();
    var minute = (this.getMinutes()<10)?("0"+this.getMinutes()):this.getMinutes();
    return hour+":"+minute;
};

var day1 = new Date("1996-11-29");
var day2 = (new Date(day1));
day2.setHours(25);
"";