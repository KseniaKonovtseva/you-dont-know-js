'use strict';

const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const body = document.querySelector('body');
const title = book[4].querySelector('a');
const adv = document.querySelector('.adv');
const secondBook = book[0].querySelectorAll('li');
const fifthBook = book[5].querySelectorAll('li');
const sixthBook = book[2].querySelectorAll('li');

books.prepend(book[1]);
book[2].before(book[4]);
book[5].after(book[2]);

body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

title.innerText = "Книга 3. this и Прототипы Объектов";

adv.remove();

secondBook[3].after(secondBook[6]);
secondBook[4].before(secondBook[8]);
secondBook[9].after(secondBook[2]);

fifthBook[1].after(fifthBook[9]);
fifthBook[4].after(fifthBook[2]);
fifthBook[8].before(fifthBook[5]);

sixthBook[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');