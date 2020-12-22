export const cartBtn = document.querySelector('.header__ul').children[3].children[0];

export class Cart {
    constructor(count, cost) {
        this.count = count;
        this.cost = cost;
        this.htmlchange();
    }

    cartArray = [];
    calculating() {
        this.count = this.cartArray.length;
        this.cost = 0;
        for (let i = 0; i < this.count; i++) {
            this.cost += Number(this.cartArray[i].cost.replace(/\s/g, ''));
        }
    }
    htmlchange() {
        cartBtn.children[1].textContent = `Корзина (${this.count})`;
        cartBtn.children[2].textContent = `${this.cost} руб.`;
    }
    addToCart(elem) {
        this.cartArray.push(elem);
        this.count++;
        this.calculating();
        this.htmlchange();
    }
    deleteFromCart(elem) {

    }
}

export let cart = new Cart(0, 0);