const request = new XMLHttpRequest();
request.onload = function (event) {

    console.log('request onload: ', event);
};
request.onerror = function (event) {
    console.log('request onerror: ', event);
};
request.open('GET', "http://localhost:3000/api/dogs.json", true);
request.send();
