// Exercise 2: Programmer humor
// Who knew programmers could be funny?
// Write an function that makes an API call to https://xkcd.com/info.0.json
// Inside the same file write two programs: one with XMLHttpRequest, and the other with axios
// Each function should make an API call to the given endpoint: https://xkcd.com/info.0.json
// Log the received data to the console
// Render the img property into an <img> tag in the DOM
// Incorporate error handling

'use strict';

function forHumorXml() {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', 'https://xkcd.now.sh/?comic=614');
    xhr.onload = function () {
        if (this.status >= 200 && this.status <= 299) {
            img.src = this.response.img;
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
    xhr.onerror = () => console.log('Error: Network failing');
    xhr.send();
}

function forHumorAxios() {
    axios('https://xkcd.now.sh/?comic=614')
        .then(res => (img.src = res.data.img))
        .catch(err => console.log(err));
}

const img = document.createElement('img');
document.body.appendChild(img);


forHumorXml();
forHumorAxios();
