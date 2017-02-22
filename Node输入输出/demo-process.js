process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';

process.stdin.on('data', function(chunk) {
    input_string += chunk;
    console.log("data ="+input_string);
});

process.stdin.on('end', function() {
    var lines = input_string.split('\n');

    var N = lines[0];
    for(var i=0; i<N; i++) {
        var line = lines[i+1].replace(/(^\s+)|(\s+$)/g, "").split(",");
        console.log("hello = " + line[0] + ", world = " + line[1]);
    }
});