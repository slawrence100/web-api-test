const xhr = new XMLHttpRequest();
var url = "https://pokeapi.co/api/v2/pokemon/";
const responseField = document.getElementById("response-field");
var responses = [];

// Makes 4 GET requests to four JSON objects filled with Pokemon Data.
for (var i = 0; i < 4; i++) {
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            responses.push(xhr.response);
        }
    }

    url += randInt(1, 720);
    url += "/";

    xhr.open('GET', url);
    xhr.send();
    url = "https://pokeapi.co/api/v2/pokemon/";
}
renderResponse(responses);

