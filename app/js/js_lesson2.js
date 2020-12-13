let data = [
    {
        "img": "./img/dogs/dog-1.png",
        "name": "Айну",
        "cost": "12 000",
        "hunt": `${randomInteger()}`,
        "companions": `${randomInteger()}`,
        "decorative": `${randomInteger()}`,
        "service": `${randomInteger()}`,
        "Nofear": `${randomInteger()}`,
        "Shedslittle": `${randomInteger()}`,
        "Excellenthealth": `${randomInteger()}`,
        "Goodobedience": `${randomInteger()}`,
        "devoted": `${randomInteger()}`
    },
    {
        "img": "./img/dogs/dog-2.png",
        "name": "Афганская борзая",
        "cost": "15 000",
        "hunt": `${randomInteger()}`,
        "companions": `${randomInteger()}`,
        "decorative": `${randomInteger()}`,
        "service": `${randomInteger()}`,
        "Nofear": `${randomInteger()}`,
        "Shedslittle": `${randomInteger()}`,
        "Excellenthealth": `${randomInteger()}`,
        "Goodobedience": `${randomInteger()}`,
        "devoted": `${randomInteger()}`
    },
    {
        "img": "./img/dogs/dog-3.png",
        "name": "Барбет",
        "cost": "50 000",
        "hunt": `${randomInteger()}`,
        "companions": `${randomInteger()}`,
        "decorative": `${randomInteger()}`,
        "service": `${randomInteger()}`,
        "Nofear": `${randomInteger()}`,
        "Shedslittle": `${randomInteger()}`,
        "Excellenthealth": `${randomInteger()}`,
        "Goodobedience": `${randomInteger()}`,
        "devoted": `${randomInteger()}`
    },
    {
        "img": "./img/dogs/dog-4.png",
        "name": "Бассет",
        "cost": "10 000",
        "hunt": `${randomInteger()}`,
        "companions": `${randomInteger()}`,
        "decorative": `${randomInteger()}`,
        "service": `${randomInteger()}`,
        "Nofear": `${randomInteger()}`,
        "Shedslittle": `${randomInteger()}`,
        "Excellenthealth": `${randomInteger()}`,
        "Goodobedience": `${randomInteger()}`,
        "devoted": `${randomInteger()}`
    },
    {
        "img": "./img/dogs/dog-5.png",
        "name": "Легавой",
        "cost": "39 000",
        "hunt": `${randomInteger()}`,
        "companions": `${randomInteger()}`,
        "decorative": `${randomInteger()}`,
        "service": `${randomInteger()}`,
        "Nofear": `${randomInteger()}`,
        "Shedslittle": `${randomInteger()}`,
        "Excellenthealth": `${randomInteger()}`,
        "Goodobedience": `${randomInteger()}`,
        "devoted": `${randomInteger()}`
    },
    {
        "img": "./img/dogs/dog-6.png",
        "name": "Веттерхун",
        "cost": "12 000",
        "hunt": `${randomInteger()}`,
        "companions": `${randomInteger()}`,
        "decorative": `${randomInteger()}`,
        "service": `${randomInteger()}`,
        "Nofear": `${randomInteger()}`,
        "Shedslittle": `${randomInteger()}`,
        "Excellenthealth": `${randomInteger()}`,
        "Goodobedience": `${randomInteger()}`,
        "devoted": `${randomInteger()}`
    },
    {
        "img": "./img/dogs/dog-7.png",
        "name": "Древера",
        "cost": "17 000",
        "hunt": `${randomInteger()}`,
        "companions": `${randomInteger()}`,
        "decorative": `${randomInteger()}`,
        "service": `${randomInteger()}`,
        "Nofear": `${randomInteger()}`,
        "Shedslittle": `${randomInteger()}`,
        "Excellenthealth": `${randomInteger()}`,
        "Goodobedience": `${randomInteger()}`,
        "devoted": `${randomInteger()}`
    }
]

let itemsCont = document.querySelector('.cards');
let itemTemplate = itemsCont.querySelector('#template');
for (i = 0; i < 12; i++) {
    itemsCont.appendChild(createElement(getInfo()));
}

function createElement({ img, name, cost, hunt, companions, decorative, service, Nofear, Shedslittle, Excellenthealth, Goodobedience, devoted }) {
    let elem = document.createElement('div');
    elem.classList.add('cards__item');
    elem.append(itemTemplate.content.cloneNode(true));
    elem.querySelector('.cards__img').src = `${img}`;
    elem.querySelector('.cards__name').textContent = `${name}`;
    elem.querySelector('.cards__cost').textContent = `${cost}`;
    setData(elem, hunt, companions, decorative, service, Nofear, Shedslittle, Excellenthealth, Goodobedience, devoted);
    return elem;

}

function getInfo() {
    let int = Math.floor(Math.random() * (data.length - 1));
    return data[int];
}

function randomInteger() {
    let rand = 0 - 0.5 + Math.random() * (1 - 0 + 1);
    return Math.round(rand);
}
function setData(elem, ...datas) {
    elem.dataset.hunt = datas[0];
    elem.dataset.companions = datas[1];
    elem.dataset.decorative = datas[2];
    elem.dataset.service = datas[3];
    elem.dataset.Nofear = datas[4];
    elem.dataset.Shedslittle = datas[5];
    elem.dataset.Excellenthealth = datas[6];
    elem.dataset.Goodobedience = datas[7];
    elem.dataset.devoted = datas[8];
}

//------------------for filters show btn -------------------------
const btnShow = document.querySelector('.filters__show-animals');
const foundCount = document.querySelector('#filters__count');
const filter = document.querySelector('.filters')
const filtersPopup = document.querySelector('.filters__popup')


filter.addEventListener("click", () => findClickTarget(event))

function findClickTarget(e) {
    if (e.target.className == "checkbox") {
        console.log('ok');
    }
    insertPopup(e.target)
    return e.target;
}
function insertPopup(target) {
    console.log(target.getBoundingClientRect().left);
    console.log(filtersPopup.getBoundingClientRect().left);
    filtersPopup.style.left = target.getBoundingClientRect().left + 20 + "px";
    filtersPopup.style.top = pageYOffset + 20 + "px";
}
