let data = [{ "img": "./img/dogs/dog-1.png", "name": "Айну", "cost": "12 000", "hunt": "1", "companions": "0", "decorative": "1", "service": "0", "nofear": "0", "shedslittle": "0", "excellenthealth": "1", "goodobedience": "1", "devoted": "0" }, { "img": "./img/dogs/dog-2.png", "name": "Афганская борзая", "cost": "15 000", "hunt": "0", "companions": "0", "decorative": "1", "service": "1", "nofear": "1", "shedslittle": "0", "excellenthealth": "0", "goodobedience": "1", "devoted": "0" }, { "img": "./img/dogs/dog-3.png", "name": "Барбет", "cost": "50 000", "hunt": "1", "companions": "1", "decorative": "0", "service": "0", "nofear": "0", "shedslittle": "0", "excellenthealth": "0", "goodobedience": "0", "devoted": "1" }, { "img": "./img/dogs/dog-4.png", "name": "Бассет", "cost": "10 000", "hunt": "0", "companions": "1", "decorative": "0", "service": "0", "nofear": "0", "shedslittle": "1", "excellenthealth": "0", "goodobedience": "1", "devoted": "1" }, { "img": "./img/dogs/dog-5.png", "name": "Легавой", "cost": "39 000", "hunt": "0", "companions": "1", "decorative": "1", "service": "0", "nofear": "1", "shedslittle": "0", "excellenthealth": "0", "goodobedience": "0", "devoted": "0" }, { "img": "./img/dogs/dog-6.png", "name": "Веттерхун", "cost": "12 000", "hunt": "1", "companions": "1", "decorative": "1", "service": "0", "nofear": "0", "shedslittle": "1", "excellenthealth": "0", "goodobedience": "1", "devoted": "0" }, { "img": "./img/dogs/dog-7.png", "name": "Древера", "cost": "17 000", "hunt": "0", "companions": "1", "decorative": "0", "service": "1", "nofear": "0", "shedslittle": "1", "excellenthealth": "0", "goodobedience": "0", "devoted": "0" }]

let itemsCont = document.querySelector('.cards');
let itemTemplate = itemsCont.querySelector('#template');
let foundCount = document.querySelector('#filters__count');
const filter = document.querySelector('.filters');
const filtersPopup = document.querySelector('.filters__popup');
const filterTypes = document.querySelector('.filters__types').querySelector('.filters__ul');
const filterFeatures = document.querySelector('.filters__main-features').querySelector('.filters__ul');
const filterSize = document.querySelector('.filters__size').querySelector('.filters__inputs');
const filterShowBtn = filtersPopup.querySelector('.filters__show-animals');
const cartBtn = document.querySelector('.header__ul').children[3].children[0];
console.log(cartBtn);
let filteredDataCount;
let filterTimer;
let filtersActive = [];
let filterActiveTypes = [];
let filterActiveFeatures = [];

toHTML(7, data);

function clearBoard() {
    itemsCont.innerHTML = "";
}

function toHTML(count, array) {
    for (i = 0; i < count; i++) {
        // let elem = createElement(getInfo(array));
        let elem = createElement(array[i])
        itemsCont.appendChild(elem);
    }
}


function createElement({ img, name, cost }) {
    let elem = document.createElement('div');
    elem.classList.add('cards__item');
    elem.append(itemTemplate.content.cloneNode(true));
    elem.querySelector('.cards__img').src = `${img}`;
    elem.querySelector('.cards__name').textContent = `${name}`;
    elem.querySelector('.cards__cost').textContent = `${cost}`;
    return elem;

}

function getInfo(array) {
    let int = Math.floor(Math.random() * (data.length - 1));
    return array[int];
}




// ------------------------------POPUP------------------------------
filter.addEventListener("click", () => findClickTarget(event))

