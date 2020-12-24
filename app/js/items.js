import { filtering } from "./filter.js"
import { currentData, filteredData, getDataItem, setcurrentName, sendHttpRequest } from './storage.js'
import { data } from './json.js';
import { smallCart } from './Smallcart.js';

let items;
let itemsCont = document.querySelector('.cards');
let itemTemplate = itemsCont.querySelector('#template');

export let foundCount = document.querySelector('#filters__count');

sendHttpRequest('GET', 'http://localhost:3000/api/dogs.json').then(responseData => {
    toHTML(7, filteredData);
    items = document.querySelectorAll('.cards__item');
    items.forEach((item) => {
        item.addEventListener("click", (e) => addToArray(e));
    })
});

export function clearBoard() {
    itemsCont.innerHTML = "";
}

export function toHTML(count, array) {
    for (let i = 0; i < count; i++) {
        // let elem = createElement(getInfo(array));
        let elem = createElement(array[i])
        itemsCont.appendChild(elem);
    }
}

export function createElement({ img, name, cost }) {
    let elem = document.createElement('div');
    elem.classList.add('cards__item');
    elem.append(itemTemplate.content.cloneNode(true));
    elem.querySelector('.cards__img').src = `${img}`;
    elem.querySelector('.cards__name').textContent = `${name}`;
    elem.querySelector('.cards__cost').textContent = `${cost}`;
    return elem;

}

export function getInfo(array) {
    let int = Math.floor(Math.random() * (data.length - 1));
    return array[int];
}

export function reshuffle() {
    filtering();
    clearBoard();
    toHTML(currentData.length, currentData);
}


function addToArray(e) {
    if (e.target.className == 'btn-in-cart') {
        e.stopPropagation()
        smallCart.addToCart(
            getDataItem(e.target.parentNode.children[1].textContent));
    } else if (e.currentTarget.className == 'cards__item') {
        console.log('1');
        setcurrentName(e.currentTarget.children[1].textContent);
        toNextPage(e, e.currentTarget.children[1].textContent);
    }
}


function toNextPage(e, name) {
    window.location.href = `../components/about.html?name=${name}`;

}




