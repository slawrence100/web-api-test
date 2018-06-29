
const renderRawResponse = (res) => {

    // Test function for rendering everything a received JSON will offer.
    display.innerHTML = `<text>${JSON.stringify(res)}</text>`;
}

var correctAnswer = 0;

const renderResponse = (_responses) => {
    if (_response !== null) {
        for (var i = 1; i <= 4; i++) {
            document.getElementById("btn" + i).innerHTML = _responses[i].name;
        }
        correctAnswer = randInt(0, 3);
        display.innerHTML = '<img src="' + _responses[correctAnswer].sprites.front_default + '">';
    } else {
        responseField.innerHTML = "Loading. . .";
    }

}
// TODO: Implement button onclick actions
function answer(ansNumber) {
    if (ansNumber === correctAnswer) {
        display.innerHTML += "<p>Correct!</p>";
    } else {
        display.innerHTML += "<p>Incorrect!</p>";
    }
}
var randInt = function (low, high) {
    return Math.floor(Math.random() * (high - low + 1));
}