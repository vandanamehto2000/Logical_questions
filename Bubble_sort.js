// var arr = [ 2, 1, 0, 4, 19, 7 ];
// var id;
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length- i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             id = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = id;
//             // arr[j], arr[j+1] = arr[j+1], arr[j]
//         }
//     }
// }

// console.log(arr)

var readlineSync = require('readline-sync')
var number = readlineSync.question('how many elements you want')
var arr = []
for(var k = 0; k < number; k++){
    var num = readlineSync.question('enter elements')
    console.log(num)
    arr.push(num)
}

var id;
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length- i; j++) {
        if (arr[j] > arr[j + 1]) {
            id = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = id;
        }
    }
}
console.log(arr)





