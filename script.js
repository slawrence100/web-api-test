const xhr = new XMLHttpRequest();
const url = "http://pokeapi.co/api/v2/pokemon/";

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if(xhr.readyState = XMLHttpRequest.DONE){
        // Code to execute with response
    }
}

xhr.open('GET', url);
xhr.send();

var randInt = function (low, high) {
    return Math.floor(Math.random() * (high - low + 1));
}