function findClickTarget(e) {
    let target = e.target;
    if (target.className == "checkbox") {
        filtersPopup.classList.remove('filters__popup_active')
        clearTimeout(filterTimer);
        if (target.checked) {
            filterTimer = setTimeout(() => insertPopup(target), 3000);
            filtersActive.push(target);
        } else {
            filtersPopup.classList.remove('filters__popup_active')
            if (filtersActive.includes(target)) {
                filtersActive.splice(filtersActive.indexOf(target), 1);
            }
            filterTimer = setTimeout(() => insertPopup(filtersActive[filtersActive.length - 1]), 3000);
        }
    }
    if (target.className == "filters__input") {
        filtersPopup.classList.remove('filters__popup_active')
        clearTimeout(filterTimer);
        console.log(target);
        if (!target.checked) {
            console.log('1');
            filterTimer = setTimeout(() => insertPopup(filterSize), 3000);
            filtersActive.push(filterSize);
        } else {
            console.log('2');
            filtersPopup.classList.remove('filters__popup_active')
            if (filtersActive.includes(filterSize)) {
                filtersActive.splice(filtersActive.indexOf(filterSize), 1);
            }
            filterTimer = setTimeout(() => insertPopup(filtersActive[filtersActive.length - 1]), 3000);
        }
    }
}

function insertPopup(target) {
    foundCount.textContent = filteredDataCount;
    if (target.className == "checkbox") {
        filtersPopup.style.left = target.labels[0].getBoundingClientRect().width + 32 + 'px';
        filtersPopup.style.top = target.labels[0].getBoundingClientRect().y - filter.getBoundingClientRect().y + "px";
        if (!filtersPopup.classList.contains('filters__popup_active')) {
            filtersPopup.classList.add('filters__popup_active');
        }
    }
    if (target.className == "filters__inputs") {
        filtersPopup.style.left = target.getBoundingClientRect().width + 32 + 'px';
        filtersPopup.style.top = target.getBoundingClientRect().y - filter.getBoundingClientRect().y + "px";
        if (!filtersPopup.classList.contains('filters__popup_active')) {
            filtersPopup.classList.add('filters__popup_active');
        }
    }
}



// ------------------------------filtering------------------------------



filterTypes.addEventListener("change", () => filterByTypes(event));
filterFeatures.addEventListener("change", () => filterByFeatures(event));
filterSize.addEventListener("change", () => filterBySize(event));
let filteredData = JSON.parse(JSON.stringify(data));
let currentData = [];
let min, max;


function filterByTypes(e) {
    let target = e.target;
    if (target.tagName == 'INPUT') {
        if (target.checked) {
            filterActiveTypes.push(target.value);
        } else {
            filterActiveTypes.splice(filterActiveTypes.indexOf(target.value), 1);
        }
    }
    filtering();
}

function filterByFeatures(e) {
    let target = e.target;
    if (target.tagName == 'INPUT') {
        if (target.checked) {
            filterActiveFeatures.push(target.value);
        } else {
            filterActiveFeatures.splice(filterActiveFeatures.indexOf(target.value), 1);
        }
    }
    filtering();
}

function filterBySize(e) {
    let target = e.target;
    if (target.tagName == 'INPUT') {
        if (target.name == 'filters__from') {
            min = target.value;
        }
        if (target.name == 'filters__to') {
            max = target.value;
        }
    }
    filtering();
}

function filtering() {
    currentData = filteredData.slice();
    if (filterActiveTypes.length != 0) {
        currentData = currentData.filter(data => {
            for (let i = 0; i < filterActiveTypes.length; i++) {
                if (data[filterActiveTypes[i]] == 1) { return true }
            }
        })
    }
    if (filterActiveFeatures.length != 0) {
        currentData = currentData.filter(data => {
            for (let i = 0; i < filterActiveFeatures.length; i++) {
                if (data[filterActiveFeatures[i]] != 1) {
                    return false;
                }
            }
            return true;
        })
    }
    if (max && min) {
        currentData = currentData.filter(data => {
            let cost = +data.cost.replace(/\s/g, '');
            if (min > cost) {
                return false;
            } else {
                return true;
            }
        })
        currentData = currentData.filter(data => {
            let cost = +data.cost.replace(/\s/g, '');
            if (max < cost) {
                return false;
            } else {
                return true;
            }
        })
    }
    filteredDataCount = currentData.length;
}
function reshuffle() {
    filtering();
    clearBoard();
    toHTML(currentData.length, currentData);
}

filterShowBtn.addEventListener('click', function (e) {
    e.preventDefault();
    reshuffle()
    cart.cartArray = currentData.slice();
    cart.calculating();
    cart.htmlchange();
})

class Cart {
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
}

let cart = new Cart(0, 0);
