let arrayElements = document.body.querySelector('.wrapper').querySelectorAll('*')
let arrayColoredElements = [];

function firstTime() {
    elementColoring();
    setInterval(() => {
        elementColoring();
        removeRandomItem();
    }, 2000);
}

window.addEventListener("load", firstTime);

function getRandomElement() {
    let item = arrayElements[Math.floor(Math.random() * arrayElements.length)];
    return item;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getBg() {
    let red = getRandomInt(255);
    let green = getRandomInt(255);
    let blue = getRandomInt(255);
    let style = `background-color: rgba(${red},${green},${blue},0.5);`
    return style;
}

function AddItemToArray(item) {
    arrayColoredElements.push(item);
}
function removeRandomItem() {
    let randomInt = getRandomInt(arrayColoredElements.length);
    let randomElement = arrayColoredElements[randomInt];
    randomElement.style = '';
    console.log(randomElement);
    console.log(arrayColoredElements);
    let randomElementIndex = arrayColoredElements.indexOf(randomElement);
    arrayColoredElements.splice(randomElementIndex, 1);
    console.log(arrayColoredElements);
}

function elementColoring() {
    let randomElement = getRandomElement();
    randomElement.style = getBg();
    AddItemToArray(randomElement);
}