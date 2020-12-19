
import { data } from './json.js';

export let currentData = [];
export let filteredData = JSON.parse(JSON.stringify(data));

export function setCurrentData(newData) {
    currentData = newData;
}
export function getDataItem(name) {
    return filteredData.filter((data) => {
        return data.name == name;
    })[0];
}