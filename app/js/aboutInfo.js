import { currentName, getDataItem, sendHttpRequest } from './storage.js';
import { addItemToLocalStorage } from './storage.js';
import { smallCart } from './Smallcart.js'


let template = document.querySelector('#template');
let main = document.querySelector('.about');


class About {
    constructor() { };

    getDataFromStorage() {
        let info = decodeURIComponent(window.location.search).replace('?name=', '');
        info = getDataItem(info);
        return info;
    }

    createElement(data) {
        let elem = template.content.cloneNode(true)
        elem.querySelector(".about__h1").textContent = data.name;
        elem.querySelector(".about__img").src = '.' + data.img;
        elem.querySelector(".about__cost").textContent = data.cost;
        elem.querySelector(".about__h").textContent = "Характеристика " + data.name;
        elem.querySelector(".type").textContent = data.hunt ? "Охотничья, " : "";
        elem.querySelector(".type").textContent += +data.companions ? "Компаньоны, " : "";
        elem.querySelector(".type").textContent += +data.decorative ? "Декоративная, " : "";
        elem.querySelector(".type").textContent += +data.service ? "Служебная, " : "";
        elem.querySelector(".type").textContent = elem.querySelector(".type").textContent.slice(0, elem.querySelector(".type").textContent.lastIndexOf(','));
        elem.querySelector(".about__h1").textContent = data.name;
        return elem;
    }

    toHtml(elem) {
        main.append(elem);
    }
}

sendHttpRequest('GET', 'http://localhost:3000/api/dogs.json').then(responseData => {
    let about = new About();
    about.toHtml(about.createElement(about.getDataFromStorage()));
    console.log(about.getDataFromStorage());
    const addToCartBtn = document.querySelector('.about_btn-addtocart');
    let num = localStorage.length;
    addToCartBtn.addEventListener('click', () => {
        addItemToLocalStorage(JSON.stringify(about.getDataFromStorage()), localStorage.length);
        smallCart.calculating();
        smallCart.htmlСhangeSmallCart();
    });
    smallCart.calculating();
    smallCart.htmlСhangeSmallCart();
});
window.addEventListener("storage", () => {
    smallCart.calculating();
    smallCart.htmlСhangeSmallCart();
});


