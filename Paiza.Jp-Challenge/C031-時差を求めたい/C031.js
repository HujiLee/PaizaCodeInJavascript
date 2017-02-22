var input = [
    "6",//0
    "tokyo 9",
    "beijing 8",
    "singapore 7",
    "london 0",
    "newyork -5",
    "osaka 9",//6
    "singapore 19:38"//7
];
/*
var input = [
    "27",
    "howland -12",
    "samoa -11",
    "hawaii -10",
    "alaska -9",
    "california -8",
    "arizona -7",
    "texas -6",
    "massachusetts -5",
    "santiago -4",
    "brasilia -3",
    "greenland -2",
    "verde -1",
    "morocco 0",
    "london 1",
    "paris 2",
    "athens 3",
    "moscow 4",
    "islamabad 5",
    "astana 6",
    "bangkok 7",
    "hongkong 8",
    "seoul 9",
    "guam 10",
    "kuril 11",
    "southpole 12",
    "nukualofa 13",
    "tokelau 14",
    "southpole 00:00"
];
*/
function main() {
    Date.prototype.toHujiTimeString = function () {
        var hour = (this.getHours()<10)?("0"+this.getHours()):this.getHours();
        var minute = (this.getMinutes()<10)?("0"+this.getMinutes()):this.getMinutes();
        return hour+":"+minute;
    };
    var timezones = {};
    var timezoneNam = [];
    var count = input[0]-0;
    (function () {
        for(var i=1;i<=count;i++ ){
            timezoneNam.push(input[i].split(" ")[0]);
            timezones[input[i].split(" ")[0]]={};
            timezones[input[i].split(" ")[0]].zone = (function () {
                var zone = input[i].split(" ")[1]-0;
                return (zone+24)%24;
            })();
        }
    })();
    var offsetZone = timezones[input[count+1].split(" ")[0]].zone;
    var offsetDate =  new Date("1996-11-29 "+input[count+1].split(" ")[1]);
    timezones[input[count+1].split(" ")[0]].date =offsetDate;
    (function () {
        var zoneOff;
        for(var i in timezones){
            if(!timezones[i].date){
                timezones[i].date = new Date(offsetDate);
                zoneOff = timezones[i].zone-offsetZone;
                timezones[i].date.setHours(timezones[i].date.getHours()+24+zoneOff);


            }
        }
    })();
    (function () {
        for(var i in timezoneNam){
            console.log(
                timezones[timezoneNam[i]].date.toHujiTimeString()
            )
        }
    })();


}

main();


/**
 * Created by Administrator on 2016/10/19 0019.
 */