// task1
// const returnText = () => {
//     let li = document.querySelector('li');
//     return li.textContent
// }
// console.log(returnText());

// task2
// const returnArr = () => {
//     let list = document.querySelectorAll('li');
//     return Array.from(list).map(el => {
//         return el.textContent;
//     })
// }
// console.log(returnArr());

// task3
// const task3 = () => {
//     let listItem = document.querySelectorAll('.list-item');
//     return Array.from(listItem).map(el => el.textContent);
// }
// console.log(task3());

// task4
// const task4 = () => {
//     let listItem = document.querySelectorAll('.list-item');
//     return Array.from(listItem).map(el => el.className)
// }
// console.log(task4());

// task5
// const task5 = () => {
//     let listItem = document.querySelectorAll('.list-item');
//     return Array.from(listItem).map(el => el.getAttribute('data-test-id'))
// }
// console.log(task5());

// task6
// const task6 = () => {
//     let listItem = document.querySelectorAll('.list-item')
//     return Array.from(listItem).filter(item => {
//         return !item.className.includes(item.textContent);
//     }).map(item => item.dataset.testId)
// }
// console.log(task6());

// task7
// const task7 = () => {
//     let list = document.querySelectorAll('.list-item');
//     return Array.from(list).forEach(item => {
//         item.textContent = `${item.dataset.testId} ${item.textContent}`
//     })
// }
// console.log(task7());

// task8
// const task8 = () => {
//     let list = document.querySelectorAll('.list-item');
//     return Array.from(list).forEach(item => {
//         if (!item.className.includes(item.textContent)) {
//             item.remove();
//         } else {
//             item.textContent = 'e'
//         }
//     });
// }
// console.log(task8());

// task9
// let login = document.querySelector('#secret-login');
// login.value = 'you were hacked'

// task10
// let btn = document.querySelector('#button-send');
// let login = document.querySelector('#secret-login');
// btn.addEventListener('click', event => {
//     login.value = 'you were hacked'
// })

// task11
// const task11 = () => {
//     let appendDiv = document.querySelector('#append-div');
//     let div = document.createElement('div');
//     div.setAttribute('id', 'just-text');
//     div.textContent = 'Hello';
//     appendDiv.append(div)
// }
// task11();

// task12
// const task12 = () => {
//     let ul = document.createElement('ul');
//     let appendDiv = document.querySelector('#append-div').append(ul);
//     ul.setAttribute('id', 'list');
//     for (let i = 0; i <= 10; i++) {
//         let li = document.createElement('li');
//         ul.append(li)
//         li.textContent = `Child ${i}`
//     }
// }
// task12();