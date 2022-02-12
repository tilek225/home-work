// 1
// let name = 'Анастасия';
// console.log(name)
// name = 'Максим';
// console.log(name);

// 2
// let str = 'Я хочу быть большим и сильным';
// console.log(str.length);

// 3
// let a = '15';
// let b = 15;
// let c = 10;
// console.log(a + b + c); // конкатенация
// console.log(b + c + a); // сначала + потом конкатенация

// 4
// let str = 'Я хочу быть большим и сильным';
// console.log(str.length);

// 5
// let arr = [[1, 2, 3], [4, 5, 6], [7,8,9]];
// let arr2 = [...arr[0], ...arr[1], ...arr[2]]
// console.log(arr2)
// console.log(arr2[3])

// 6
// let obj = {
//     name: "Ivan",
//     age: 35,
//     gender: "male",
//     job: "web-developer"
// };
// for(let key in obj){
//     console.log(`Значением свойства ${key} является ${obj[key]}`);
// }

// 7
// let surname = "Серебров";
// let str = surname.split('');
// str.pop();
// str.push('фф')
// let str2 = str.join('')
// console.log(str2)

// 8
// let str = 'я люблю торт';
// str2 = str.split(' ');
// console.log(str2)
// if(str2[str2.length - 1] === 'торт'){
//     console.log(true);
// }else{
//     console.log(false);
// }

// 9
// let str = '10223040';
// str2 = str.split('');
// console.log(str2.reverse().join(''))

// 10
// let age = 14;
// console.log(`Мне ${age} лет`)

// 11
// let str = " asdasdsadsadsadsadc";
// str2 = str.trim().split('');
// console.log(str2)

// 12
// let arr = [2, 1, 3, 4, 5];
// let arr2 = arr.sort((a, b) => a - b );
// let arr3 = arr2.splice(2, 0, 'a', 'b', 'c');
// console.log(arr2);

// 13
// let str = 'Мой город самый лучший город в России!';
// let str2 = str.split(' ').indexOf('город', 1);
// console.log(str2);

// 14
// let arr = ['eloquent', 'country', 'person', 'place'];
// for(let item of arr){
//     console.log(item.substring(1, item.length -1));
// }

// 15
// let str = prompt('введтие 2 цифры');
// let str2 = str.split('');
// if(str[0] > str[1]){
//     console.log(+str[0] + +str[1])
// }else if(str[0] < str[1]){
//     console.log(str[0] * str[1])
// }else if(str[0] === str[1]){
//     console.log('числа одинаковые')
// }else{
//     console.log('больше двух чисел')
// }

// 16
// let arr = [12, '12', true, undefined, 'Ivan', 35];
// for(let item of arr){
//     console.log(`Массив содержит в себе элемент ${item}`)
// }
