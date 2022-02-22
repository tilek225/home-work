// 1
// const task1 = (arr) => {
//     return arr.map(item => item * 2)
// }
// console.log(task1([1, 2, 3]))

// 2
// const task2 = (arr) => {
//     return arr.filter((item, idx) => {
//         return idx % 2 === 0;
//     })
// }
// console.log(task2(['Привет', 'Пока', 'Снова привет']));

// 3
// const task3 = (arr) => {
//     return arr.map(item => item === 0 ? item : item * -1)
// }
// console.log(task3([1, 2, 3, 4, 5]))

// 4
// const task4 = (arr, num ) => {
//     return arr.filter(item => item < num)
// }
// console.log(task4([0, 1, 2, 3, 5, 8, 13], 4))

// 5
// const task5 = (arr) => {
//     return arr.filter((item, idx) => {
//         return item % idx === 0;
//     })
// }
// console.log(task5([22, -6, 32, 82, 9, 25]));

// 6
// const task6 = (arr) => {
//     return arr.map(item => typeof item === 'string' ? item = null : item)
// }
// console.log(task6([4, 6, 'Ivan', 5, 'Denis ']))

// 7
// const task7 = (arr) => {
//     return arr.filter(item => item.length <= 5)
// }
// console.log(task7(['Евдоким','Ivan', 'Игнат', 'Denis'] ))

// 8
// const task8 = arr => {
//     return arr.map(item => item ** 3).
//         map(item => {
//             if(item % 3 === 0 && item % 5 === 0){
//                 return 0
//             }
//             return item;
//     })
// }
// console.log(task8([7, 8, 15, 30, 2]))

// 9
// const task9 = arr => {
//     return arr.map(item => item.length)
// }
// console.log(task9(['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень'] ))

// 10
// const task10 = arr => {
//     return arr.map(item =>`<div> ${item} </div>`)
// }
// console.log(task10([1, 2, 3, 4, 5 ] ))

// 11
// const task11 = arr => {
//     return arr.filter(item => item.length % 2 === 0)
// }
// console.log(task11(['ab', 'abc', 'abcd']))