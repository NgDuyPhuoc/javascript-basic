console.log('Hello world from HTML')

let arr1 = [1, 100000, 5500, 9000, 32000];
let arr = [];
arr1.sort((item1, item2) => {
    if(item1 > item2) arr.push(item1)
    console.log(arr1)
    return item1 - item2
}
)
console.log(arr1)