// 1
// function getValue(value){
//     return `${value} typeof ${typeof value}`
// }
//
// console.log(getValue(1))

//  2
// function foo(value){
//     return parseInt(value) ** 2;
// }
//
// console.log(foo('2'))

// 3
// function returnString(str, str1, str2){
//     return `${str[0]}${str1[0]}${str2}`
// }
//
// console.log(returnString('ab','cb', 'bc'))

// 4
// function getName(name, surname){
//     return `${name[0]}. ${surname[0]}`
// }
//
// console.log(getName('Тилек', 'Аскаралиев'))

// 5
// function foo(name, city, region){
//     return `Привет, ${name}! Добро пожаловать в ${city}, ${region}`
// }
//
// console.log(foo(['Дмитрий', 'Серебров'], 'Ишим', 'Тюменская обл'));

// 6
// function foo(a){
//     if(a < 0){
//         return 'Negative'
//     } else if(a > 0){
//         return 'Positive'
//     } else if(a === 0){
//         return 'Zero'
//     }
// }
//
// console.log(foo(5))

// 7
// function foo(str){
//     if(str === str.toLowerCase()){
//         return str.toUpperCase();
//     }
//     return str.toLowerCase();
// }
//
// console.log(foo('HELLO WORLD'))

// 8
// function foo(obj){
//     return obj.id;
// }
//
// console.log(foo({id: true}))

// 9
// function foo(obj){
//     if(obj.name.length % 2 === 0){
//         return 0
//     }
//     return 1;
// }
//
// console.log(foo({name:'xxxxx'}))

// 10
// function foo(a, b){
//     if(a > b){
//         return 1
//     } else if(a < b){
//         return -1
//     }
//     return 0
// }
//
// console.log(foo(10, 10))

// 11
// function MasterYoda(num){
//     if(num % 3 === 0 && num % 5 === 0){
//         return 'MasterYoda'
//     } else if(num % 5 ===0){
//         return 'Yoda'
//     } else if(num % 3 === 0){
//         return 'Master'
//     }
//     return num;
// }
//
// console.log(MasterYoda(10));