'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const request = new XMLHttpRequest();
request.open(
  'GET',
  'https://countries-api-836d.onrender.com/countries/name/brazil'
);
request.send();

request.addEventListener('load', function () {
  console.log(this.responseText);
  const data = JSON.parse(this.responseText);
  console.log(data);
});
