var readlineSync = require('readline-sync')
var number = readlineSync.question('enter any number')
var result = 0
for(let index = 1; index <= number; index++){
    if(number % index == 0){
        result = result + 1
    }
}

if(result == 2){
    console.log('It is prime number')
}else{
    console.log('It is not prime number')
}
