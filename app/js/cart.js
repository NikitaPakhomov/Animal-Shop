export const cartBtn = document.querySelector('.header__ul').children[3].children[0];

export class Cart {
    constructor(count, cost) {
        this.count = count;
        this.cost = cost;
    }

    cartArray = [];
    calculating() {
        this.count = this.cartArray.length;
        for (let i = 0; i < this.count; i++) {
            this.cost += +this.cartArray[i].cost.replace(/\s/g, '');
        }
        console.log(this.count, this.cost);
    }
    htmlchange() {
        cartBtn.children[1].textContent = `Корзина (${this.count})
        Цена: ${this.cost}`;
    }
    addToCart(elem) {
        this.cartArray.push(elem);
    }
    deleteFromCart(elem) {

    }
}

export let cart = new Cart(0, 0);