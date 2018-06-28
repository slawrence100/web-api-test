
const renderRawResponse = (res) => {

    // Manipulates responseField to render the unformatted response
    responseField.innerHTML = `<text>${JSON.stringify(res)}</text>`;
}

const renderResponse = (res) => {
    if (json_response !== null) {
        responseField.innerHTML = '<p>' + res.name + "</p>";
    }

}


var randInt = function (low, high) {
    return Math.floor(Math.random() * (high - low + 1));
}