const getData = (onSucces, onFail, onFilterChangeSelect) =>
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
      onSucces(response);
      onFilterChangeSelect(response);
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
