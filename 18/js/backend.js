import { onFilterChangeSelect, QUANTITY__ELEMENTS } from './filter.js';


const getData = (onSucces, onFail) =>
  fetch('https://24.javascript.pages.academy/keksobooking/data',
    {
      method: 'GET',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ошибка загрузки');
    })
    .then((response) => {
      onSucces(response.slice(0,QUANTITY__ELEMENTS));
      onFilterChangeSelect(response.slice(0,QUANTITY__ELEMENTS));
    })
    .catch(onFail);

const sendData = (onSucces, onFail, body) => {
  fetch('https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSucces();
      } else {
        onFail();
      }
    })
    .catch(onFail);
};

export { getData, sendData };
