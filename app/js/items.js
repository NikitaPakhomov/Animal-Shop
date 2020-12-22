import { filtering } from "./filter.js"
import { currentData, filteredData, getDataItem } from './storage.js'

import { cart, Cart } from './cart.js';

let itemsCont = document.querySelector('.cards');
let itemTemplate = itemsCont.querySelector('#template');
export let foundCount = document.querySelector('#filters__count');

let btnInCart = document.querySelector('.btn-in-cart');
let cartItem = document.querySelector('.cards__item');

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
    if (e.target.className == 'btn-in-cart')
        cart.addToCart(
            getDataItem(e.target.parentNode.children[1].textContent));
}

itemsCont.addEventListener("click", (e) => addToArray(e))

toHTML(7, filteredData);

