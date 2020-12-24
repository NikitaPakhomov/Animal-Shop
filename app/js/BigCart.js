import { clearLocalStorage, getDataFromLocaleStorage, deleteItemFromLocalStorage } from './storage.js'

const deleteAllBtn = document.querySelector('.trash-btn');
const orderCont = document.querySelector('.cart__orders');
const cost = document.querySelectorAll('.cart__cost')[2];
const count = document.querySelector('.cart__count');
let deleteBtn = orderCont.querySelector('.trash-btn');

deleteAllBtn.addEventListener('click', () => {
    clearLocalStorage();
    bigCart.toHTML();
});



export class BigCart {
    constructor(count, cost) {
        this.count = count;
        this.cost = cost;
    }

    toHTML() {
        orderCont.innerHTML = '';
        cost.textContent = '0';
        count.textContent = 0;
        this.cost = 0;
        if (localStorage.key(0)) {
            for (let i = 0; i < localStorage.length; i++) {
                let item = getDataFromLocaleStorage(localStorage.key(i));
                orderCont.innerHTML += `<div class="cart__order" data-i="${i}">
        <div class="cart__left">
            <input type="checkbox" class="checkbox" id="cart__checkbox-2" />
            <label for="cart__checkbox-2"></label>
            <div class="cart__img-cont"><img src=".${item.img}" alt="dogge" class="cart__img">
            </div>
            <span class="cart__name">${item.name}</span>
            <div class="btns-minplus">
                <button class="btn-minus">-</button>
                <input class="counter" value="1">
                <button class="btn-plus">+</button>
            </div>
        </div>
        <div class="cart__right">
            <div class="cart__cost">${item.cost} ₽</div>
            <button class="trash-btn"><img class="trash-btn__img"  src="../img/svg/trashCan.svg" alt="">
        </div>
    </div>`;
                this.cost = this.cost + Number(item.cost.replace(/\s/g, ''))
                cost.textContent = `${this.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}₽`;
                count.textContent = localStorage.length;

            }
            for (let i = 0; i < localStorage.length; i++) {
                orderCont.children[i].addEventListener('click', (e) => {
                    if (e.target.className == 'trash-btn' || e.target.className == 'trash-btn__img') {
                        console.log(e.currentTarget.dataset.i);
                        bigCart.deleteItem(localStorage.key(e.currentTarget.dataset.i));
                        bigCart.toHTML();
                    }
                }, { once: true });
            }
        }
    }
    deleteItem(key) {
        console.log(key);
        deleteItemFromLocalStorage(key);
        bigCart.toHTML();
    }
}



export let bigCart = new BigCart(0, 0);
bigCart.toHTML();

window.addEventListener("storage", () => {
    bigCart.toHTML();
});

console.log(localStorage.key(0));

