import { clearLocalStorage, getDataFromLocaleStorage, deleteItemFromLocalStorage } from './storage.js'

const deleteAllBtn = document.querySelector('.trash-btn');
const orderCont = document.querySelector('.cart__orders');
const cost = document.querySelectorAll('.cart__cost')[2];
const count = document.querySelector('.cart__count');
let deleteBtn = orderCont.querySelector('.trash-btn');
const closeBtn = document.querySelector('.close');
const minusBtn = document.querySelector('.btn-minus');
const plusBtn = document.querySelector('.btn-plus');



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
            for (let i = 1; i < localStorage.length; i++) {
                let item = getDataFromLocaleStorage(localStorage.key(i));
                orderCont.innerHTML += `<div class="cart__order" data-i="${i}">
        <div class="cart__left">
            <input type="checkbox" class="checkbox" id="cart__checkbox-${i + 1}" />
            <label for="cart__checkbox-${i + 1}"></label>
            <div class="cart__img-cont"><img src=".${item.img}" alt="dogge" class="cart__img">
            </div>
            <span class="cart__name">${item.name}</span>
            <div class="btns-minplus">
                <button class="btn-minus">-</button>
                <input class="counter" value="${item.count}">
                <button class="btn-plus">+</button>
            </div>
        </div>
        <div class="cart__right">
            <div class="cart__cost">${item.cost} ₽</div>
            <button class="trash-btn"><img class="trash-btn__img"  src="../img/svg/trashCan.svg" alt="">
        </div>
    </div>`;
                this.cost += Number(JSON.parse(JSON.parse(localStorage[localStorage.key(i)])).cost.replace(/\s/g, '')) * getDataFromLocaleStorage(localStorage.key(i)).count;
                cost.textContent = `${this.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}₽`;
                count.textContent = localStorage.length - 1;

            }
            for (let i = 0; i < localStorage.length - 1; i++) {
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
    toHome() {
        window.location.href = `../index.html`;
    }
    contolCount(e) {
        if (e.target.className == "btn-minus") {
            this.minusCount(e);

        }
        if (e.target.className == "btn-plus") {
            this.plusCount(e);
        }
    }

    minusCount(e) {
        console.log("-");
        let counter = getDataFromLocaleStorage(localStorage.key(e.path[3].dataset.i));
        console.log(counter);
        counter.count = +counter.count + 1;
        localStorage.setItem(localStorage.key(e.path[3].dataset.i), JSON.stringify(JSON.stringify(counter)));

    }
    plusCount(e) {
        console.log("+");
    }
}



export let bigCart = new BigCart(0, 0);
bigCart.toHTML();
console.log(orderCont);

window.addEventListener("storage", () => {
    bigCart.toHTML();
});
deleteAllBtn.addEventListener('click', () => {
    clearLocalStorage();
    bigCart.toHTML();
});

closeBtn.addEventListener('click', bigCart.toHome);


let orders = orderCont.querySelectorAll('.cart__order');
for (let i = 0; i < orders.length; i++) {
    orders[i].addEventListener('click', (e) => bigCart.contolCount(e));

}

