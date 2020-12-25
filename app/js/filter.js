import { filtersPopup, findClickTarget } from './filterPopup.js';
import { currentData, filteredData, setCurrentData } from './storage.js'

export const filter = document.querySelector('.filters');
export const filterSize = document.querySelector('.filters__size').querySelector('.filters__inputs');
export const filterSizeInputs = document.querySelector('.filters__size').querySelector('.filters__inputs').querySelectorAll('.filters__input');
const filterTypes = document.querySelector('.filters__types').querySelector('.filters__ul');
const filterFeatures = document.querySelector('.filters__main-features').querySelector('.filters__ul');


export let filtersActive = [];
export let filterActiveTypes = [];
export let filterActiveFeatures = [];
export let filteredDataCount;



let min, max;


function filterByTypes(e) {
    let target = e.target;
    if (target.tagName == 'INPUT') {
        if (target.checked) {
            filterActiveTypes.push(target.value);
        } else {
            filterActiveTypes.splice(filterActiveTypes.indexOf(target.value), 1);
        }
        findClickTarget(event)
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
        findClickTarget(event)
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
        findClickTarget(event);
    }
    filtering();
}

export function filtering() {
    setCurrentData(filteredData.slice());
    if (filterActiveTypes.length != 0) {
        setCurrentData(currentData.filter(data => {
            for (let i = 0; i < filterActiveTypes.length; i++) {
                if (data[filterActiveTypes[i]] == 1) { return true }
            }
        }))
    }
    if (filterActiveFeatures.length != 0) {
        setCurrentData(currentData.filter(data => {
            for (let i = 0; i < filterActiveFeatures.length; i++) {
                if (data[filterActiveFeatures[i]] != 1) {
                    return false;
                }
            }
            return true;
        }))
    }
    if (min) {
        setCurrentData(currentData.filter(data => {
            let size = +data.size.replace(/\s/g, '');
            if (min > size) {
                return false;
            } else {
                return true;
            }
        }))
    }
    if (max) {
        setCurrentData(currentData.filter(data => {
            let size = +data.size.replace(/\s/g, '');
            if (max < size) {
                return false;
            } else {
                return true;
            }
        }))
    }
    filteredDataCount = currentData.length;

}




filterTypes.addEventListener("change", () => filterByTypes(event));
filterFeatures.addEventListener("change", () => filterByFeatures(event));
filterSizeInputs[0].addEventListener("input", () => filterBySize(event));
filterSizeInputs[1].addEventListener("input", () => filterBySize(event));
console.dir(filterSizeInputs[0]);