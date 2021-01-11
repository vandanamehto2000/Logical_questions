var readlineSync = require('readline-sync')
var number = readlineSync.question('enter any number')


let sum = 0
for(let index = 0; index < number.length; index++){
    let num = parseInt(number[index])
    let counter = num  * num  * num 
    sum = sum + counter
}

if(sum == number){
    console.log('Armstrong number')
}else{
    console.log('not Armstrong number')
}