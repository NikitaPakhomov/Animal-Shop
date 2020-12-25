let arrayElements = document.body.querySelector('.wrapper').querySelectorAll('*')
let arrayColoredElements = [];
let catalogBtn = document.querySelector('.btn-catalog-container');
let count = 0;
function firstTime() {
    let timerId
    count++;
    if (count % 5 == 0) {
        elementColoring();
        timerId = setInterval(() => {
            elementColoring();
            removeRandomItem();
        }, 2000);
    }
    if (count > 5 && (count - 1) % 5 == 0) {
        clearInterval(timerId);
        console.log('work');
        arrayColoredElements.forEach(() => {
            removeRandomItem();
        })
    }

}

catalogBtn.addEventListener("click", firstTime);

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
    let randomElementIndex = arrayColoredElements.indexOf(randomElement);
    arrayColoredElements.splice(randomElementIndex, 1);
}

function elementColoring() {
    let randomElement = getRandomElement();
    randomElement.style = getBg();
    AddItemToArray(randomElement);
}