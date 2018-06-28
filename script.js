const xhr = new XMLHttpRequest();
var url = "https://pokeapi.co/api/v2/pokemon/";

const responseField = document.getElementById("response-field");

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

