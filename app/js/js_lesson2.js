let data = [
    {
        "img": "./img/dogs/dog-1.png",
        "name": "Айну",
        "cost": "12 000",
        "hunt": `${randomInteger()}`,
        "companions": `${randomInteger()}`,
        "decorative": `${randomInteger()}`,
        "service": `${randomInteger()}`,
        "nofear": `${randomInteger()}`,
        "shedslittle": `${randomInteger()}`,
        "excellenthealth": `${randomInteger()}`,
        "goodobedience": `${randomInteger()}`,
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
        "nofear": `${randomInteger()}`,
        "shedslittle": `${randomInteger()}`,
        "excellenthealth": `${randomInteger()}`,
        "goodobedience": `${randomInteger()}`,
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
        "nofear": `${randomInteger()}`,
        "shedslittle": `${randomInteger()}`,
        "excellenthealth": `${randomInteger()}`,
        "goodobedience": `${randomInteger()}`,
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
        "nofear": `${randomInteger()}`,
        "shedslittle": `${randomInteger()}`,
        "excellenthealth": `${randomInteger()}`,
        "goodobedience": `${randomInteger()}`,
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
        "nofear": `${randomInteger()}`,
        "shedslittle": `${randomInteger()}`,
        "excellenthealth": `${randomInteger()}`,
        "goodobedience": `${randomInteger()}`,
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
        "nofear": `${randomInteger()}`,
        "shedslittle": `${randomInteger()}`,
        "excellenthealth": `${randomInteger()}`,
        "goodobedience": `${randomInteger()}`,
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
        "nofear": `${randomInteger()}`,
        "shedslittle": `${randomInteger()}`,
        "excellenthealth": `${randomInteger()}`,
        "goodobedience": `${randomInteger()}`,
        "devoted": `${randomInteger()}`
    }
]

let itemsCont = document.querySelector('.cards');
let itemTemplate = itemsCont.querySelector('#template');


toHTML(12);

function toHTML(count) {
    for (i = 0; i < count; i++) {
        let elem = createElement(getInfo());
        itemsCont.appendChild(elem);
    }
}


function createElement({ img, name, cost, hunt, companions, decorative, service, nofear, shedslittle, excellenthealth, goodobedience, devoted }) {
    let elem = document.createElement('div');
    elem.classList.add('cards__item');
    elem.append(itemTemplate.content.cloneNode(true));
    elem.querySelector('.cards__img').src = `${img}`;
    elem.querySelector('.cards__name').textContent = `${name}`;
    elem.querySelector('.cards__cost').textContent = `${cost}`;
    setData(elem, hunt, companions, decorative, service, nofear, shedslittle, excellenthealth, goodobedience, devoted);
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
    elem.dataset.nofear = datas[4];
    elem.dataset.shedslittle = datas[5];
    elem.dataset.excellenthealth = datas[6];
    elem.dataset.goodobedience = datas[7];
    elem.dataset.devoted = datas[8];
}

//------------------for filters show btn -------------------------
const btnShow = document.querySelector('.filters__show-animals');
const foundCount = document.querySelector('#filters__count');
const filter = document.querySelector('.filters');
const filtersPopup = document.querySelector('.filters__popup');
let filterTimer;
let filtersActive = [];




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
                console.log(filtersActive.indexOf(target));
                console.log(target);
                filtersActive.splice(filtersActive.indexOf(target), 1);

            }
            filterTimer = setTimeout(() => insertPopup(filtersActive[filtersActive.length - 1]), 3000);
        }
        console.log(filtersActive[0].dataset);
    }
}

function insertPopup(target) {
    if (target) {
        filtersPopup.style.left = target.labels[0].getBoundingClientRect().width + 32 + 'px';
        filtersPopup.style.top = target.labels[0].getBoundingClientRect().y - filter.getBoundingClientRect().y + "px";
        if (!filtersPopup.classList.contains('filters__popup_active')) {
            filtersPopup.classList.add('filters__popup_active');
        }
    }
}

//------------------filtering-------------------------


