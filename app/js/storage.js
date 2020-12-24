

export let currentData = [];
export let currentName = "";
let filteredData;


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
    localStorage.setItem(`${id} obj`, JSON.stringify(item))
}
export function clearLocalStorage() {
    localStorage.clear();
}
export function deleteItemFromLocalStorage(item) {
    localStorage.removeItem(`${item}`);
}
export function getDataFromLocaleStorage(id) {
    return JSON.parse(localStorage.getItem(`${id} obj`));
}



export { filteredData };