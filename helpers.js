
const renderRawResponse = (res) => {

    // Manipulates responseField to render the unformatted response
    responseField.innerHTML = `<text>${JSON.stringify(res)}</text>`;
}

const renderResponse = (res) => {
    var json_response = JSON.parse(res);
    responseField.innerHTML = '<p>' + json_response.name + "</p>";
}


var randInt = function (low, high) {
    return Math.floor(Math.random() * (high - low + 1));
}