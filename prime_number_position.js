var readlineSync = require('readline-sync')
var number = readlineSync.question('enter any number')
var i = 1
var a = 0
var b = 0
while(a < number){
    var j = 1
    var result = 0
    while(j < i+1){
        if(i % j == 0){
            result = result+1;
        }
        j = j+1;
    }
    if(result == 2){
       var b = i
        // console.log(i)
        // from this we will get whole prime no. according to therir input.
        a = a+1;
    }
    i = i+1;
}
console.log(b)