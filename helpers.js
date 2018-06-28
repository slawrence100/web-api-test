const renderRawResponse = (res) => {
    // Takes the first 10 words from res
    let trimmedResponse = res.slice(0, 10);
    // Manipulates responseField to render the unformatted response
    responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
}

var randInt = function (low, high) {
    return Math.floor(Math.random() * (high - low + 1));
}