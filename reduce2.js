//1 
// const task1 = (arr, arr1) => {
//     return arr.reduce((acc, rec, idx) => {
//         if (rec === arr1[idx]) {
//             return [...acc, rec]
//         }
//         return acc;
//     }, [])
// }
// console.log(task1([1, 2, 3, 4, 5], [1, 12, 3, 8, 5]));

//2
// const task2 = arr => {
//     return arr.reduce((acc, rec, idx) => {
//         return { ...acc, [rec.token]: rec }
//     }, {})
// }

// console.log(task2([{ token: '1' }, { token: '2', value: 23 }, { token: '3', name: 'superman' }, { token: '4' }]));

// 3
// const task3 = arr => {
//     return arr.reduce((acc, rec) => {
//         if (acc[rec]) {
//             return { ...acc, [rec]: acc[rec] + 1 }
//         }
//         return { ...acc, [rec]: 1 }
//     }, {})
// }
// console.log(task3(['a', 'b', 'a']));

//4
// const task4 = arr => {
//     return arr.flat();
// }
// console.log(task4([['ab', 'abc'], ['abcd']]));

// 5
// const task5 = obj => {
//     return Object.entries(obj);
// }
// console.log(task5({ a: 1, b: 2 }));

// 6
// const task6 = arr => {
//     return arr.filter((item, idx) => {
//         return arr.indexOf(item) === idx
//     })
// }
// console.log(task6([true, false, true, true]));

// 7
// const task7 = (key, val, arr) => {
//     return arr.reduce((acc, rec, idx) => {
//         if (rec[key].includes(val)) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }
// console.log(task7('title', 'hello', [{ title: 'hello world', rating: 1 }, { title: 'not a helloo', rating: 5 }, { title: 'new World', rating: 0 }]));

// 8
// const task8 = str => {
//     str = str.split('/').filter((item) => item.length > 0);
//     return str.reduce((acc, rec, idx) => {
//         return [...acc, {
//             id: idx,
//             token: rec,
//         }]
//     }, [])
// }
// console.log(task8('http://google.com/hello/world'));

// 9
// const task9 = str => {
//     return str.split(',').map(item => {
//         return `${item}(${item.length})`
//     }).join(',')
// }
// console.log(task9('hello,world,abra,carabfa,re,wrewer,rwer'));

// 10??

// 11
const task11 = (str, num) => {
    return str.split()
}

