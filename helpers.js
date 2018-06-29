
const renderRawResponse = (res) => {

    // Test function for rendering everything a received JSON will offer.
    display.innerHTML = `<text>${JSON.stringify(res)}</text>`;
}

var correctAnswer = 0;

const renderResponse = (response) => {
    if (response !== null) {
        document.getElementById("btn" + i).innerHTML = response.name;
        display.innerHTML = '<img src="' + response.sprites.front_default + '">';
    } else {
        responseField.innerHTML = "Loading. . .";
    }

}

var randInt = function (low, high) {
    return Math.floor(Math.random() * (high - low + 1));
}