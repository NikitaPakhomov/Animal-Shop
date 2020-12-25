import { addItemToLocalStorage, sendHttpRequest, getDataFromLocaleStorage } from './storage.js'
export const cartBtnInHeader = document.querySelector('.header__ul').children[3].children[0];


cartBtnInHeader.addEventListener('click', () => {
    window.location.href = `../components/cart.html`;
    htmlСhangeSmallCart();
})




export class SmallCart {
    constructor() {
        this.cost = 0;
        this.count = +localStorage.getItem("0");
    }
    cartArray = [];
    calculating() {
        this.count = 0;
        this.cost = 0;
        for (let i = 1; i < localStorage.length; i++) {
            this.count += +getDataFromLocaleStorage(localStorage.key(i)).count;
        }
        if (this.count > 0) {
            for (let i = 1; i < localStorage.length; i++) {
                if (localStorage[localStorage.key(i)]) {
                    this.cost += Number(JSON.parse(JSON.parse(localStorage[localStorage.key(i)])).cost.replace(/\s/g, '')) * getDataFromLocaleStorage(localStorage.key(i)).count;
                }
            }
        }
    }

    htmlСhangeSmallCart() {
        cartBtnInHeader.children[1].textContent = `Корзина (${this.count})`;
        cartBtnInHeader.children[2].textContent = `${this.cost} руб.`;
    }
    addToLocalStorage(elem) {
        addItemToLocalStorage(JSON.stringify(elem), +localStorage.getItem("0") + 1);

    }

    addToCart(elem) {
        this.cartArray.push(elem);
        this.count++;
        this.addToLocalStorage(elem);
        this.calculating();
        this.htmlСhangeSmallCart();

    }


    deleteFromCart() {

    }
}
export let smallCart;

sendHttpRequest('GET', 'http://localhost:3000/api/dogs.json').then(responseData => {
    smallCart = new SmallCart();
    smallCart.calculating();
    smallCart.htmlСhangeSmallCart();
});
window.addEventListener("storage", () => {
    smallCart.calculating();
    smallCart.htmlСhangeSmallCart();
});

