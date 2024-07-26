console. log('Hello world from HTML ')

let sum = (a, b) => {
    return a + b;
}
console.log('Check sum: 25 + 10 = ', sum(25, 10))


let obj = {
    name: 'Bi',
    address: 'Tra Vinh',
    age: '18',
    getName: function(){
        return this.name
    }
}
console.log('>>> Check getName: ', obj.getName())