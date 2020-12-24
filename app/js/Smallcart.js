export const cartBtnInHeader = document.querySelector('.header__ul').children[3].children[0];


cartBtnInHeader.addEventListener('click', () => {
    window.location.href = `../components/cart.html`;
    htmlСhangeSmallCart()
})




export class SmallCart {
    constructor(count, cost) {
        this.count = count;
        this.cost = cost;
    }

    cartArray = [];
    calculating() {
        this.count = this.cartArray.length;
        this.cost = 0;
        for (let i = 0; i < this.count; i++) {
            this.cost += Number(this.cartArray[i].cost.replace(/\s/g, ''));
        }
    }

    htmlСhangeSmallCart() {
        cartBtnInHeader.children[1].textContent = `Корзина (${this.count})`;
        cartBtnInHeader.children[2].textContent = `${this.cost} руб.`;
    }
    addToLocalStorage(arr) {
        localStorage.clear();
        arr.forEach((item, id) => {
            localStorage.setItem(`${id} obj`, JSON.stringify(item));
        })
    }

    addToCart(elem) {
        this.cartArray.push(elem);
        this.count++;
        this.calculating();
        this.htmlСhangeSmallCart();
        this.addToLocalStorage(this.cartArray);
    }


    deleteFromCart() {

    }
}

export let smallCart = new SmallCart(0, 0);