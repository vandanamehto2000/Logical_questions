var readlineSync = require('readline-sync')
var number = readlineSync.question('enter any number')

let sum = 0
for(let index = 1; index < number; index++){
    if(number % index == 0){
        sum = sum + i
    }
}

if(sum == number){
    console.log('perfect number')
}else{
    console.log('not perfect numbrer')
}

