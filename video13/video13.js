console.log('Hello world from HTML')

let arr = ['anh','em','hahahah', 'huhuh'];
let i = 0;
while(i < arr.length){
    if(arr[i].length === 2){
        console.log('Từ có 2 kí tự là: ',i + 1, arr[i])
    }else if(arr[i].length === 3){
        console.log('Từ có 3 kí tự là: ', i + 1, arr[i])
    }
    else{
        console.log('Không có từ có 2 kí tự')
    }
    i++;
}
