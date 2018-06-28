const renderRawResponse = (res) => {

    // Manipulates responseField to render the unformatted response
    responseField.innerHTML = `<text>${JSON.stringify(res)}</text>`;
}

var randInt = function (low, high) {
    return Math.floor(Math.random() * (high - low + 1));
}