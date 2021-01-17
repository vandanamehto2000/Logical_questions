var readlineSync = require('readline-sync')
var number = readlineSync.question('enter any number')

var res = number
var rem;
while (sum != 1 && sum != 4) {
    var sum = 0
    while (number > 0) {
        rem = number % 10
        sum = sum + (rem*rem)
        number = parseInt(number/10)
        
    }
    number = sum
    
}
if(sum == 1){
    console.log(res + ' is happy number')
}else{
    console.log(res + ' is not unhappy number')
}
