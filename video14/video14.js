console.log('Hello world form HTML')

let day = '';
let a = 0;
switch (a){
    case 0:
    case 1:
        day = 'Thứ hai'
        break;
    case 2:
        day = 'Thứ ba'
        break;
    case 3:
        day = 'Thứ tư'
        break;
    case 4:
        day = 'Thứ năm'
        break;
    case 5:
        day = 'Thứ sáu'
        break;
    case 6:
        day = 'Thứ bảy'
        break;
}
console.log('Check day: ', day, new Date().getDay())