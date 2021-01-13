var readlineSync = require('readline-sync')
var number = readlineSync.question('enter any number')
var sum = 0
var result;
while (number > 0) {
    result = number % 10
    sum = sum + (result * result)
    number = parseInt(number / 10)
    console.log(number)
}

console.log(sum)

if(number == 0){
    console.log('It is happy number')
}else{
    console.log('It is not happy number')
}