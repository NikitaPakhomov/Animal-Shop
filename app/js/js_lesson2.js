let data = [
    {
        "img": "./img/dogs/dog-1.png",
        "name": "Айну",
        "cost": "12 000",
    },
    {
        "img": "./img/dogs/dog-2.png",
        "name": "Афганская борзая",
        "cost": "15 000",
    },
    {
        "img": "./img/dogs/dog-3.png",
        "name": "Барбет",
        "cost": "50 000",
    },
    {
        "img": "./img/dogs/dog-4.png",
        "name": "Бассет",
        "cost": "10 000",
    },
    {
        "img": "./img/dogs/dog-5.png",
        "name": "Легавой",
        "cost": "39 000",
    },
    {
        "img": "./img/dogs/dog-6.png",
        "name": "Веттерхун",
        "cost": "12 000",
    },
    {
        "img": "./img/dogs/dog-7.png",
        "name": "Древера",
        "cost": "17 000",
    }
]

let itemsCont = document.querySelector('.cards');
let itemTemplate = itemsCont.querySelector('#template');
for (i = 0; i < 12; i++) {
    itemsCont.appendChild(createElement(getInfo()));
}

function createElement({ img, name, cost }) {
    let elem = document.createElement('div');
    elem.classList.add('cards__item');
    elem.append(itemTemplate.content.cloneNode(true));
    elem.children[0].children[0].src = `${img}`;
    console.log(elem.children[0].children[0].src);
    elem.children[1].textContent = `${name}`;
    elem.children[2].textContent = `${cost}`;
    return elem;

}

function getInfo() {
    let int = Math.floor(Math.random() * (data.length - 1));
    console.log(int);
    return data[int];
}





