'use strict';

// Exercise 1: Who do we have here?
// Wouldn't it cool to make a new friend with just the click of a button?
// Write a function that makes an API call to https://www.randomuser.me/api
// Inside the same file write two functions: one with XMLHttpRequest, and the other with axios
// Each function should make an API call to the given endpoint: https://www.randomuser.me/api
// Log the received data to the console
// Incorporate error handling

function randomUserApi() {
 
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://www.randomuser.me/api', true);
  xhr.responseType = 'json';

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status <= 299) {
      console.log(xhr.response);
    } else {
      console.log(" Error: " + xhr.status );
    }
  };
  xhr.onerror = () => {
    console.log(" Error: Connect server error. ");
  };
 
  xhr.send();
};


function versionAxios() {

axios
  .get('https://www.randomuser.me/api')
  .then(res => console.log(res.data))
  .catch(err => console.log(err));

};

randomUserApi();
versionAxios();