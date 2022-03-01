// 1
// const task1 = (arr, arr1) => {
//     return arr.reduce((acc, rec, idx) => {
//         return [...acc, rec + arr1[idx]];
//     }, [])
// }
// console.log(task1([2, 4], [1, 3]));


// 2
// const task2 = (arr) => {
//     return arr.reduce((acc, rec) => [...acc, rec * 2], [])
// }
// console.log(task2([1, 2, 3, 4, 5, 6]));


// 3
// const task3 = arr => {
//     return arr.reduce((acc, rec, idx) => {
//         return [...acc, rec.id]
//     }, [])
// }
// console.log(task3([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]));


// 4
// const task4 = arr => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, `<div>${rec}</div>`]
//     }, [])
// }
// console.log(task4([1, 2]));


// 5
// const task5 = arr => {
//     return arr.reduce((acc, rec) => {
//         if (rec.length % 2 === 0) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }
// console.log(task5(['ab', 'abc', 'abcd']));


// 6
// const task6 = arr => {
//     return arr.reduce((acc, rec) => {
//         rec *= 2;
//         if (rec % 10 === 0) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }
// console.log(task6([1, 2, 3, 7, 10, 5]));


// 7
// const task7 = arr => {
//     return arr.reduce((acc, rec) => {
//         if (rec === true) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }
// console.log(task7([true, false, true, true]));


// 8
// const task8 = arr => {
//     return arr.reduce((acc, rec) => {
//         if (rec === true) {
//             return [...acc, rec]
//         } else if (rec === false) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }
// console.log(task8([true, false, true, true, undefined, true, undefined]));
// console.log(task8([undefined, true, undefined]));


// 9
// const task9 = arr => {
//     return arr.reduce((acc, rec) => {
//         return acc + rec
//     }, 0)
// }
// console.log(task9([1, 2, 3, 4, 5]));


// 10 ??
const task10 = arr => {
    return arr.reduce((acc, rec) => {
        return acc && rec;
    }, true)
}
console.log(task10([true, false, true, true]));

// 11
// const task11 = arr => {
//     return arr.reduce((acc, rec, idx) => {
//         return { ...acc, [`field${idx + 1}`]: rec }
//     }, {})
// }
// console.log(task11([true, 1, 'wow', 'you are smart, bro']));

// 12
// const task12 = obj => {
//     return Object.keys(obj).reduce((acc, rec) => {
//         if (typeof obj[rec] === 'string') {
//             return { ...acc, [rec]: obj[rec] }
//         }
//         return acc
//     }, {})
// }
// console.log(task12({ name: 'pilot', isActive: true, gender: 'Male' }));

// 13
// const task13 = obj => {
//     return Object.keys(obj).reduce((acc, rec) => {
//         if (obj[rec] === false) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// }
// console.log(task13({ isActive: false, isPilot: true, gender: false }));


// 14
// const task14 = arr => {
//     return arr.reduce((acc, rec) => {
//         return acc + rec / arr.length
//     }, 0)
// };
// console.log(task14([4, 6]));

// 15
// const task15 = (arr, def) => {
//     return arr.reduce((acc, rec) => {
//         return rec(acc)
//     }, def)
// }
// console.log(task15([(a) => a + 1, (a) => a * 2], 6));