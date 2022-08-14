const headingTag = document.getElementById('heading-menu');
headingTag.innerText = 'This is Heading Tag'
// console.log(headingTag.innerText);
// for (const headingMenu of headingMenu) {
//     console.log(headingMenu);
// }

// const listItem = document.getElementById('list-item');
// // console.log(listItem);

// for (const itemList of listItem) {
//     console.log(itemList.innerText);
// }

const listItem = document.getElementsByTagName('li');
// console.log(listItem);
for (let li of listItem) {
    // console.log(li.innerText);
}

const lists = document.getElementsByClassName('list');
// console.log(lists);
for (const list of lists) {
    console.log(list.innerText);
}

const hello = document.querySelectorAll('.hello');
// console.log(hello);

for (const ite of hello) {
    console.log(ite.innerText);
}