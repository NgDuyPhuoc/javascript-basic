console.log('Hello world from HTML')

//let sum = (a, b) => {
//   return a + b;
//}
//console.log('Check Sum 25 + 10 = ', sum(25,10))

let sum = (a, b, callback) => {
    let tong = a + b;
    //setTimeout(() => {
    //    callback(tong);
    //}, 5000)

    let i = 0
    let timer = setInterval(() => {
        callback(tong);
        i++;
        if (i === 5){
            clearInterval(timer)
        }
    }, 1000)
    console.log('>>> i = ', i )
}

let printSum = (message) => {
    console.log('Check sum 25 + 10 = ', message)
}

sum(25, 10, printSum)