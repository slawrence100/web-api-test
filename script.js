const xhr = new XMLHttpRequest();
const url = "http://pokeapi.co/api/v2/pokemon/";

const inputField = document.getElementById("response-field");

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if (xhr.readyState = XMLHttpRequest.DONE) {
        renderRawResponse(xhr.response);
    }
}

url += randInt(1, 200);
url += "/";

xhr.open('GET', url);
xhr.send();

