console.log('Hello world from HTML')

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(let i = 0; i < arr.length; i++){
//     arr[i]= arr[i] * arr[i]
// }
// console.log('Check value i: ', arr)
let mapArr = arr.map((item, index) => {
    return(
        `<td>${item} - ${index}</td>`
    )
})
console.log('Check value arr: ', arr)
console.log('Check value mapArr; ', mapArr)
