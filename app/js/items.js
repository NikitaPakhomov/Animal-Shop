import { filtering } from "./filter.js"
import { currentData, filteredData, getDataItem, setcurrentName } from './storage.js'
import { data } from './json.js';
import { cart } from './cart.js';

let itemsCont = document.querySelector('.cards');
let itemTemplate = itemsCont.querySelector('#template');
export let foundCount = document.querySelector('#filters__count');
toHTML(7, filteredData);



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
        cart.addToCart(
            getDataItem(e.target.parentNode.children[1].textContent));
    } else if (e.currentTarget.className == 'cards__item') {
        setcurrentName(e.currentTarget.children[1].textContent);
        toNextPage(e, e.currentTarget.children[1].textContent);
    }

}


function toNextPage(e, name) {
    window.location.href = `../components/about.html?name=${name}`;

}


itemsCont.addEventListener("click", (e) => addToArray(e));
let items = document.querySelectorAll('.cards__item');
items.forEach((item) => {
    item.addEventListener("click", (e) => addToArray(e));
})
