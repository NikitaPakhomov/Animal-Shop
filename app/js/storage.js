

export let currentData = [];
export let currentName = "";
let filteredData;
if (!localStorage.getItem("0")) {
    localStorage.setItem("0", localStorage.length > 0 ? localStorage.length - 1 : 0);
}



export function sendHttpRequest(method, url) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };
        xhr.onerror = () => {
            reject('Something went wrong!');
        };
        xhr.send();
    });
    return promise;
};


sendHttpRequest('GET', 'http://localhost:3000/api/dogs.json').then(responseData => {
    filteredData = responseData;
});


export function setcurrentName(newName) {
    currentName = newName;
}
export function setCurrentData(newData) {
    currentData = newData;
}
export function getDataItem(name) {
    return filteredData.filter((data) => {
        return data.name == name;
    })[0];
}
export function addItemToLocalStorage(item, id) {
    if (checkItemInLocaleStorage(item)) {
        localStorage.setItem(`${id}`, JSON.stringify(item))
        if (id > +localStorage.getItem("0")) {
            localStorage.setItem("0", id);
        }
    }
}
export function clearLocalStorage() {
    localStorage.clear();
}
export function deleteItemFromLocalStorage(key) {
    localStorage.removeItem(key);
}
export function getDataFromLocaleStorage(id) {
    return JSON.parse(JSON.parse(localStorage.getItem(`${id}`)));
}
function checkItemInLocaleStorage(item) {
    for (let i = 1; i < localStorage.length; i++) {
        let localeItem = getDataFromLocaleStorage(localStorage.key(i));
        console.log(localeItem);
        let name = JSON.parse(item).name;
        if (name == localeItem.name) {
            let val = +localeItem.count;
            val = val + 1;
            localeItem.count = `${val.toString()}`;
            localStorage.setItem(localStorage.key(i), JSON.stringify(JSON.stringify(localeItem)));
            return false;
        }

    }
    return true;
}




export { filteredData };