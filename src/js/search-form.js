import countriesListTpl from '../templates/country-list.hbs';
import countriesCardTpl from '../templates/country-card.hbs';
import { onAlert } from './notify.js';

const { debounce } = require('lodash');
const listEl = document.querySelector('#list');
const searchEl = document.querySelector('#search');

searchEl.addEventListener('input', debounce(fetchCountries, 500));

function fetchCountries(searchQuery) {
  let name = '';
  name = searchQuery.target.value;
  let url = `https://restcountries.com/v2/name/${name}`;
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      if (data.length === 1) {
        listEl.innerHTML = countriesCardTpl(data[0]);

        return;
      }

      if (data.length > 10) {
        listEl.innerHTML = '';
        onAlert();

        return;
      }

      listEl.innerHTML = countriesListTpl(data);
    })
    .catch(err => {
      console.log(err);
    });
}
