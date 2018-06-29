
const renderRawResponse = (res) => {

    // Test function for rendering everything a received JSON will offer.
    display.innerHTML = `<text>${JSON.stringify(res)}</text>`;
}

var correctAnswer = 0;

const renderResponse = (_responses) => {
    if (_responses !== null) {
            document.getElementById("btn" + i).innerHTML = _responses[i].name;
        display.innerHTML = '<img src="' + _responses.sprites.front_default + '">';
    } else {
        responseField.innerHTML = "Loading. . .";
    }

}

var randInt = function (low, high) {
    return Math.floor(Math.random() * (high - low + 1));
}