// 1
// let a = 'tes';
// if(a === 'test'){
//     console.log(true)
// }else{
//     console.log(false)
// }
//

// 2
// let number;
// let date = false;
// number === date === !date ? number = 2: number = 3;
// console.log(number);

// 3
// let date = prompt('Когда вы собираетесь прийти ?');
// switch (date) {
//     case '23':
//     case '24':
//     case '0':
//     case '1':
//     case '2':
//     case '3':
//     case '4':
//     case '5':
//     case '6':
//     case '7':
//     case '8':
//         console.log('В это время мы не работаем');
//         break;
//     case '9':
//     case '10':
//     case '11':
//     case '12':
//         console.log('Будем рады Вас видеть');
//         break;
//     case '13':
//     case '14':
//     case '15':
//     case '16':
//     case '17':
//     case '18':
//     case '19':
//     case '20':
//     case '21':
//     case '22':
//         console.log('Тоже рады видеть');
//         break;
// }

// 4
// let m = 60;
// let n = 20;
// if(m > 50){
//     n = 'big'
// }else{
//     n = 'small'
// }
// console.log(n)
// m > 50 ? n = 'big' : n = 'small';
// console.log(n)

// 5
// let a = 2;
// if(a === 0 || a === 2){
//     a+=7;
// }else {
//     a/=10;
// }
// console.log(a);

// a === 2 || a === 0 ? a+=7 : a/=10;
// console.log(a)

// 6
// let age = confirm('Тебе есть 18 ?');
// if(age){
//     console.log('есть')
// }else{
//     console.log('no')
// }

// 7
// let a = 1;
// let b = 3;
// if(a <= 1 && b >= 3){
//     console.log(a + b)
// }else{
//     console.log(a - b)
// }
// 8
// let pasha = 17;
// if(pasha === 17){
//     console.log(`Паше ${pasha} лет, он ребенок`)
// }else if (pasha === 18){
//     console.log('18 y.o')
// }

// 9
// let seasons = 'август';
// switch (seasons) {
//     case 'декабрь':
//     case 'январь':
//     case 'февраль':
//         console.log('winter');
//         break;
//     case 'аперль':
//     case 'март':
//     case 'май':
//         console.log('весна');
//         break;
//     case 'июнь':
//     case 'июль':
//     case 'август':
//         console.log('лето');
//         break;
//     case 'сентябрь':
//     case 'октябрь':
//     case 'ноябрь':
//         console.log('autumn');
//         break;
// }

// 10
// let time = 35;
// if(time >= 0 && time <= 15){
//     console.log('время относится к четверти часа')
// } else if(time > 15 && time <= 30){
//     console.log('время относится к половине часа')
// } else if(time > 30 && time <= 45){
//     console.log('время относится к 3/4 часа')
// } else if(time > 45 && time <= 60){
//     console.log('время относится к целому часу')
// } else {
//     console.log('неизветсный диапозон')
// }












// let min = 48;
//
// if(min >= 0 && min <= 14){
//     console.log('В первую четверть')
// } else if(min >= 15 && min <= 30){
//     console.log('В вторую четверть')
// } else if(min >= 31 && min <= 45){
//     console.log('В третью четверть')
// } else if(min >= 46 && min <= 59){
//     console.log('В четвертую четверть')
// }

// let arr = ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'];
//
// if(arr.includes('xs' || 's' || 'm' || 'l')){
//     console.log('small')
// }else if(arr.includes('xl')){
//     console.log('middle')
// }else if(arr.includes('xxl' || 'xxxl')){
//     console.log('big')
// }

// let a = '2';
// let o = '3'
// console.log(+a + o)

// console.log(3 && 5 || 8 && 0) // 5