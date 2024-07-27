console.log('Hello world from HTML')

//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//filter, find
//let filter = arr.filter((item, index) => {
//    console.log('Item: ', item, 'Index: ', index)
//    return item && item >5;
//})
//console.log(filter)

let arrName = [
    {Name: 'ThKieu', age: 18},
    {Name: 'Bi', age: 17},
    {Name: 'Thinh', age: 19},
    {Name: 'Tu', age: 18},
    {Name: 'Hoang', age: 17}
]
let filter = arrName.filter((item, index) => {
    return item && item.age === 17;
})
console.log(filter)
